import React, { FunctionComponent } from "react"
import Spacing from "../components/Spacing"
import styled from "../styled/index"
import Layout from "../components/Layout"

const GalleryBlockRoot = styled.div``

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

const GalleryDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 420px) {
    grid-template-columns: minmax(0, 1fr);
  }
`

const Header = styled.div``

interface GalleryBlockProps {
  title: string
  imgUrl: string
  url: string
}

const GalleryBlock: FunctionComponent<GalleryBlockProps> = props => {
  const { title, imgUrl, url } = props
  return (
    <GalleryBlockRoot>
      <GalleryBlockLink href={url}>
        <GalleryBlockImageRoot>
          <GalleryBlockImage src={imgUrl} alt={title} />
        </GalleryBlockImageRoot>
        <GalleryBlockTitle>{title}</GalleryBlockTitle>
      </GalleryBlockLink>
    </GalleryBlockRoot>
  )
}

export default function BookNotes() {
  const description =
    "Late 2020, I started to read books as a hobby to improve my life. For every book I read, I jotted down my key takeaways from the book. This helps me digest what I learned and reminds me the lessons I should keep in my mind."

  return (
    <Layout title="Book Notes — Junhong Wang" description={description}>
      <Header>
        <h1>📚 Book Notes</h1>
        <p>{description}</p>
      </Header>
      <Spacing height={32} />
      <GalleryDiv>
        <GalleryBlock
          title="🏃‍♂️ Atomic Habits"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg"
          url="/book-notes/atomic-habits"
        />
        <GalleryBlock
          title="💹 The Little Book of Common Sense Investing"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51cCQzs8EBL._SX352_BO1,204,203,200_.jpg"
          url="/book-notes/the-little-book-of-common-sense-investing"
        />
        <GalleryBlock
          title="🥙 Never Eat Alone"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/41x1dFaUd7L._SX327_BO1,204,203,200_.jpg"
          url="/book-notes/never-eat-alone"
        />
        <GalleryBlock
          title="⏳ The 4-Hour Workweek"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51I2EIRF44L._SX329_BO1,204,203,200_.jpg"
          url="/book-notes/the-4-hour-workweek"
        />
        <GalleryBlock
          title="💰 Think and Grow Rich"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg"
          url="/book-notes/think-and-grow-rich"
        />
        <GalleryBlock
          title="🦸‍♂️ The Way of the Superior Man"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/61NOI6lJtWL._SX341_BO1,204,203,200_.jpg"
          url="/book-notes/the-way-of-the-superior-man"
        />
        <GalleryBlock
          title="🧔 Rich Dad Poor Dad"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
          url="/book-notes/rich-dad-poor-dad"
        />
        <GalleryBlock
          title="👯‍♀️ How to Win Friends and Influence People"
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._SX320_BO1,204,203,200_.jpg"
          url="/book-notes/how-to-win-friends-and-influence-people"
        />
      </GalleryDiv>
    </Layout>
  )
}
