import PropTypes from 'prop-types';
import ContinentItem from './ContinentItem';

export default function ContinentList(props) {
  const { continents } = props;
  return (
    <ul>
      {continents.map((item) => (
        <ContinentItem
          key={item.continent}
          continent={item.continent}
          active={item.active}
          updated={item.updated}
        />
      ))}
    </ul>
  );
}

ContinentList.propTypes = {
  continents: PropTypes.arrayOf(Object).isRequired,
};
