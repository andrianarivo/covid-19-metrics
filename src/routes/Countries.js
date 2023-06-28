import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCountries } from '../redux/store';
import { getCountries } from '../redux/countries/countriesSlice';
import { GET_COUNTRIES } from '../redux/api';
import CountryList from '../components/CountryList';

export default function Countries() {
  const { slug } = useParams();
  const { loading, error, countryItems } = useSelector(selectCountries);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countryItems.length === 0) {
      dispatch(getCountries({ url: GET_COUNTRIES }));
    }
    setFilteredCountries(countryItems.filter((item) => item.continent === slug));
  }, [dispatch, slug, countryItems.length, countryItems]);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  return (
    <div>
      <h3>{slug}</h3>
      This is the element detail
      <CountryList countries={filteredCountries} />
    </div>
  );
}
