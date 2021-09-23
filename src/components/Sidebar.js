import React from 'react'

import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import pin from '../assets/icons/pin.svg';
import tie from '../assets/icons/tie.svg';
import mightycoder from '../assets/mightycoder.svg';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Sunil <span>Suryawanshi</span></div>
            <div className="sidebar__item sidebar__title"> Web Developer</div>
            <a href="!#">
                <div className="sidebar__item">
                    <img src={tie} alt="Resume" className="sidebar__icon"/> Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon" />facebook</a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar__icon" />instagram</a>
            </figure>
            <div className="contact">
                <div className="sidebar__item">
                <a href=""><img src={github} alt="github" className="sidebar__icon" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon" />
                    Sangli,India</div>
                <div className="sidebar__item">code.sunilsuryawanshi939@gmail.com</div>
                <div className="sidebar__item">8530796939</div>
                <div className="sidebar__item sidebar__email">Email me</div>
            </div>
        </div>
    )
}

export default Sidebar
