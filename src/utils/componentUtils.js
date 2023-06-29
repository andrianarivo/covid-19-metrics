import asia from '../images/asia.png';
import africa from '../images/africa.png';
import northAmerica from '../images/north_america.png';
import southAmerica from '../images/south_america.png';
import oceania from '../images/oceania.png';
import europe from '../images/europe.png';

const getImage = (continent) => {
  switch (continent.toLowerCase()) {
    case 'asia':
      return asia;
    case 'africa':
      return africa;
    case 'north america':
      return northAmerica;
    case 'south america':
      return southAmerica;
    case 'australia-oceania':
      return oceania;
    case 'europe':
      return europe;
    default:
      return asia;
  }
};

export default getImage;
