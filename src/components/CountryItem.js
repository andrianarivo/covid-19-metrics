import PropTypes from 'prop-types';

export default function CountryItem(props) {
  const { country, active, updated } = props;
  return (
    <tr key={country}>
      <td>{country}</td>
      <td>
        <ul>
          <li>
            {active}
            {' '}
            active cases
          </li>
          <li>{new Date(updated).toDateString()}</li>
        </ul>
      </td>
    </tr>
  );
}

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
};
