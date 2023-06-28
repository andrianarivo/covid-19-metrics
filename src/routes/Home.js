import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContinent } from '../redux/store';
import { getContinents } from '../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../redux/api';
import ContinentList from '../components/ContinentList';

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
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>{error}</div>
    );
  }

  return (
    <div>
      This is the home page
      <ContinentList continents={continentItems} />
    </div>
  );
}
