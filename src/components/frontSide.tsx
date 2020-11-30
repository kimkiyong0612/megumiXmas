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
const FrontSide = ({ data: { jobTitle, name,  } }: Props) => (
  <Container>
    <JobTitle>{jobTitle}</JobTitle><br/>
    <Name>{name}</Name><br/><br/>
    <Description>Sunday, Dec 20, 2020</Description>
    <Description></Description><br />
    <Description>18:00 start</Description><br/>
    <Description2 >swipe →</Description2>
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
  font-weight:bold;
  color:#B0E0E6;
`
const JobTitle = styled.div`
  font-size: ${FontSize.SubTitle};
  font-family:fantasy;
  color:#B0E0E6;
`

const Description = styled.div`
  font-size: 20px;
  font-family:fantasy;
  color:#B0E0E6;
`

const Description2 = styled.div`
  font-size: 30px;
  font-weight:bold;
  font-family:fantasy;
  color:#B0E0E6;
`
export default FrontSide
