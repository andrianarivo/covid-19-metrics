import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCountries } from '../redux/store';
import { getCountries } from '../redux/countries/countriesSlice';
import { GET_COUNTRIES } from '../redux/api';
import CountryList from '../components/CountryList';
import Container from '../styled/Container';
import FeaturedContinent from '../components/FeaturedContinent';

export default function Countries() {
  const { state } = useLocation();
  const { slug } = useParams();
  const { loading, error, countryItems } = useSelector(selectCountries);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryItems.length === 0) {
      dispatch(getCountries({ url: GET_COUNTRIES }));
    }
    setSelectedCountries(countryItems.filter((item) => item.continent === slug));
  }, [dispatch, slug, countryItems.length, countryItems]);

  if (loading) {
    return (
      <Container>
        Loading...
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        {error}
      </Container>
    );
  }

  return (
    <Container>
      <FeaturedContinent
        continent={state.continent}
        active={state.active}
        updated={state.updated}
      />
      <p style={{
        padding: '0.7rem 0 0.7rem 0.7rem',
        textTransform: 'uppercase',
        alignSelf: 'flex-start',
      }}
      >
        Country breakdown:
      </p>
      <CountryList countries={selectedCountries} />
    </Container>
  );
}
