import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { Card } from "../"
import { motion } from 'framer-motion'

function Services() {

    const transition = { duration: 2, type: 'spring' }

    const them = useContext(themeContext);
    const darkMode = them.state.darkMode;

    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </span>
                <a href={Resume} download>
                    <button className="button a-button">Download CV</button>

                </a>
                <div className="blur s-blur1" style={{ background: "#9EE7F6" }}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "15rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </motion.div>
                <motion.div
                    initial={{ left: "-25rem" }}
                    whileInView={{ left: "0rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Css, JavaScript, React'}
                    />
                </motion.div>
                <motion.div
                    initial={{ right: "25rem" }}
                    whileInView={{ left: "20rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '17rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UX/UI'}
                        detail={'Lorem ispum dummy text are usually use in section where we need some random text'}
                    />
                </motion.div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>
        </div >
    )
}

export default Services