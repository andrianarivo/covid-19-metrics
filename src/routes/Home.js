import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectContinent } from '../redux/store';
import { getContinents } from '../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../redux/api';

export default function Home() {
  const { loading, error, continentItems } = useSelector(selectContinent);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <ul>
        {continentItems.map((item) => (
          <li key={item.continent}>
            <>
              <p>{item.continent}</p>
              <p>
                {item.active}
                {' '}
                active cases
              </p>
              <p>{new Date(item.updated).toDateString()}</p>
              <button
                type="button"
                onClick={() => {
                  navigate(`details/${item.continent}`);
                }}
              >
                {item.continent}
              </button>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
