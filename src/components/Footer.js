import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-sub'>
                <p className='footer-sub-heading'>Join Our newsletter subscribers to get more updates</p>
                <p className='footer-sub-text'>You can unsubscribe at any time</p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />

                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sing-up'>How we work</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Terms of service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/sing-up'>Contacts</Link>
                        <Link to='/'>Destination</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Inventors</Link>
                        <Link to='/'>Sponsorship</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link to='/sing-up'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/cards'>Cards</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/sing-up'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Linkdin</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>WhatsApp </Link>
                    </div>
                </div>
            </div>
            <div className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-log0'>
                        <Link to='/' className='social-logo'>
                            MYRON <i className='fa fa-database icon'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>MYRON &copy; 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fa fa-facebook'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fa fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i className='fa fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                            <i className='fa fa-youtube'></i>
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'>
                            <i className='fa fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer