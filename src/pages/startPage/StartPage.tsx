import React from "react";
import '../../theme/variables.css';
import './StartPage.css'

import {
    IonApp
} from "@ionic/react";

export const StartPage = () => {
    return (
      <IonApp>
          <div className="startPage">
            <div className="startPage__element headerPage">
                <h3>TRƯỜNG ĐẠI HỌC NÔNG LÂM THÀNH PHỐ HỒ CHÍ MINH</h3>
            </div>

            <div className="startPage__element mainUI">

            </div>
          </div>
      </IonApp>
    )

}