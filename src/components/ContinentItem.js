import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import africa from '../images/africa.png';
import europe from '../images/europe.png';
import northAmerica from '../images/north_america.png';
import asia from '../images/asia.png';
import oceania from '../images/oceania.png';
import southAmerica from '../images/south_america.png';

const getImage = (continent) => {
  switch (continent.toLowerCase()) {
    case 'asia':
      return asia;
    case 'africa':
      return africa;
    case 'north america':
      return northAmerica;
    case 'south america':
      return southAmerica;
    case 'australia-oceania':
      return oceania;
    case 'europe':
      return europe;
    default:
      return asia;
  }
};

export default function ContinentItem(props) {
  const navigate = useNavigate();
  const { continent, active, updated } = props;

  return (
    <Continent image={continent}>
      <p>{continent}</p>
      <p>
        <span>{active}</span>
        {' '}
        <span>active cases</span>
      </p>
      <p>
        updated
        {` ${moment(new Date(updated)).fromNow()}`}
      </p>
      <button
        type="button"
        data-testid={`button-${continent}`}
        onClick={() => {
          navigate(`details/${continent}`);
        }}
      >
        {' '}
      </button>
    </Continent>
  );
}

ContinentItem.propTypes = {
  continent: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
};

const Continent = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  list-style: none;
  flex: 1 1 50%;
  padding: 1rem 0;
  height: 10rem;
  background-image: url(${(props) => getImage(props.image)});
  background-size: contain;
  background-repeat: no-repeat;
  filter: blur(5);

  button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  p {
    padding-right: 0.5rem;

    span:nth-child(2) {
      font-size: 0.7rem;
    }
  }

  p:nth-child(1) {
    font-weight: bold;
    text-transform: uppercase;
    text-align: end;
  }

  p:nth-child(3) {
    font-size: 0.7rem;
  }

  &:nth-child(n) {
    background-color: #dc4781;
  }

  &:nth-child(3n) {
    background-color: #cf4378;
  }

  &:nth-child(2) {
    background-color: #cf4378;
  }
`;
