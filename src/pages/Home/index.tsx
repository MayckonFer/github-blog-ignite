import {
  ArrowSquareOut,
  GithubLogo,
  Buildings,
  Users,
} from "@phosphor-icons/react";

import {
  MainContainer,
  ContentCard,
  ContainerCardInfo,
  HeaderContainerCard,
  DescriptionUserCard,
  FooterContainerCard,
  FormContainer,
  HeaderFormContainer,
} from "./styles";

import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />

      <MainContainer>
        <ContainerCardInfo>
          <img src="https://github.com/MayckonFer.png" alt="" />

          <ContentCard>
            <HeaderContainerCard>
              <h1>Cameron Williamson</h1>

              <a href="#" target="_blank">
                github
                <ArrowSquareOut size={12} color="#3294F8" weight="bold" />
              </a>
            </HeaderContainerCard>

            <DescriptionUserCard>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </DescriptionUserCard>

            <FooterContainerCard>
              <li>
                <GithubLogo size={18} color="#3A536B" weight="fill" />
                <span>MayckonFer</span>
              </li>
              <li>
                <Buildings size={18} color="#3A536B" weight="fill" />
                <span>Rocketseat</span>
              </li>
              <li>
                <Users size={18} color="#3A536B" weight="fill" />
                <span>32 seguidores</span>
              </li>
            </FooterContainerCard>
          </ContentCard>
        </ContainerCardInfo>

        <FormContainer>
          <HeaderFormContainer>
            <h2>Publicações</h2>

            <span>6 publicações</span>
          </HeaderFormContainer>
          <input type="text" placeholder="Buscar conteúdo" required />
        </FormContainer>
      </MainContainer>
    </>
  );
}
