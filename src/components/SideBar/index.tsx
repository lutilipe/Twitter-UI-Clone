import React from "react"
import StickyBox from "react-sticky-box"

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from "./styles"

import FollowSuggestion from "../FollowSuggestion"
import News from "../News"
import List from "../List"

import Pedro from "../../assets/pedro.jpg"
import Yves from "../../assets/yves.jpg"
import Nicolas from "../../assets/nicolas.jpg"

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="☭ 𝕹𝖎𝖌𝖌𝖆 𝖜𝖎𝖙𝖍 𝖆𝖙𝖙𝖎𝖙𝖚𝖉𝖊 ☭"
                nickname="@nibolaugeneroso"
                avatar={Nicolas}
              />,
              <FollowSuggestion
                name="Yves"
                nickname="@yves005"
                avatar={Yves}
              />,
              <FollowSuggestion
                name="Pedro Henrique"
                nickname="@pedroh_341"
                avatar={Pedro}
              />
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News
                title="Felipe Neto"
                newsTitle="Assuntos do momento no Brasil"
              />,
              <News
                title="Bolsonaro está com covid-19"
                newsTitle="Política"
              />,
              <News
                title="Reinício do Paulistão"
                newsTitle="Futebol"
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
