import { create } from 'react-test-renderer';
import CountryItem from '../../components/CountryItem';

describe('Testing CountryItem component', () => {
  test('renders correctly', () => {
    const tree = create(<CountryItem country="Dummy Country" active={0} updated={0} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
