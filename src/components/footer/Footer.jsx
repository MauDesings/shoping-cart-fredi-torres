import React from 'react'
import {SiWhatsapp} from 'react-icons/si';
import {BiLogoFacebook, BiLogoInstagram} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer__content container'>
            <div className='footer__info'>
                <h2 className="footer__subtitle">Mau Desings</h2>
                <h3 className='footer__reserved'>Copyright &copy; 2023 All rights reserved</h3>
            </div>
           
            <div className="footer__sociales">
                <SiWhatsapp className='footer__icon' />
                <BiLogoFacebook className='footer__icon' />
                <BiLogoInstagram className='footer__icon' />
            </div>
        </div>
    </footer>
  )
}

export default Footer;