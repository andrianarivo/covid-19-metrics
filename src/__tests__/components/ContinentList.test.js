import { create } from 'react-test-renderer';
import ContinentList from '../../components/ContinentList';
import { withRouter } from '../../utils/testUtils';

describe('Testing ContinentList component', () => {
  test('renders correctly', () => {
    const continentItems = [
      {
        updated: 1687952392990,
        active: 2389357,
        continent: 'North America',
      },
      {
        updated: 1687955393389,
        active: 14773130,
        continent: 'Asia',
      },
    ];
    const tree = create(withRouter(<ContinentList continents={continentItems} />));
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
