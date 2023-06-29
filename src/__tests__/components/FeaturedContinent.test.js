import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withRouter } from '../../utils/testUtils';
import FeaturedContinent from '../../components/FeaturedContinent';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Testing FeaturedContinent component', () => {
  test('renders correctly', () => {
    const tree = create(withRouter(<FeaturedContinent
      continent="Dummy"
      active={0}
      updated={0}
    />));
    expect(tree.toJSON()).toMatchSnapshot();
  });

  test('clicks the button and navigate', async () => {
    // Arrange
    render(<FeaturedContinent continent="Dummy" active={0} updated={0} interactive />);

    // Act
    const button = screen.getByTestId('button-Dummy');
    await userEvent.click(button);

    // Assert
    expect(mockUseNavigate).toBeCalledWith('details/Dummy', {
      state: {
        active: 0,
        continent: 'Dummy',
        updated: 0,
      },
    });
    mockUseNavigate.mockRestore();
  });
});
