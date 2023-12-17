import React from "react";

function UploadDiv({ uploadHandler, valueFile }) {
  function handleProductUpload(e) {
    uploadHandler(e.target.value);
    console.log("Product Upload");
  }
  return (
    <div className="uploadPic">
      {/*<label htmlFor="selectImage">Select the Image: </label>
        <input type="file" value={valueFile} onChange={handleProductUpload} /> */}
      <label htmlFor="selectImage">Upload the Image URL: </label>
      <input type="text" value={valueFile} onChange={handleProductUpload} />
    </div>
  );
}

export default UploadDiv;
