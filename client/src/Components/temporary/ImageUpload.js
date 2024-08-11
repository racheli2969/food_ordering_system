import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function ImageUpload (path){

      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");

      const saveFile = (e) => {
        setFile(p.files[0]);
        setFileName(path);
      };

      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:3000/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };


      return (
        <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
      );

}

export default ImageUpload;

