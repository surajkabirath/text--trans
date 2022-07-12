import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("UperCase was Clicked" , text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("UperCase was Clicked" , text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // aconsole.log("Onchange")
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",color: props.mode === "dark" ? "white" : "black"
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn-btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn-btn-primary mx-2 " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn-btn-primary mx-2 " onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }} >
        <h2>Your Text summary</h2>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
