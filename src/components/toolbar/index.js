import React, { Component } from 'react';
import style from "./index.module.scss";
import store from "../../database";

export default class Toolbar extends Component {
  render() {
    return (
      <div className={style.toolbarContainer}>

        {/* Section 1 */}
        <div className={style.sectionOne}>
          <div className={style.appLogo}></div>

          <div className={style.projectDeets}>
            <input className={style.projectTitle} placeholder="Propa"/>

            {/* Toolbar Settings */}
            <div className={style.settings}>
              {store.settings.map((x) => (
                <div key={x + "-file"} id="file-menu">{x}</div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2 */}
        <div className={style.sectionTwo}>
          <div className={style.appLogo}></div>
        </div>

      </div>
    );
  }
}