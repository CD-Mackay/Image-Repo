import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerstyles.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrap">
      <h1>Welcome to Foto Album!</h1>
      </div>
      <div className="info-wrap">
        <ul>
          <li>Upload images!</li>
          <li>View and sort your saved images!</li>
        </ul>
      </div>
      <div className="icon-wrap">
        <ul>
          <li>
          <a href="https://github.com/CD-Mackay" target="blank" ><FontAwesomeIcon icon={["fab", "github-alt"]} /></a> 
          <li>
          <a href="https://www.linkedin.com/in/connor-mackay-800992bb/" target="blank" ><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
          </li> 
          </li>
        </ul>
      </div>
    </div>
  )
}