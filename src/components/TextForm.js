import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "success");
  };

  const handleLowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");
  };

  const handleClearText = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied Clipboard!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove ExtraSpaces!", "success");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#343a40",
        }}
      >
        <h2 className="my-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={onChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "#343a40",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary mx-1 my-1"
          onClick={handleLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={handleCopyText}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning mx-1 my-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#343a40",
        }}
      >
        <h2>Text Summary here!</h2>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
};

export default TextForm;
