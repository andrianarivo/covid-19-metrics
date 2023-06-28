import { create } from 'react-test-renderer';
import CountryList from '../../components/CountryList';

describe('Testing CountryList component', () => {
  test('renders correctly', () => {
    const countryItems = [
      {
        updated: 1687957193344,
        country: 'Afghanistan',
        active: 12338,
      },
      {
        updated: 1687957193333,
        country: 'Albania',
        active: 1696,
      },
    ];
    const tree = create(<CountryList countries={countryItems} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
