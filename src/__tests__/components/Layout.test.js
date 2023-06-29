import { create } from 'react-test-renderer';
import { Route, Routes } from 'react-router-dom';
import { withRouter } from '../../utils/testUtils';
import Layout from '../../components/Layout';

describe('Testing Layout component', () => {
  const renderLayout = () => withRouter(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<main>Mock Home</main>} />
      </Route>
    </Routes>,
  );

  test('renders correctly', async () => {
    const tree = create(renderLayout());
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
