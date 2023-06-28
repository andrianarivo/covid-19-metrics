import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../../components/NavBar';
import { withRouter } from '../../utils/testUtils';

describe('Testing NavBar component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(withRouter(<NavBar />));
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('user interactions', async () => {
    render(withRouter(<NavBar />));
    const homeLink = screen.getByTestId('home-link');
    await userEvent.click(homeLink);
    expect(homeLink).toBeEnabled();
  });
});
