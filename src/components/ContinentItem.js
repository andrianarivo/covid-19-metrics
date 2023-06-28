import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function ContinentItem(props) {
  const navigate = useNavigate();
  const { continent, active, updated } = props;
  return (
    <li>
      <p>{continent}</p>
      <p>
        {active}
        {' '}
        active cases
      </p>
      <p>{new Date(updated).toDateString()}</p>
      <button
        type="button"
        onClick={() => {
          navigate(`details/${continent}`);
        }}
      >
        {continent}
      </button>
    </li>
  );
}

ContinentItem.propTypes = {
  continent: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  updated: PropTypes.number.isRequired,
};
