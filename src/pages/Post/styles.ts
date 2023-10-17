import styled from "styled-components";

export const ContainerPost = styled.main`
  width: 100%;
  max-width: 864px;
  padding: 0 1.6rem;
  margin: 0 auto;
`;

export const ProfilePostConatainer = styled.div`
  background-color: ${({ theme }) => theme.base_profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -10rem;
  padding: 3.2rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 3.2rem;
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;

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

export const TitleProfile = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.base_title};
  line-height: 130%;
`;

export const FooterProfile = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2.4rem;

  margin-top: 8px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  li > span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.base_span};
    line-height: 160%;
  }
`;

export const ContentPost = styled.div`
  padding: 4rem 3.2rem;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.base_text};
    line-height: 160%;
  }

  a {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.blue};
    line-height: 160%;
    text-decoration: underline;
    margin-top: 2rem;
    display: block;
  }
`;
