/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins, shadow } from '../../style'
import Images from '../../images'

interface IContactItem {
  type: string
  label: string
  href: string
}

interface Props {
  data: {
    menuItemTitle: string
    description: string
    contactItems: IContactItem[]
  }
}

const Works = (props: Props) => {
  const {
    data: { menuItemTitle, description, contactItems },
  } = props
  return (
    <Container>
      <InnerContainer><br/>
        <Title>礼拝とは</Title>
        <img src={Images.xmasgroove} alt="賛美の画像" /><br/>
        <Description>教会に集まって神様に心を向けます。礼拝の中では、聖書の話を聞いたり（メッセージ）、神様に歌を歌ったり（賛美）、思いを伝えたり（祈り）します。クリスチャンであっても、なくても、どんな人でも参加できます。</Description>

        <Title>クリスマスとは</Title>
        <img src={Images.xmas} alt="賛美の画像" /><br />
        <Description>イエス・キリストの誕生をお祝いする日のこと。神様が人間を愛しているがゆえに、この世界に救い主イエス・キリストを送ってくださいました。このことに感謝し、喜ぶ日がクリスマスです。</Description>

        <Title>青年会とは</Title>
        <img src={Images.seinenkai} alt="賛美の画像" /><br />
        <Description>土浦めぐみ教会では、世代ごとに集まって活動をしています。その中に青年会があり、18歳以上の未婚の人の集まりを指します。聖書の勉強はもちろん、お出かけをしたり、ご飯を食べたりするイベントも企画しています。そのなかで、クリスチャンとして、また人として成長していくことを願って活動しています。</Description>
      </InnerContainer>
      

      {/* {contactItems.map((contact) => (
        <ContactLink key={contact.type} href={contact.href} target="_blank">
          <img src={Images[contact.type]} />
          <p>{contact.label}</p>
        </ContactLink>
      ))} */}
    </Container>
  )
}

export const dataQuery = graphql`
  fragment ContactData on IndexJson {
    contact {
      menuItemTitle
      description
      contactItems {
        type
        label
        href
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

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 28px;
  font-family:fantasy;
  color:#9EBBBF;
`

const Description = styled.p`
  margin-bottom: 28px;
  margin-top: ${Margins.LittleRelated};
  font-size:15px;
  font-family:fantasy;
  color:#9EBBBF;
`

const ContactLink = styled.a`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Supplemnet};
  margin-top: ${Margins.Related};
  p {
    margin-left: 6px;
  }
  img {
    width: 24px;
  }
`





export default Works
