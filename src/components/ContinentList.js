import PropTypes from 'prop-types';
import styled from 'styled-components';
import ContinentItem from './ContinentItem';

export default function ContinentList(props) {
  const { continents } = props;
  return (
    <Continents>
      {continents.map((item) => (
        <ContinentItem
          key={item.continent}
          continent={item.continent}
          active={item.active}
          updated={item.updated}
        />
      ))}
    </Continents>
  );
}

ContinentList.propTypes = {
  continents: PropTypes.arrayOf(Object).isRequired,
};

const Continents = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
