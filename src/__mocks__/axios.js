import { GET_CONTINENTS, GET_COUNTRIES } from '../redux/api';

const get = (url) => {
  switch (url) {
    case GET_CONTINENTS:
      return Promise.resolve({
        data: [
          {},
        ],
      });
    case GET_COUNTRIES:
      return Promise.resolve({
        data: [
          {},
        ],
      });
    case 'axios/fail':
      return Promise.reject(new Error('Mock Error'));
    default:
      return Promise.resolve(
        {
          data: [
            {},
          ],
        },
      );
  }
};

export default { get };
