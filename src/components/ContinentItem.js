import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Icon from '../styled/Icon';
import getImage from '../utils/componentUtils';

export default function ContinentItem(props) {
  const navigate = useNavigate();
  const { continent, active, updated } = props;

  return (
    <Continent image={continent}>
      <p>{continent}</p>
      <p>{active}</p>
      <p>{`${moment(new Date(updated)).fromNow()}`}</p>
      <Icon icon={faArrowCircleRight} />
      <button
        type="button"
        data-testid={`button-${continent}`}
        onClick={() => {
          navigate(`details/${continent}`, { state: { continent, active, updated } });
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
  flex: 0 1 50%;
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
  }

  p:nth-child(1) {
    font-weight: bold;
    text-transform: uppercase;
    text-align: end;
  }

  p:nth-child(3) {
    font-size: 0.7rem;
  }

  svg {
    position: absolute;
    top: 0;
    right: 0;
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
