import React, { useEffect, useState } from "react";

function ChangeDocTitle() {
  const [title, setTitle] = useState("");
  const [titleValue, setTitleValue] = useState("");

  useEffect(() => {
    document.title = titleValue;
  }, [titleValue]);

  useEffect(() => {
    document.title = "React Hooks";
  }, []);

  function handleDocTitle(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let docTitle = title;
    setTitleValue(docTitle);
    console.log(titleValue);
    setTitle("");
  }

  return (
    <div>
      <h5>Document Title Change</h5>
      <form className="formBlock" onSubmit={handleSubmit}>
        <div className="formInput splFormBlock">
          <label htmlFor="firstName">Enter Document Title: </label>
          <input
            type="text"
            id="firstName"
            value={title}
            onChange={handleDocTitle}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChangeDocTitle;
