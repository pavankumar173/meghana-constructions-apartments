import React, { useState } from 'react';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import ProjectList from './components/ProjectList'; // Import the new component

const logo = "/logo.png";
const localFallbackLogo = "/fallback-logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div>
        {/* Header */}
        <header className="header-section" data-scroll="shrink">
          <div className="container">
            <div className="header">
              <div className="logo">
                <a href="/">
                  <img
                    src={logo}
                    alt="Meghana Constructions Logo"
                    className="img-responsive"
                    onError={(e) => {
                      e.target.src = localFallbackLogo;
                      e.target.onError = null;
                    }}
                  />
                </a>
              </div>
              <ul className="list-unstyled">
                <li><a href="#apartments">Apartments</a></li>
                <li><a href="#plots">Plots</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#support">Support</a></li>
                <li className="dropdown">
                  <a href="javascript:void(0)">Discover More <i className="fa-solid fa-angle-down"></i></a>
                  <ul className="submenu list-unstyled">
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#news">News</a></li>
                  </ul>
                </li>
                <li><a href="#contact" className="active">Contact Us</a></li>
              </ul>
              <div id="menuToggle">
                <input type="checkbox" id="toggleInput" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <span></span><span></span><span></span>
                <ul id="menu" className="main-menu-list list-unstyled">
                  <li><a href="#apartments">Apartments</a></li>
                  <li><a href="#plots">Plots</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#support">Support</a></li>
                  <li className="dropdown">
                    <a href="javascript:void(0)">Discover More <i className="fa-solid fa-angle-down"></i></a>
                    <ul className="submenu list-unstyled">
                      <li><a href="#careers">Careers</a></li>
                      <li><a href="#blog">Blog</a></li>
                      <li><a href="#news">News</a></li>
                    </ul>
                  </li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Banner */}
        <section className="banner-section">
          <div className="comman-banner sub-banner">
            <div className="sub-banner-content">
              <h1>Contact Us</h1>
            </div>
            <div style={{ height: '200px', background: '#ccc', textAlign: 'center', paddingTop: '80px' }}>Banner Image Placeholder</div>
          </div>
        </section>

         {/* Project List Section */}
        <section className="project-list-section">
          <div className="container">
            <ProjectList />
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="contac-main-section">
          <div className="bred-crumb">
            <div className="container">
              <ul className="list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="contac-sub-section">
              <div className="contact-left">
                <h4>Find Your Dream Home</h4>
              </div>
              <div className="contact-right">
                <h4>Get in Touch</h4>
                <form id="contactus">
                  <div className="contact-two-col">
                    <div className="form-group">
                      <label>First Name <span className="star-red">*</span></label>
                      <input type="text" name="firstName" className="form-control" required placeholder="First Name" />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lastName" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email <span className="star-red">*</span></label>
                    <input type="email" name="email" className="form-control" required placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="star-red">*</span></label>
                    <div className="phone-input">
                      <select name="phoneNumber" className="country-code form-control">
                        <option value="+91">(IND) +91</option>
                        <option value="+1">(USA) +1</option>
                        <option value="+65">(SGP) +65</option>
                      </select>
                      <input type="number" name="telphone" className="phone-number form-control" required placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="contact-two-col">
                    <div className="form-group">
                      <label>Age</label>
                      <input type="number" name="age" className="form-control" placeholder="Age" />
                    </div>
                    <div className="form-group">
                      <label>Pincode</label>
                      <input type="text" name="pincode" className="form-control" placeholder="Pincode" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Property Type <span className="star-red">*</span></label>
                    <select name="property_type" className="form-control">
                      <option value="">Select</option>
                      <option value="Apartments">Apartments</option>
                      <option value="Plots">Plots</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Time Frame <span className="star-red">*</span></label>
                    <select name="timeFrame" className="form-control">
                      <option value="">Select</option>
                      <option value="0">Immediate</option>
                      <option value="1">1 month</option>
                    </select>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      You agree to our friendly <a href="/privacy-policy" target="_blank">Privacy Policy.</a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Enquire Now</button>
                </form>
              </div>
            </div>
            <div className="conatact-team">
              <h3>Our Office Locations</h3>
              <div className="contact-details">
                <div className="map-area">
                  <div className="pin-hyd active" style={{ width: '20px', height: '20px', background: '#9B2C2C', borderRadius: '50%' }}></div>
                  <div className="pin-bangalore" style={{ width: '20px', height: '20px', background: '#9B2C2C', borderRadius: '50%' }}></div>
                  <div className="pin-ap" style={{ width: '20px', height: '20px', background: '#9B2C2C', borderRadius: '50%' }}></div>
                  <div style={{ height: '300px', background: '#ddd', textAlign: 'center', paddingTop: '130px' }}>Map Placeholder</div>
                </div>
                <div className="address-container">
                  <div className="adress adress-hyd blue-border">
                    <h4>Meghana Constructions Pvt Ltd.</h4>
                    <p className="line">#123, Sky Towers, Banjara Hills, Hyderabad - 500034</p>
                    <p className="phone"><a href="tel:+91-7997823335">+91-7997823335</a></p>
                    <p className="mail"><a href="mailto:info@meghanaconstructions.com">info@meghanaconstructions.com</a></p>
                  </div>
                  <div className="adress adress-bangalore blue-border">
                    <h4>Meghana Constructions Pvt Ltd.</h4>
                    <p className="line">#45, Green Plaza, Race Course, Bengaluru - 560001</p>
                    <p className="phone"><a href="tel:+91-7997969000">+91-7997969000</a></p>
                    <p className="mail"><a href="mailto:salesblr@meghanaconstructions.com">salesblr@meghanaconstructions.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  

        {/* Footer */}
        <footer className="footer-section">
          <div className="container">
            <div className="get-updates">
              <div className="col">
                <h3>Get Updates</h3>
                <p>Subscribe to Stay Informed with the Latest News and Updates.</p>
              </div>
              <form action="/contact-us" method="post">
                <div className="col">
                  <div className="input-group">
                    <input type="email" className="form-control" name="get_updates_email" placeholder="Enter Your Email Here" required />
                    <button className="btn" type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="location-flex">
                <div className="footer-logo">
                  <div style={{ height: '50px', background: '#ccc', textAlign: 'center', paddingTop: '15px' }}>Footer Logo Placeholder</div>
                </div>
                <div className="footer-location">
                  <h4>Locations</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="location-img"><div style={{ width: '20px', height: '20px', background: '#ccc' }}></div></div>
                      <div className="location-name">HYDERABAD</div>
                    </li>
                    <li>
                      <div className="location-img"><div style={{ width: '20px', height: '20px', background: '#ccc' }}></div></div>
                      <div className="location-name">BANGALORE</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="quick-links">
                <h4>Quick Links</h4>
                <div className="quick-links-list">
                  <ul className="list-unstyled">
                    <li><a href="#plots">Plots</a></li>
                    <li><a href="#apartments">Apartments</a></li>
                    <li><a href="#about">About Us</a></li>
                  </ul>
                  <ul className="list-unstyled">
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="follow-us">
                <h4>Follow Us On</h4>
                <ul className="list-unstyled social-media">
                  <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://youtube.com" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <div className="copyright-l">© 2025 Copyright Meghana Constructions</div>
              <div className="copyright-r"><a href="https://example.com" target="_blank">Powered by Example</a></div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;