import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

export default function CountryItem(props) {
  const { country, active, updated } = props;
  return (
    <Country>
      <td>{country}</td>
      <td>
        <ul>
          <li>
            {active}
          </li>
          <li>{`${moment(new Date(updated)).fromNow()}`}</li>
        </ul>
      </td>
    </Country>
  );
}

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
};

const Country = styled.tr`
  width: 100%;
  height: 5rem;

  td:nth-child(1) {
    padding-left: 1rem;
  }

  ul {
    li {
      list-style: none;
    }
  }

  &:nth-child(n) {
    background-color: #dc4781;
  }

  &:nth-child(2n) {
    background-color: #cf4378;
  }
`;
