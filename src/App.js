import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home';
import Details from './routes/Details';
import Countries from './routes/Countries';

function App() {
  return (
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
  );
}

export default App;
