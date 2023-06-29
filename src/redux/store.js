import { configureStore } from '@reduxjs/toolkit';
import continentsReducer from './continents/continentsSlice';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    continents: continentsReducer,
    countries: countriesReducer,
  },
});

const selectContinent = (store) => store.continents;
const selectCountries = (store) => store.countries;
export { selectContinent, selectCountries };

export default store;
