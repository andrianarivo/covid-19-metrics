import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';
import Home from '../routes/Home';
import Details from '../routes/Details';
import Countries from '../routes/Countries';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details />}>
              <Route path=":slug" element={<Countries />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
