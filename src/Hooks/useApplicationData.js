import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function useApplicationData() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [display, setDisplay] = useState(null);

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  function handleSetCookie(name) {
    setCookie("user", name, { path: '/' });
  };

  function handleRemoveCookie() {
    removeCookie("user");
  }


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
    
    axios({
      url: '/login',
      method: 'POST',
      data: { user }
    })
    .then(handleSetCookie(name))
    .catch(err => console.log(err))
  };

  const logoutUser = () => {
    axios({
      url: '/logout',
      method: 'POST'
    }).then(handleRemoveCookie())
    .catch(err => console.log(err));
  };


  return {
    file,
    fileName,
    saveFile,
    uploadFile,
    loginUser,
    logoutUser
  }
}