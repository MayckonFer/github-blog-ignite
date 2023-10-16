import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 864px;
  padding: 0 1.6rem;
  margin: 0 auto;
`;

export const ContainerCardInfo = styled.div`
  background-color: ${({ theme }) => theme.base_profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -12rem;
  padding: 3.2rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  img {
    width: 14.8rem;
    border-radius: 8px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  h1 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.base_title};
    line-height: 130%;
  }

  a {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};

    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      filter: brightness(1.1);
      transition: filter 0.2s;
    }
  }
`;

export const DescriptionUserCard = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.base_text};
  line-height: 160%;
  margin-top: 8px;
`;

export const FooterContainerCard = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;

  margin-top: 2.4rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
