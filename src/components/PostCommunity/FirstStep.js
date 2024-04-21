import React from "react";
import "../../style/PostJob.css";
import { storage } from "../../data/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL } from "firebase/storage";

export default function FirstStep({
  name,
  onNameChange,
  desc,
  onDescChange,
  size,
  onSizeChange,
  image,
  onImageChange,
  sdesc,
  onSdescChange,
}) {
  const [img, setImg] = useState(null);

  const handleChange = (e) => {
    onImageChange(e.target.value);
    const file = e.target.files[0];
    setImg(file);
    console.log(file.name, " ", `images/${file.name}`);
  
    let uniqueID = uuidv4();
    let imageUrl = `/images/${uniqueID}/${file.name}`;
    var storageRef = storage.ref(imageUrl); // Reference where we will store the image
  
    storageRef.put(file)
      .then((snapshot) => {
        console.log('Uploaded successfully:', snapshot);
        // Get the download URL after successful upload
        return storageRef.getDownloadURL();
      })
      .then((downloadURL) => {
        console.log('File available at:', downloadURL);
        // Call onImageChange with the download URL
        onImageChange(downloadURL);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        // Handle error (e.g., display an error message)
      });
  };  

  return (
    <div className="content">
      <div className="field">
        <div>
          <label htmlFor="input">Name</label>
        </div>
        <div>
          <input
            className="nme-class"
            required
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <div>
          <label htmlFor="input">Short Description</label>
        </div>
        <div>
          <input
            required
            type="search"
            onChange={(e) => onSdescChange(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Full Description and Work</label>
        </div>
        <div>
          <textarea
            required
            type="text"
            onChange={(e) => onDescChange(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Upload Image</label>
        </div>
        <div class="custom-file">
          <input type="file" onChange={handleChange}></input>
        </div>
        <div id="display"></div>
      </div>
      <div className="field">
        <div>
          <label htmlFor="input">Size of Community</label>
        </div>
        <div>
          <input
            className="cst-class"
            required
            type="number"
            onChange={(e) => onSizeChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
