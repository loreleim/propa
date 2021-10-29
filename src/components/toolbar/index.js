import React, { Component } from 'react';
import style from "./index.module.scss";

export default class Toolbar extends Component {
  render() {
    return (
      <div className={style.toolbarContainer}>
        <div className={style.appLogo}></div>
        <div className={style.projectDeets}>
          <div className={style.projectTitle}>Propa</div>
          <div className={style.settings}></div>
        </div>
      </div>
    );
  }
}