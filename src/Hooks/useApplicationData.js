import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function useApplicationData() {

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [display, setDisplay] = useState();

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  useEffect(() => {
    getAllImages()
  }, []);

  function getAllImages() {
    axios({
      url: '/images',
      method: 'GET'
    })
    .then(data => setDisplay(data.data))
    .catch(err => console.log(err))
  }

  function deleteImage(id) {
    axios({
      method: 'delete',
      url: `/images/${id}`
    })
    .then(getAllImages())
    .catch(err => console.log(err));
  };


  function handleSetCookie(name) {
    setCookie("user", name, { path: '/' });
  };

  function handleRemoveCookie() {
    removeCookie("user");
  };

  function favouriteImage(id, boo) {
    const faveStatus = {
      id: id,
      favourite: boo
    };

    axios({
      method: 'put',
      url: `/images/${id}`,
      data: { faveStatus }
    })
    .then(getAllImages())
    .catch(err => console.log(err));
  };


  const saveFile = (e) => {
    console.log('saving!')
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

  const signUp = (name, password) => {
    const user = {
      name: name,
      password: password
    };

    axios({
      url: '/signup',
      method: 'POST',
      data: { user }
    })
    .then(handleSetCookie(name))
    .catch(err => console.log(err))
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

  function getDate(milliseconds) {
    if (milliseconds) {
    let current = Date.now();
    
    let elapsed = ((current - milliseconds) / 1000) / 31536000;

    if (elapsed > 1) {
      return Math.floor(elapsed) + " year ago";
    }
    elapsed = elapsed * 12;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " months ago";
    }
    elapsed = elapsed * 30; 
    if (elapsed > 1) {
      return Math.floor(elapsed) + " days ago";
    }
    elapsed = elapsed * 24;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " hours ago";
    }
    elapsed = elapsed * 60;
    if (elapsed > 1) {
      return Math.floor(elapsed) + " minutes ago";
    }
    elapsed = elapsed * 60;
    return Math.floor(elapsed) + " seconds ago";
  }
  };


  return {
    file,
    fileName,
    saveFile,
    uploadFile,
    loginUser,
    logoutUser,
    display,
    getAllImages,
    getDate,
    favouriteImage,
    deleteImage
  }
}