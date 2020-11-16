import React, { FunctionComponent } from "react"
import Spacing from "../components/Spacing"
import { Helmet } from "react-helmet"
import styled from "../styled/index"
import Layout from "../components/Layout"

const GalleryBlockRoot = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
  width: calc((100% - 16px) / 2);
  :nth-child(2n) {
    margin-right: 0;
  }
  @media (max-width: 420px) {
    width: 100%;
    margin-right: 0px;
  }
`

const GalleryBlockLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  background: dimgray;
  overflow: hidden;
  border-radius: 4px;
  :hover {
    background: gray;
  }
`

const GalleryBlockImageRoot = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`

const GalleryBlockImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const GalleryBlockTitle = styled.div`
  padding: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

interface GalleryBlockProps {
  title: string
  imgSrc: string
  url: string
}

const GalleryBlock: FunctionComponent<GalleryBlockProps> = props => {
  const { title, imgSrc, url } = props
  return (
    <GalleryBlockRoot>
      <GalleryBlockLink href={url}>
        <GalleryBlockImageRoot>
          <GalleryBlockImage src={imgSrc} />
        </GalleryBlockImageRoot>
        <GalleryBlockTitle>{title}</GalleryBlockTitle>
      </GalleryBlockLink>
    </GalleryBlockRoot>
  )
}

const GalleryDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default function BookNotes() {
  return (
    <Layout>
      <Helmet>
        <title>Book Notes — Junhong Wang</title>
      </Helmet>
      <div>
        <h1>📚 Book Notes</h1>
        <div>
          Late 2020, I started to read books as a hobby to improve my life. For
          every book I read, I jotted down my key takeaways from the book. This
          helps me digest what I learned and reminds me the lessons I should
          keep in my mind.
        </div>
        <Spacing height={32} />
        <GalleryDiv>
          <GalleryBlock
            title="👯‍♀️ How to Win Friends and Influence People"
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._SX320_BO1,204,203,200_.jpg"
            url="/book-notes/how-to-win-friends-and-influence-people"
          />
          <GalleryBlock
            title="🧔 Rich Dad Poor Dad"
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
            url="/book-notes/rich-dad-poor-dad"
          />
          <GalleryBlock
            title="🦸‍♂️ The Way of the Superior Man"
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/61NOI6lJtWL._SX341_BO1,204,203,200_.jpg"
            url="/book-notes/the-way-of-the-superior-man"
          />
          <GalleryBlock
            title="💰 Think and Grow Rich"
            imgSrc="https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg"
            url="/book-notes/think-and-grow-rich"
          />
        </GalleryDiv>
      </div>
    </Layout>
  )
}
