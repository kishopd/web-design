import React from 'react';


const Homepage = () => {
  return (
    <div className="homepage">
      <header className="mega-menu">
        {/* Mega Menu */}
      </header>

      <section className="hero-banner">
        {/* Single Hero Banner with Header, Tagline, and CTA Button */}
        <h1>Welcome to our Camera Store</h1>
        <p>Discover the perfect camera for your moments</p>
        <button className="cta-button">Shop Now</button>
      </section>

      <section className="product-categories">
        {/* Three Product Categories */}
        <div className="product-category">Category 1</div>
        <div className="product-category">Category 2</div>
        <div className="product-category">Category 3</div>
      </section>

      <section className="featured-products">
        {/* Four Featured Products */}
        <div className="featured-product">Product 1</div>
        <div className="featured-product">Product 2</div>
        <div className="featured-product">Product 3</div>
        <div className="featured-product">Product 4</div>
      </section>

      <section className="seo-section">
        {/* SEO Section with Header, 175 words, and Image Space */}
        <h2>Boost Your Photography Skills</h2>
        <p>Improve your photography with our expert tips and tricks.</p>
        <img src="seo-image.jpg" alt="SEO Image" />
      </section>

      <section className="promo-banner">
        {/* Promo Banner Section */}
        <p>Don't miss out on our special discounts. Limited time offer!</p>
      </section>

      <footer>
        {/* Footer with Links, Social Media, and Newsletter Subscription */}
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms and Conditions</li>
        </ul>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Subscribe to our newsletter" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
