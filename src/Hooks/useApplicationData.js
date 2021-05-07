import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


export default function useApplicationData() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [loggedIn, setLoggedin] = useState(Cookies.get('session'));
  const cookie = Cookies.get('userID');
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

  const loginUser = (name, password) => {
    const user = {
      name: name,
      password: password
    };

    console.log(user);
    
    return axios({
      url: '/login',
      method: 'POST',
      data: { user }
    }).catch(err => console.log(err));
  };


  return {
    file,
    fileName,
    saveFile,
    uploadFile,
    loginUser,
    loggedIn,
    cookie
  }
}