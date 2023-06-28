import PropTypes from 'prop-types';
import CountryItem from './CountryItem';

export default function CountryList(props) {
  const { countries } = props;
  return (
    <table>
      {countries.map((item) => (
        <CountryItem
          key={item.country}
          country={item.country}
          active={item.active}
          updated={item.updated}
        />
      ))}
    </table>
  );
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(Object).isRequired,
};
