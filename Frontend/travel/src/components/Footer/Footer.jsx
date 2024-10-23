import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>Travel Dreams</h3>
          <p>Making your travel dreams come true, one destination at a time. We specialize in creating unforgettable journey experiences.</p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/plan">Hotels</a></li>
            <li><a href="/roomselection">Rooms</a></li>
            <li><a href="/flight-booking">Flights</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <div className="contact-details">
            <p><MapPin size={18} /> AC PATIL COLLEGE,KHARGHAR</p>
            <p><Phone size={18} /> +91 3215468759</p>
            <p><Mail size={18} /> PROJECT@acpce.ac.com</p>
          </div>
        </div>

        <div className="footer-section social-connect">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Travel Dreams. Made with <Heart size={14} className="heart-icon" /> for travelers worldwide</p>
      </div>
    </footer>
  );
};

export default Footer;