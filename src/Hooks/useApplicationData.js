import React, { useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  
  const saveFile = async (event) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:3002/upload",
        formData
      );
      console.log(res);
    } catch(exc) {
      console.log(exc);
    }

  }
  return {

  }
}