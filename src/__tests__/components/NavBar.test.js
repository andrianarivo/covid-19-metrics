import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../../components/NavBar';
import { withRouter } from '../../utils/testUtils';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Testing NavBar component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(withRouter(<NavBar />));
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('user interactions', async () => {
    // Arrange
    render(withRouter(<NavBar />));
    const homeLink = screen.getByTestId('go-back');

    // Act
    await userEvent.click(homeLink);

    // Assert
    expect(mockUseNavigate).toBeCalledWith(-1);
    mockUseNavigate.mockRestore();
  });
});
