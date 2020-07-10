import React from "react"

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Location,
  CakeIcon,
  Followage,
  EditButton
} from "./styles"

import Feed from "../Feed"

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Luiz Felipe de Sousa</h1>
        <h2>@luiz.fsousa</h2>

        <p>Front-end Developer</p>

        <ul>
          <li>
            <Location />
            Belo Horizonte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 8 de dezembro de 2000
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong>190</strong>
          </span>
          <span>
            <strong>1290 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage
