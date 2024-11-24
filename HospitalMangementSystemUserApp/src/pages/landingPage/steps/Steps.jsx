import React from 'react'

import './steps.scss'

import SearchDoc  from '../../../assets/icons/doctor.png'
import QA  from '../../../assets/icons/smartphone.png'
import Solution from '../../../assets/icons/solution.png'
import MakeApp  from '../../../assets/icons/appointment.png'


export default function Steps() {
  return (
    <div className='step'> 
       <div className='max-width'>
         <h1>Seamless Solutions <span>, Simplified Steps.</span> </h1>
         <div className="content">
          <div className='card'>
           <div className="box">
               <div className='step-logo'>
                <img src={SearchDoc} alt="search doc" />
               </div>
               <h3>Search Doctors</h3>
               <p>Discover a comprehensive directory of highly skilled doctors, ready to provide exceptional care tailored to your unique requirements.</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={QA} alt="search doc" />
               </div>
               <h3>Request consultation</h3>
               <p>Take control of your healthcare journey by requesting a personalized consultation with top medical experts, ensuring prompt attention to your concerns and delivering optimal treatment plans.</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={MakeApp} alt="search doc" />
               </div>
               <h3>Make Appointment</h3>
               <p>Seamlessly schedule your appointments with ease, ensuring convenient access to quality healthcare services at your preferred time, all while prioritizing your comfort and well-being.</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={Solution} alt="search doc" />
               </div>
               <h3>Get Solutions</h3>
               <p>Discover comprehensive solutions tailored to your unique healthcare needs, providing effective and personalized treatments to help you achieve optimal well-being and a healthier lifestyle.</p>
           </div>
          </div>
         </div>
       </div>    
    </div>
  )
}
