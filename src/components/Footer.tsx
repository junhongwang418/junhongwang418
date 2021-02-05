import React from "react"
import Spacing from "./Spacing"
import Contact from "./Contact"
/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Footer() {
  return (
    <div>
      <div
        sx={{ backgroundColor: "secondary" }}
        style={{ width: "100%", height: "1px" }}
      ></div>
      <Spacing height={32} />
      <div>
        <h4>Junhong Wang</h4>
        <div>
          I'm Junhong. I'm a student at UCLA studying Computer Science. On this
          website, I document myself and things I learned.
        </div>
        <Spacing height={32} />
        <div style={{ textAlign: "center" }}>
          <h5>Code & Design by Junhong Wang ©︎ 2021</h5>
        </div>
      </div>
      <Spacing height={32} />
    </div>
  )
}
