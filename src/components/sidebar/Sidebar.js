import React from 'react'

import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import pin from '../../assets/icons/pin.svg';
import tie from '../../assets/icons/tie.svg';
import mightycoder from '../../assets/mightycoder.svg';
import resume from '../../assets/Sunil_Suryawanshi_resume.pdf';
import './sidebar.css';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:sunilsuryawanshi939@gmail.com")
    }

    const sidebar_variatnt = {
        hidden:{
            x: '-70vh',
        },
        visible:{
          x: 0,
          transition:{
              delay:0.5, duration:0.5, type:'spring'
          }
        }
      }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variatnt}
            initial='hidden'
            animate='visible'
        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
            <div className="sidebar__name">Sunil <span>Suryawanshi</span></div>
            <div className="sidebar__item sidebar__title"> Web Developer</div>
            <a href={resume} download="Sunil_Suryawanshi_resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="Resume" className="sidebar__icon"/> Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/sunilsuryawanshi939" target="_blank"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/sunil_suryawanshi_97" target="_blank"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/sunilsuryawanshi939" target="_blank"><img src={github} alt="github" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__linkedin">
                <a href="https://www.linkedin.com/in/sunilsuryawanshi939" target="_blank"><img src={linkedin} alt="LinkedIn" className="sidebar__icon mr-3" />LinkedIn</a>
                </div>
                <div className="sidebar__location">
                <img src={pin} alt="location" className="sidebar__icon " />  Sangli,India</div>
                <div className="sidebar__item email">sunilsuryawanshi939@gmail.com</div>
                <div className="sidebar__item">+918530796939</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </motion.div>
    )
}

export default Sidebar




