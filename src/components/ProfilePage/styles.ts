import styled, { css } from "styled-components"

import { LocationOn, Cake } from "../../styles/icons"

import Button from "../Button"
import Image from "../../assets/avatar.jpg"
import BannerImage from "../../assets/banner.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
      display: none;
  }
`

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);

  background: url(${BannerImage}) no-repeat center;
  background-size: cover;
  position: relative;
`

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: url(${Image}) no-repeat center;
  background-size: cover;

  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;

  z-index: 2;

  cursor: pointer;
`

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px;

  display: flex;
  flex-direction: column;

  position: relative;
  > h1 {
      font-weight: bold;
      font-size: 19px;
  }

  > h2 {
      font-weight: normal;
      font-size: 15px;

      color: var(--gray);
  }

  > p {
      font-size: 15px;
      margin-top: 11px;
  }

  > ul {
      list-style: none;
      margin-top: 10px;
      margin-bottom: 10px;

      > li {
          font-size: 15px;
          color: var(--gray);

          > svg {
              fill: var(--gray);
              margin-right: 5px;
          }
      }
  }
`

const iconCss = css`
  width: 20px;
  height: 20px;

  fill: var(--gray);

`

export const Location = styled(LocationOn)`${iconCss}`
export const CakeIcon = styled(Cake)`${iconCss}`

export const Followage = styled.div`
  display: flex;

  > span {
      font-size: 15px;
      color: var(--gray);

      & + span {
        margin-left: 15px;
      }
  }
`
export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 321px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`
