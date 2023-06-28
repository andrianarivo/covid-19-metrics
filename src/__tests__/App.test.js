import renderer from 'react-test-renderer';
import App from '../components/App';

describe('Testing App component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
