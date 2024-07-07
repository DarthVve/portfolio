import Link from 'next/link';
import { BsLinkedin, BsNewspaper, BsTwitter, BsFillTelephoneOutboundFill, } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import './footer.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <ul className='footer-links'>
                <li>
                    <a className='footer-link' href="tel: +234 813 552 0498"><BsFillTelephoneOutboundFill /></a>
                </li>
                <li>
                    <a className='footer-link' href="mailto: osheviremajoroh@gmail.com"><MdEmail /></a>
                </li>
                <li>
                    <Link className='footer-link' href='https://www.linkedin.com/in/viremaj' target="_blank" rel="noopener noreferrer"><BsLinkedin /></Link>
                </li>
                <li>
                    <Link className='footer-link' href='https://x.com/ElitistDev' target="_blank" rel="noopener noreferrer"><BsTwitter /></Link>
                </li>
                <li>
                    <Link className='footer-link' href='https://vveportfolio.netlify.app/' target="_blank" rel="noopener noreferrer"><BsNewspaper /></Link>
                </li>
            </ul>
            <p className='footer-text'>Engr. Majoroh &copy; {year} | All rights reserved.</p>
        </footer>
    )
}

export default Footer