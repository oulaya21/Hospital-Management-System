import React from 'react';
import { PrimaryButton, SecondaryButton } from '../../../components';
import { ImCheckboxChecked } from 'react-icons/im';
import { doctors } from '../../../assets';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './Services.scss';

function Services() {
  const services = [
    '1000+ Ready Bed',
    '30+ ICU Solution',
    'the largest Hospital',
    '25/7 Patient Support'
  ];
  
  return (
    <div className='app__services'>
      <div className="app__services-img">
        <img src={doctors} alt="" />
      </div>
      <div className="app__services-info">
        <h1>
          Every time and anywhere our Experts are ready to Help
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="services">
          {services.map(service => (
            <div className="service_item" key={service}>
              <ImCheckboxChecked />
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        <div className="social-icons">
            <a href="https://www.instagram.com" style={{ marginRight: '10px'}} target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://www.facebook.com" style={{ marginRight: '10px'}} target="_blank" rel="noopener noreferrer">
              <FaFacebook style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=123456789" style={{ marginRight: '10px'}} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        <div className="app__services-contact-buttons">
        <a href='http://localhost:3000/register'>
          <PrimaryButton content='Sing up'/>
          </a>
          <a href='http://localhost:3000/doctor/search'>
          <SecondaryButton content='Book Now' />
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default Services;
