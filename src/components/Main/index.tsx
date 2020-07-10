import React from "react"

import ProfilePage from "../ProfilePage"

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ButtonMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from "./styles"

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <span>Luiz Felipe</span>
          <strong>Tweets: 29</strong>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <ButtonMenu>
        <HomeIcon className="active"/>
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu>
    </Container>
  )
}

export default Main
