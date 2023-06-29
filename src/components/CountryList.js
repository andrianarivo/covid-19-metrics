import PropTypes from 'prop-types';
import styled from 'styled-components';
import CountryItem from './CountryItem';

export default function CountryList(props) {
  const { countries } = props;
  return (
    <Countries>
      <tbody>
        {countries.map((item) => (
          <CountryItem
            key={item.country}
            country={item.country}
            active={item.active}
            updated={item.updated}
          />
        ))}
      </tbody>
    </Countries>
  );
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(Object).isRequired,
};

const Countries = styled.table`
  width: 100%;
  border-spacing: 0;
`;
