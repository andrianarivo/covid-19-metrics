import { act, create } from 'react-test-renderer';
import App from '../../components/App';

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;
describe('Testing App component', () => {
  test('renders correctly', async () => {
    let tree;
    await act(() => {
      tree = create(<App />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
