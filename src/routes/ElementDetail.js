import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCountries } from '../redux/store';
import { getCountries } from '../redux/countries/countriesSlice';
import { GET_COUNTRIES } from '../redux/api';

export default function ElementDetail() {
  const { slug } = useParams();
  const { loading, error, countryItems } = useSelector(selectCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries({ url: GET_COUNTRIES, continent: slug }));
  }, [dispatch, slug]);

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
      <table>
        {countryItems.map((item) => (
          <tr key={item.country}>
            <td>{item.country}</td>
            <td>
              <ul>
                <li>
                  {item.active}
                  {' '}
                  active cases
                </li>
                <li>{new Date(item.updated).toDateString()}</li>
              </ul>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
