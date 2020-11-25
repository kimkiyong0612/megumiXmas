import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins } from '../style'

export interface Props {
  data: {
    jobTitle: string
    name: string
  }
}
const FrontSide = ({ data: { jobTitle, name } }: Props) => (
  <Container>
    <JobTitle>{jobTitle}</JobTitle>
    <Name>{name}</Name>
  </Container>
)

export const query = graphql`
  fragment FrontSideData on IndexJson {
    frontSide {
      jobTitle
      name
    }
  }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  // background-color:#eb4955;
  background-color:#d72207;
  /*
    Prevent text selection to bother rotation on PC
  */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const Name = styled.div`
  font-size: 32px;
  font-family:fantasy;
  color:#B0E0E6;
`
const JobTitle = styled.div`
  font-size: ${FontSize.SubTitle};
  font-family:fantasy;
  color:#B0E0E6;
`
export default FrontSide
