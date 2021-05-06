import React, { useState } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (event) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "/upload",
        formData
      );
      console.log(res);
    } catch(exc) {
      console.log(exc);
    }

  }

  const loginUser = (user) => {

    return axios.post({
      url: '/login',
      method: 'POST',
      data: { user }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };


  return {
    file,
    fileName,
    saveFile,
    uploadFile,
    loginUser
  }
}