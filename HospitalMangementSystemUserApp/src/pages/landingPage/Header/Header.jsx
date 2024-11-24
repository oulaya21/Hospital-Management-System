import React from 'react'
import './Header.scss'
import { doctor, sheld } from '../../../assets'
import { PrimaryButton } from '../../../components'
import { motion } from 'framer-motion'


function Header() {
  return (
    <div className='app__header'>
        <motion.div 
        initial={{
            opacity: 0,
            x: -100
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        className="app__header-info">
            <h1>
                <span>Your health </span>,our priority   
            </h1>
            <p>
            Expert care, personalized for you. Our dedicated team is here to support your health and well-being at every step. Trust us to provide compassionate treatment and exceptional service, putting your needs first. Experience the difference of patient-centered care.
            </p>
            <div className="app__header-button" style={{ width: '50%'}}>
    <a href="http://localhost:3000/login">
        <PrimaryButton content='make an Appointment' />
    </a>
     </div>
        </motion.div>
        <motion.div
        initial={{
            opacity: 0,
            y: 100
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        className="app__header-img">
            <img src={doctor} alt="" />
            <motion.div
            animate={{ y : [ 0, 30, 0 ] }}
            transition={{ repeat: Infinity, duration: 2, type: 'tween' }}
            className="sheld">
                <img src={sheld} alt="" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Header