import React from 'react'
import './Navbar.css'
import { Toggle } from '../'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-left__name">Quang</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-right__list">
                    <ul>
                        <li>Home</li>
                        <li>Serivces</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">Contact </button>
            </div>
        </div>
    )
}

export default Navbar