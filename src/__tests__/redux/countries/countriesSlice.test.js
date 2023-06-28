import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_COUNTRIES } from '../../../redux/api';
import { getCountries } from '../../../redux/countries/countriesSlice';

const mockStore = configureStore([thunk]);

describe('Testing Countries slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('getCountries thunk when successful', async () => {
    // Arrange
    const countriesData = [
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

    // Act
    await store.dispatch(getCountries({ url: GET_COUNTRIES }));
    const actions = store.getActions();

    // Assert
    expect(actions[0].type).toBe(getCountries.pending.type);
    expect(actions[1].type).toBe(getCountries.fulfilled.type);
    expect(actions[1].payload).toEqual(countriesData);
  });

  test('getCountries thunk when error', async () => {
    // Act
    await store.dispatch(getCountries({ url: 'axios/fail' }));
    const actions = store.getActions();

    // Assert
    expect(actions[0].type).toBe(getCountries.pending.type);
    expect(actions[1].type).toBe(getCountries.rejected.type);
    expect(actions[1].payload).toEqual(`Oops ! An error occurred... 
Mock Error`);
  });
});
