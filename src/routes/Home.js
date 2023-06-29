import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { selectContinent } from '../redux/store';
import { getContinents } from '../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../redux/api';
import ContinentList from '../components/ContinentList';
import Container from '../styled/Container';
import FeaturedContinent from '../components/FeaturedContinent';

export default function Home() {
  const { loading, error, continentItems } = useSelector(selectContinent);
  const [filteredContinents, setFilteredContinents] = useState([]);
  const dispatch = useDispatch();

  const featured = useMemo(
    () => continentItems[Math.floor(Math.random() * continentItems.length)],
    [continentItems],
  );

  useEffect(() => {
    if (continentItems.length === 0) {
      dispatch(getContinents({ url: GET_CONTINENTS }));
    }
    setFilteredContinents(continentItems);
  }, [dispatch, continentItems]);

  if (loading) {
    return (
      <Container>Loading...</Container>
    );
  }

  if (error) {
    return (
      <Container>{error}</Container>
    );
  }

  const changeFilter = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case 'north':
        setFilteredContinents(continentItems.filter((item) => item.continentInfo.lat > 2));
        break;
      case 'south':
        setFilteredContinents(continentItems.filter((item) => item.continentInfo.lat < 2));
        break;
      case 'all':
      default:
        setFilteredContinents(continentItems);
        break;
    }
  };

  return (
    <Container>
      <FeaturedContinent
        continent={featured.continent}
        updated={featured.updated}
        active={featured.active}
        interactive
      />
      <FilterControl>
        <p>
          Hemisphere:
        </p>
        <select onChange={changeFilter}>
          <option value="all">all</option>
          <option value="north">north</option>
          <option value="south">south</option>
        </select>
      </FilterControl>
      <ContinentList continents={filteredContinents} />
    </Container>
  );
}

const FilterControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 0 0.7rem 0.7rem;
  text-transform: uppercase;
  align-self: flex-start;

  select {
    border: none;
    background-color: #ec4c8a;
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    font-size: 1rem;
  }
`;
