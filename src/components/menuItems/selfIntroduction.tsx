/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import Images from '../../images'
import { Margins, FontSize } from '../../style'

interface Social {
  name: string
  id: string
  url: string
}

interface Props {
  data: {
    description: string
    menuItemTitle: string
    socialURLs: Social[]
  }
}

const SelfIntroduction = (props: Props) => {
  const { description, menuItemTitle, socialURLs } = props.data
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Container>
      <InnerContainer>
        <Title>Christmas Grooveとは</Title>
        {/* <Img css={IconStyle} fixed={data.file.childImageSharp.fixed} />
        <SocialLinks>
          {socialURLs.map((social: Social) => (
            <SocialLink key={social.name} href={social.url} target="_blank">
              <img src={Images[social.name]} alt={social.name} />
            </SocialLink>
          ))}
        </SocialLinks> */}
        <br/>
        <img src={Images.bandlive} /><br/>
        <Description>
          私たちは普段、オープン礼拝というバンド形式の礼拝を行なっています。Christmas Groove とは、普段教会に行っている人だけでなく、初めての人もクリスマスを味わえる特別なオープン礼拝です。
        </Description><br/>
        <Description2 >
          今年のテーマは
        </Description2>
        <Description2>「生まれた意味」</Description2>
        <br />
        <Description>
          イエス・キリストは何のために生まれたのか、私たちが生まれた目的は何なのか、その真相に迫ります。
        </Description><br/>
        <Description3>
          ※当日は、新型コロナウイルスの感染予防のため、会場は100名までの入場に制限させていただきます。
        </Description3>
        <Description3>
          ※youtubeチャンネル「土浦めぐみ教会 オープン礼拝」でLive配信もいたしますので、オンラインで参加される方は<Link href="https://www.youtube.com/channel/UC4xze6wGKzFe13rvEV0rt4w"><span>こちら</span></Link>からご参加ください。
        </Description3>
        <Description3>
          ※チャンネル登録をしておくとLive配信の通知が受け取れますので是非チャンネル登録お願いします!
        </Description3>
      </InnerContainer>
    </Container>
  )
}

export const dataQuery = graphql`
  fragment SelfIntroductionData on IndexJson {
    selfIntroduction {
      menuItemTitle
      description
      socialURLs {
        name
        url
      }
    }
  }
`

const Container = styled.div`
  padding: 24px;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-family:fantasy;
  color:#9EBBBF;
`

const IconStyle = css`
  margin-top: ${Margins.NotRelated};
  widht: 200px;
  height: 200px;
`
const Description = styled.p`
  margin-top: ${Margins.LittleRelated};
  font-size:15px;
  font-family:fantasy;
  color:#9EBBBF;
`
const Description2 = styled.p`
  // margin-top: ${Margins.LittleRelated};
  font-weight:bold;
  font-size:15px;
  font-family:fantasy;
  color:#9EBBBF;
`

const Description3 = styled.p`
  margin-top: ${Margins.LittleRelated};
  font-size:13px;
  font-family:fantasy;
  color:#9EBBBF;
`

const SocialLinks = styled.section`
  margin-top: ${Margins.LittleRelated};
  display: flex;
  width: 120px;
  justify-content: space-between;
`
const SocialLink = styled.a`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: ${FontSize.Supplemnet};
  img {
    height: 100%;
  }
`


const Link = styled.a`
  // // margin-bottom: 12px;
  // margin-top: 2rem;
  // font-size:0.1rem;
  // font-family:fantasy;
  // color:#9EBBBF;
  // display:flex;
  // justify-content:flex-end;
  font-size:13px;
  font-family:fantasy;
  color:#9EBBBF;
  span{
    background: linear-gradient(transparent 80%, #a8eaff 50%);
  }
`
export default SelfIntroduction

// NOTE 画像部分こんな感じでできなくもない
// allFile(filter: {relativePath: {regex: "/socialIcons/"}}) {
//   edges {
//     node {
//       id
//       childImageSharp {
//         fixed(width: 100, height: 100){
//           width
//           originalName
//           base64
//         }
//       }
//     }
//   }
// }

