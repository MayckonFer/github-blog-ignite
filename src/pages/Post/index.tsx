import {
  CaretLeft,
  ArrowSquareOut,
  GithubLogo,
  Chat,
  CalendarBlank,
} from "@phosphor-icons/react";

import {
  ContainerPost,
  ProfilePostConatainer,
  HeaderProfile,
  TitleProfile,
  FooterProfile,
  ContentPost,
} from "./styles";

import { Header } from "../../components/Header";

export function Post() {
  return (
    <>
      <Header />

      <ContainerPost>
        <ProfilePostConatainer>
          <HeaderProfile>
            <a href="#">
              <CaretLeft size={12} color="#3294F8" weight="bold" />
              <span>Voltar</span>
            </a>

            <a href="#">
              Ver no GitHub
              <ArrowSquareOut size={12} color="#3294F8" weight="bold" />
            </a>
          </HeaderProfile>

          <TitleProfile>JavaScript data types and data structures</TitleProfile>

          <FooterProfile>
            <li>
              <GithubLogo size={18} color="#3A536B" weight="fill" />
              <span>MayckonFer</span>
            </li>
            <li>
              <CalendarBlank size={18} color="#3A536B" weight="fill" />
              <span>Há 1 dia</span>
            </li>
            <li>
              <Chat size={18} color="#3A536B" weight="fill" />
              <span>5 comentários</span>
            </li>
          </FooterProfile>
        </ProfilePostConatainer>

        <ContentPost>
          <p>
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </p>
          <a href="#" target="_blank">
            Dynamic typing
          </a>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </ContentPost>
      </ContainerPost>
    </>
  );
}
