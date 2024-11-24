import React, { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion';
import { RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import { PrimaryButton, SecondaryButton } from '../';
import { logo  } from '../../assets';
import { Link, useNavigate } from "react-router-dom";
import './navbar.scss'
import ProfileBar from '../ProfileBar/ProfileBar';
import { useAuthDispatch, useAuthState } from '../../components/AuthContext'
import { logout } from '../../components/action'
export default function Navbar() {

  // const auth = useContext(AuthContextProvider)

  const [toggleMenu , setToggleMenu] = useState()

  const dispatch = useAuthDispatch()
  const user = useAuthState()

  const showMenu = () =>{
    setToggleMenu(true)
  }
  const hideMenu = () =>{
    setToggleMenu(false)
  }
  let navigat = useNavigate();
  
  const handleLoginButton = () => {
    setToggleMenu(false)
    navigat("/login")
  }
  const handleRegisterButton = () =>{
    setToggleMenu(false)
    navigat("/register")
  }
  return (
      <div className='navbar'>
      <div className='navbar-links'>
       <div className='navbar-links-logo'>
         <img src={logo} alt="" />
       </div>
       <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/doctor/search">Find a Doctor</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/drugs">Drugs</Link>
        <Link to="contact">Contact</Link>
        <Link to="/about">About </Link>
       
        </div>
        </div>
        
        
        { 
        !user.userDetails && (
        <div className="navbar-sign">
          <PrimaryButton content="sign in" onClick={handleLoginButton}/>
          <SecondaryButton content="sign up" onClick={handleRegisterButton}/>
        </div>
        )
        }
         { 
        user.userDetails && (
          <div className="navbar-sign">
            <ProfileBar user={user.userDetails} />
          </div>
        )
        }
        
        <div className="navbar-menu-button">
          {
          toggleMenu

          ? <RiCloseLine color="#247BEA" size={27} onClick={hideMenu} />
          : <RiMenu3Line color="#247BEA" size={27} onClick={showMenu} />
          
          }
        </div>
        
          
          {toggleMenu && (
            <motion.div
            initial={{
              x: 400,
              
            }}
            whileInView={{
                x: 0,
              
            }}
            transition={{
              duration: .3
            }}
            className='navbar-menu-container'>
                <div className='navbar-menu-container-links'>  
                  <motion.div to="/" animate={{ x: [100 , 0 ] }} transition={{ delay: 0, duration: .6}} onClick={ hideMenu }  ><Link to='/'>Home</Link> </motion.div>
                  <motion.div animate={{ x: [100 , 0 ] }} transition={{ delay: 0.1, duration: .6}} onClick={ hideMenu }  ><Link to='/doctor/search'>Find a doctoe</Link> </motion.div>
                  <motion.div  animate={{ x: [100 , 0 ] }} transition={{ delay: 0.2, duration: .6}} onClick={ hideMenu }  ><Link to='/questions'>Questions</Link> </motion.div>
                  <motion.div  animate={{ x: [100 , 0 ] }} transition={{ delay: 0.3, duration: .6}} onClick={ hideMenu }  ><Link to="/drugs">Drugs</Link> </motion.div>                 
                  <motion.div  animate={{ x: [100 , 0 ] }} transition={{ delay: 0.5, duration: .6}} onClick={ hideMenu }  ><Link to="/contact">contact</Link> </motion.div>                 
                  <motion.div  animate={{ x: [100 , 0 ] }} transition={{ delay: 0.6, duration: .6}} onClick={ hideMenu }  ><Link to="/about">about</Link> </motion.div>                 
                </div>

                
                  { !user && (

                    <div className="navbar-menu-sign">
                      <PrimaryButton content="sign in" onClick={handleLoginButton}/>
                      <SecondaryButton content="sign up" onClick={handleRegisterButton}/>
                    </div>
                  )
                  }
                  {
                    user && (
                      <Link to='/profile' style={{ display: 'flex' , alignItems: 'center' , gap: '1rem'}}><img src={user.userDetails.patient.avatar} style={{ width: '50px'} } alt="" />{ user.userDetails.username }</Link> 
                    )
                  }
                   
                
            </motion.div>
          )}
          
    </div>
  )
}
