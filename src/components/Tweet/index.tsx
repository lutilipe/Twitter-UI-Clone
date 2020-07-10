import React from "react"

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from "./styles"

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Atila Iamarino</strong>
            <span>@oatila</span>
            <Dot />
            <time>10 de jul</time>
          </Header>

          <Description>
            2020 tá se mostrando o ano para todo mundo conviver com as consequências das escolhas que fizeram. Só fico triste por quem não escolheu e tá no mesmo barco.
          </Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
