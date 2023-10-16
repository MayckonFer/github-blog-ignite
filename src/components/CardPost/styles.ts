import styled from "styled-components";

export const ContainerPost = styled.a`
  width: 100%;
  max-width: 41.6rem;
  height: 26rem;

  background-color: ${({ theme }) => theme.base_post};
  border-radius: 1rem;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.white};
    line-height: 160%;

    width: 100%;
    max-width: 28.3rem;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.base_span};
    line-height: 160%;
    margin-top: 5px;
  }
`;

export const DescriptionPost = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.base_text};
  line-height: 160%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
