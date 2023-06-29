import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  @media screen and (min-width: 576px) {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 992px) {
    max-width: 960px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export default Container;
