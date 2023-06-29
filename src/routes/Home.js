import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContinent } from '../redux/store';
import { getContinents } from '../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../redux/api';
import ContinentList from '../components/ContinentList';
import Container from '../styled/Container';
import FeaturedContinent from '../components/FeaturedContinent';

export default function Home() {
  const { loading, error, continentItems } = useSelector(selectContinent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (continentItems.length === 0) {
      dispatch(getContinents({ url: GET_CONTINENTS }));
    }
  }, [dispatch, continentItems.length]);

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

  return (
    <Container style={{
      flexDirection: 'column',
    }}
    >
      <FeaturedContinent />
      <ContinentList continents={continentItems} />
    </Container>
  );
}
