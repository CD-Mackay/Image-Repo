import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerstyles.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrap">
      <h1>Foto Album!</h1>
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
          <FontAwesomeIcon icon={["fab", "github-alt"]} /> 
          <li>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </li> 
          </li>
        </ul>
      </div>
    </div>
  )
}