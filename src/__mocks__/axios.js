import { GET_CONTINENTS, GET_COUNTRIES } from '../redux/api';

const get = (url) => {
  switch (url) {
    case GET_CONTINENTS:
      return Promise.resolve({
        data: [
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
        ],
      });
    case GET_COUNTRIES:
      return Promise.resolve({
        data: [
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
