import styled, { css } from "styled-components"

import { Chat, Favorite, Retweet } from "../../styles/icons"
import Image from "../../assets/atila.jpg"
import Cientista from "../../assets/cientista.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`
export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  margin-left: 59px;
  font-size: 13px;
  color: var(--gray);
`

export const Body = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
`
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: url(${Image}) no-repeat center;
  background-size: cover; 
  
  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
      margin-right: 5px;
      cursor: pointer;
  }

  > span,
    time {
      color: var(--gray);
  }

  > strong,
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
`

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px
`

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: url(${Cientista}) no-repeat center;
  background-size: cover; 
  border-radius: 14px;

  cursor: pointer;

  &:hover {
      opacity: 0.7;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
     margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
        fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
        fill: var(--like);
    }
  }
`
const iconCss = css`
  width: 19px;
  height: 19px;
`
export const CommentIcon = styled(Chat)`${iconCss}`
export const RetweetIcon = styled(Retweet)`${iconCss}`
export const LikeIcon = styled(Favorite)`${iconCss}`
