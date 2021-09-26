import React from 'react';
import Bar from './Bar';
import { motion } from 'framer-motion';
import { tools,languages } from '../data/resume_data';
import './resume.css';
import './bar.css';

const Resume = () => {
    const resume_variatnt={
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
        <motion.div className="container resume"
            variants={resume_variatnt}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Master of Computer Applications
                        </h5>
                        <p className="resume-card__name">
                        Veermata Jijabai Technological Institute, Mumbai (2019 - 2022)
                        </p>
                        <p className="resume-card__details">I am currently persuing Master of Computer Applications from VJTI,Mumbai</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        {/* Experience */}
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Bacherlor of Computer Science
                        </h5>
                        <p className="resume-card__name">
                            Balwant College, Vita (2016 - 2019)
                        </p>
                        <p className="resume-card__details">I have completed Bsc Computer Science with 79.07 % .</p>
                    </div>
                </div>
            </div>

            <div className="row resume__row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="resume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;