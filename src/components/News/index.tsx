import React from "react"

import { Container } from "./styles"

interface Props {
  title: string;
  newsTitle: string;
}

const News: React.FC<Props> = ({ title, newsTitle }) => {
  return (
    <Container>
      <span>{newsTitle}</span>
      <strong>{title}</strong>
    </Container>
  )
}

export default News
