import React from "react"

import {
  Container,
  TopSide,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from "./styles"

import Button from "../Button"

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Luiz Felipe Sousa</strong>
          <span>@luiz.fsousa</span>
        </ProfileData>

        <ExitIcon />
      </BotSide>

    </Container>
  )
}

export default MenuBar
