import styled from 'styled-components';
import { faChevronLeft, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../styled/Icon';

export default function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const getPath = () => {
    const path = pathname.replace('/details/', '');
    return decodeURIComponent(path);
  };

  return (
    <Nav>
      <Icon
        icon={faChevronLeft}
        onClick={navigateBack}
      />
      <Title>{pathname === '/' ? 'Covid-19' : getPath()}</Title>
      <div>
        <Icon icon={faMicrophone} />
        <Icon icon={faGear} />
      </div>
    </Nav>
  );
}

const Title = styled.h3`
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ec4c8a;
  height: 2.5rem;
`;
