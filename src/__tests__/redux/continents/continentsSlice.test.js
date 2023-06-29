import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getContinents } from '../../../redux/continents/continentsSlice';
import { GET_CONTINENTS } from '../../../redux/api';

const mockStore = configureStore([thunk]);

describe('Testing Continents slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('getContinents thunk when successful', async () => {
    // Arrange
    const continentsData = [
      {
        updated: 1687952392990,
        active: 2389357,
        continent: 'North America',
      },
      {
        updated: 1687955393389,
        active: 14773130,
        continent: 'Asia',
      },
    ];

    // Act
    await store.dispatch(getContinents({ url: GET_CONTINENTS }));
    const actions = store.getActions();

    // Assert
    expect(actions[0].type).toBe(getContinents.pending.type);
    expect(actions[1].type).toBe(getContinents.fulfilled.type);
    expect(actions[1].payload).toEqual(continentsData);
  });

  test('getContinents thunk when error', async () => {
    // Act
    await store.dispatch(getContinents({ url: 'axios/fail' }));
    const actions = store.getActions();

    // Assert
    expect(actions[0].type).toBe(getContinents.pending.type);
    expect(actions[1].type).toBe(getContinents.rejected.type);
    expect(actions[1].payload).toEqual(`Oops ! An error occurred... 
Mock Error`);
  });
});
