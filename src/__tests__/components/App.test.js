import { act, create } from 'react-test-renderer';
import App from '../../components/App';

describe('Testing App component', () => {
  test('renders correctly', async () => {
    let tree;
    await act(() => {
      tree = create(<App />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
