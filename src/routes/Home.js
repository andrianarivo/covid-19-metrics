import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContinent } from '../redux/store';
import { getContinents } from '../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../redux/api';

export default function Home() {
  const { loading, error, continentItems } = useSelector(selectContinent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents({ url: GET_CONTINENTS }));
  }, [dispatch]);

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
      <pre>{JSON.stringify(continentItems, null, 2)}</pre>
    </div>
  );
}
