import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <>
    <div className="footer-container">
        <div className="social-media">
            <FacebookIcon className='facebook-icon'/>
            <InstagramIcon className='instagram-icon'/>
            <YouTubeIcon className='youtube-icon'/>
        </div>
        <div className="footer-links">
            <div>
                <p>Audio Description</p>
                <p>Investor Relation</p>
                <p>Legal Notice</p>
                <p>Service Code</p>
            </div>
            <div>
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
            </div>
            <div>
                <p>Gift Cards</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
            </div>
            <div>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact Us</p>
            </div>
        </div>
        <div className="footer-text">
            <p>© 1997-2026 Netflix, Inc.</p>
        </div>
    </div>
    </>
  )
}

export default Footer