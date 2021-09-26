import React from 'react';

import Skillcard from './Skillcard';
import { motion } from 'framer-motion';
import skills from '../data/about_data';
import './about.css';

const About = () => {
    const about_variatnt={
        hidden:{
            opacity: 0
        },
        visible:{
          opacity: 1,
          transition:{
            delay:0.2, duration:0.6
         }
        },
        exit:{
            opacity:0,
            transition:{
                ease: 'easeInOut'
            }
        }
      }

    return (
        <motion.div className="about"
            variants={about_variatnt}
            initial='hidden'
            animate='visible'
            exit='exit'

        >
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Skills to offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;