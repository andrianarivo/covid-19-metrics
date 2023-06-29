import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

export function withRouter(children) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
}

export function withProvider(children, mockStore = store) {
  return (
    <Provider store={mockStore}>
      {children}
    </Provider>
  );
}
