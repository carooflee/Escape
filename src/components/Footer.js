import React, {Link} from 'react';
import {Button} from "./Button";
import './Footer.css';

function Footer () {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to our newsletter to stay up to date on all the newest destinations.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                            <Link to="/sign-up">How It Works</Link>
                            <Link to="/">Testimonials</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Investors</Link>
                            <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                            <Link to="/sign-up">How It Works</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Support</Link>
                            <Link to="/">Destinations</Link>
                            <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                            <Link to="/sign-up">Submit Video</Link>
                            <Link to="/">Ambassadors</Link>
                            <Link to="/">Agency</Link>
                            <Link to="/">Influencers</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                            <Link to="/">Instagram</Link>
                            <Link to="/">Facebook</Link>
                            <Link to="/">YouTube</Link>
                            <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <small className="website-rights">ESCAPE © 2020</small>
        </div>
    )
}

export default Footer;