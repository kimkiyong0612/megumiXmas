/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { Margins } from '../../style'
import Images from '../../images'

interface ICareerItem {
  year: string
  title: string
  description: string
}

interface Props {
  data: {
    menuItemTitle: string
    description: string
    careerItems: ICareerItem[]
  }
}

const Career = (props: Props) => {
  const {
    data: { menuItemTitle, careerItems },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      {/* <TimeLine />
      <CareerItemList>
        {careerItems.map((career) => (
          <CareerItem key={career.title}>
            <CareerItemCircleWithYear>
              <CareerItemCircle />
              <CareerItemYear>{career.year}</CareerItemYear>
            </CareerItemCircleWithYear>
            <CareerItemTextBox>
              <h2>{career.title}</h2>
              <p>{career.description}</p>
            </CareerItemTextBox>
          </CareerItem>
        ))}
      </CareerItemList> */}
      <Description2 href="https://church-tmc.jp/pg223.html" >◆アクセス方法はこちらをタッチ</Description2>
      <Description>※教会への持ち物や交通手段が動画で確認できます。</Description>
      <video src={Images.mv} controls width="100%" height="30%"></video>
      <Inquary href="https://church-tmc.jp/contact.html"><span>※お問い合わせはこちらをタッチ</span></Inquary>
    </Container>
  )
}

export const dataQuery = graphql`
  fragment CareerData on IndexJson {
    career {
      menuItemTitle
      careerItems {
        year
        title
        description
      }
    }
  }
`

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
  font-family:fantasy;
  color:#9EBBBF;
`
const TimeLine = styled.div`
  width: 3px;
  background-color: #707070;
  position: absolute;
  height: 100%;
  left: 60px;
  border-radius: 1px;
`
const CareerItemList = styled.div`
  position: absolute;
  left: 52px;
`
const CareerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  margin-top: 36px;
`
const CareerItemCircleWithYear = styled.div`
  display: flex;
`

const CareerItemCircle = styled.div`
  margin-top: 6px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: #13c782;
`
const CareerItemYear = styled.p`
  margin-left: ${Margins.Related};
`
const CareerItemTextBox = styled.div`
  margin-left: 26px;
  max-width: 260px;
  p {
    overflow-wrap: break-word;
    line-height: 1.5em;
  }
`
const Description = styled.p`
  // margin-bottom: 12px;
  margin-top: 30px;
  font-size:0.7rem;
  font-family:fantasy;
  color:#9EBBBF;
`

const Description2 = styled.a`
  // margin-bottom: 12px;
  margin-top: 30px;
  font-size:0.8rem;
  font-family:fantasy;
  color:#9EBBBF;
`

const Inquary = styled.a`
  // margin-bottom: 12px;
  margin-top: 2rem;
  font-size:0.1rem;
  font-family:fantasy;
  color:#9EBBBF;
  display:flex;
  justify-content:flex-end;
  span{
    background: linear-gradient(transparent 80%, #a8eaff 50%);
  }
  
}
`
export default Career
