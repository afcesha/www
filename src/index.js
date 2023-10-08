import React from "react"
import ReactDOM from "react-dom"

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("MouseOver")

const helpText = "Help Text"

const elements = (
  <div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
        onMouseEnter={mouseOver} onClick={inputClick}/>
    <p>{helpText == "Help Text!" ? "Yes" : "No"}</p>
  </div>
)

const app = document.getElementById("root")

ReactDOM.render(elements, app)