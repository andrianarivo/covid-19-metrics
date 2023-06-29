import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import northAmerica from '../images/north_america.png';

export default function FeaturedContinent(props) {
  const navigate = useNavigate();
  const {
    continent, active, updated, interactive,
  } = props;

  return (
    <Featured>
      <div />
      <div>
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
            if (interactive) {
              navigate(`details/${continent}`);
            }
          }}
        >
          {' '}
        </button>
      </div>
    </Featured>
  );
}

FeaturedContinent.propTypes = {
  continent: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
  interactive: PropTypes.bool.isRequired,
};

const Featured = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #fd5294;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;

  p {
    &:nth-child(1) {
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  div {
    flex: 1 1 50%;

    &:nth-child(1) {
      height: 100%;
      background-image: url(${northAmerica});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    &:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
