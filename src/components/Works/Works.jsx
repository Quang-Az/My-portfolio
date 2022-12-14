import React from 'react'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import './Works.css'

const Works = () => {

    const them = useContext(themeContext);
    const darkMode = them.state.darkMode;

    return (
        <div className="works">
            {/* left side */}
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }} >Works for ALL this</span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ispum is simpley dummy text of printing of printing Lorem
                        <br />
                        ispum is simpley dummy text of printing
                        <br />
                        Lorem ispum is simpley dummy
                    </span>
                    <button className="button a-button">Heri me</button>
                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    {/* Background circle */}
                    <div className="w-backgroundC blueCircle"></div>
                    <div className="w-backgroundC yellowCircle"></div>
                </div>
            </div>
        </div>
    )
}

export default Works