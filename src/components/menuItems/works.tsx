/* eslint-disable no-use-before-define */
import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FontSize, Margins, shadow } from '../../style'
import Images from '../../images'

interface IWorkCategory {
  categoryTitle: string,
  workItems: IWorkItem[]
}
interface IWorkItem {
  title: string
  description: string
  url: string
  ogpImageURL: string
}
interface Props {
  data: {
    menuItemTitle: string
    categories: IWorkCategory[]
  }
}

const Works = (props: Props) => {
  const {
    data: { menuItemTitle, categories },
  } = props
  return (
    <Container>
      <Title>{menuItemTitle}</Title>
      {
        categories.map((category: IWorkCategory) => <Category category={category} />)
      }
    </Container>
  )
}

const Category = ({ category }: { category: IWorkCategory}) => (
  <CategoryItem>
    {/* <h2>{category.categoryTitle}</h2> */}
    { category.workItems.map((workItem: IWorkItem) => (
      <WorkItem key={workItem.title} href={workItem.url}>
        {/* <img src={workItem.ogpImageURL} alt={workItem.title} /> */}
        <img src={Images.thumbnail} alt="教会の様子" />
        <div>
          {/* <h3>{workItem.title}</h3> */}
          {/* <p>{workItem.description}</p> */}
          <Description>こちらをタッチ!</Description>
          <Description2>チャンネル登録よろしくお願いします。</Description2>

          <Description>〜配信スケジュール(毎日更新中)〜</Description>
          <Table>
            <tr>
              <td>12/1(火)</td>
              <td>教会ってどんな場所？</td>
            </tr>
            <tr>
              <td>12/2(水)</td>
              <td>普段の様子①めぐみ教会</td>
            </tr>
            <tr>
              <td>12/3(木)</td>
              <td>青年会紹介</td>
            </tr>
            <tr>
              <td>12/4(金)</td>
              <td>普段の様子②オープン礼拝</td>
            </tr>
            <tr>
              <td>12/5(土)</td>
              <td>amazing grace</td>
            </tr>
            <tr>
              <td>12/6(日)</td>
              <td>クリスマスって？</td>
            </tr>
            <tr>
              <td>12/7(月)</td>
              <td>★「ここにあるもの」</td>
            </tr>
            <tr>
              <td>12/8(火)</td>
              <td>聖書って？キリストって？</td>
            </tr>
            <tr>
              <td>12/9(水)</td>
              <td>罪って？</td>
            </tr>
            <tr>
              <td>12/10(木)</td>
              <td>「クリスチャン」ってどんな人？</td>
            </tr>
            <tr>
              <td>12/11(金)</td>
              <td>「クリスチャン」あるある</td>
            </tr>
            <tr>
              <td>12/12(土)</td>
              <td>私の好きな聖書箇所</td>
            </tr>
            <tr>
              <td>12/13(日)</td>
              <td>「きよしこの夜」MV</td>
            </tr>
            <tr>
              <td>12/14(月)</td>
              <td>「きよしこの夜」現代語</td>
            </tr>
            <tr>
              <td>12/15(火)</td>
              <td>当日の曲「もろびと」MV</td>
            </tr><tr>
              <td>12/16(水)</td>
              <td>「もろびと」現代語</td>
            </tr>
            <tr>
              <td>12/17(木)</td>
              <td>当日の曲「あなたは愛」MV</td>
            </tr>
            <tr>
              <td>12/18(金)</td>
              <td>持ち物・行き方について</td>
            </tr>
            <tr>
              <td>12/19(土)</td>
              <td>「届けたい」</td>
            </tr>
            <tr>
              <td>12/20(日)</td>
              <td>Chrismas Groove</td>
            </tr>
          </Table>
        </div>
      </WorkItem>
    ))}
  </CategoryItem>
)

export const dataQuery = graphql`
  fragment WorksData on IndexJson {
    works {
      menuItemTitle
      categories {
        categoryTitle
        workItems {
          title
          description
          url
          ogpImageURL
        }
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
  margin-bottom: 14px;
  font-family:fantasy;
  color:#9EBBBF;
`

const CategoryItem = styled.section`
  (:first-of-type) {
    margin-top: ${Margins.LittleRelated};
  }
  :not(:first-of-type) {
    margin-top: 52px;
  }
`

const WorkItem = styled.a`
  :not(:first-of-type) {
    margin-top: ${Margins.LittleRelated};
  }
  display: inline-block;
  width: 100%;
  img {
    width: 100%;
    height: 165px;
    object-fit: cover;
  }
  // div {
  //   padding: 12px;
  //   p {
  //     margin-top: ${Margins.Related};
  //   }
  //   h3 {
  //     font-size: ${FontSize.SubTitle};
  //   }
  // }
  box-shadow: ${shadow};
  font-family:fantasy;
  color:#B0E0E6;
`

const Description = styled.div`
  font-size: 16px;
  font-family:fantasy;
  color:#9EBBBF;
  margin-top: 50px;
  display:flex;
  justify-content: center;
`

const Description2 = styled.div`
  font-size: 16px;
  font-family:fantasy;
  color:#9EBBBF;
  margin:4px;
  display:flex;
  justify-content: center;
`

const Table = styled.table`
  caption{
    font-size: 16px;
    font-family:fantasy;
    color:#9EBBBF;
  }
  td{
    font-size: 12px;
    font-family:fantasy;
    color:#9EBBBF;
  }
`

export default Works
