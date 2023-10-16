import styled, { css } from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  max-width: 864px;
  padding: 0 1.6rem;
  margin: 0 auto 4rem;
`;

export const ContainerProfile = styled.div`
  background-color: ${({ theme }) => theme.base_profile};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -12rem;
  padding: 3.2rem;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

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
  flex-wrap: wrap;
  gap: 8px;

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
  flex-wrap: wrap;
  gap: 2.4rem;

  margin-top: 2.4rem;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 7.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input {
    ${({ theme }) => css`
      background-color: ${theme.base_input};
      border: 1px solid ${({ theme }) => theme.base_border};
      color: ${theme.white};
    `}

    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    line-height: 160%;

    &::placeholder {
      color: ${({ theme }) => theme.base_label};
    }
  }
`;

export const HeaderFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.base_subtitle};
    line-height: 160%;
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.base_span};
    line-height: 160%;
  }
`;

export const ContainerPosts = styled.section`
  width: 100%;

  margin-top: 4.8rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
