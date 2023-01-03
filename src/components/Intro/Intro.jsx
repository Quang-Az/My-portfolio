import React from 'react'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { FloatingDiv } from "../"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import './Intro.css'

const Intro = () => {

    const transition = { duration: 2, type: 'spring' }

    const them = useContext(themeContext);
    const darkMode = them.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hy! I AM</span>
                    <span>Quang Anh</span>
                    <span>Frontend Developer with high level
                        of experience in web designing
                        and development, producting the
                        Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="Github" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={LinkedIn} alt="LinkedIn" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                {/* animation */}
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-13%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt=""
                />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    className="motion-div floating-div">
                    <FloatingDiv img={crown} text1="Web" text2="Developer" />
                </motion.div>
                <motion.div
                    initial={{ left: "24%" }}
                    whileInView={{ left: "10%" }}
                    transition={transition}
                    style={{ top: '18rem', left: '0' }}
                    className=" floating-div">
                    <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
                </motion.div>
                {/* blur divs */}
                <div className="blur" style={{ background: "rbg(236 210 255)" }}>

                </div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '15rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro