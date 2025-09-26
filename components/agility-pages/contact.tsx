import React from "react";

export default function Contact() {
  return (
    <>
      {/* Header */}
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
              <i className="fab fa-wikipedia-w"></i>orkup
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
              <form action="#search" method="GET" className="d-flex search-header ms-lg-2">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter Keyword..."
                  aria-label="Search"
                  required
                />
                <button className="btn btn-style" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            {/* theme switcher */}
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </header>

      {/* Inner Banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Contact Us</h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2"></i>Contact Us
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w3l-contact-info-main py-5" id="contact">
        <div className="container pt-lg-5 pt-md-4 pt-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "700px" }}>
            <h5 className="small-title mb-1">Get In Touch</h5>
            <h3 className="title-style">Contact Us</h3>
          </div>
          <div className="row">
            <div className="col-md-6 left-cont-contact pe-md-4">
              <div className="contact-address p-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Visit Us:</h5>
                    <p>5th Avenue, London</p>
                  </div>
                </div>
              </div>
              <div className="contact-address p-4 mt-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Call Us:</h5>
                    <a href="tel:+12 23456790">+12 23456790</a>
                  </div>
                </div>
              </div>
              <div className="contact-address p-4 mt-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Mail Us:</h5>
                    <a href="mailto:info@example.com"> info@example.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 right-cont-contact ps-md-4 mt-md-0 mt-5">
              <form
                method="post"
                className="w3layouts-contact-fm"
                action="https://sendmail.w3layouts.com/submitForm"
              >
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="w3lName" id="w3lName" placeholder="Your Name" required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="email" name="w3lSender" id="w3lSender" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="w3lMessage" id="w3lMessage" placeholder="Write Message" required></textarea>
                </div>
                <div className="form-group-2 mt-3 text-end">
                  <button type="submit" className="btn btn-style">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="map-contact pt-5">
        <iframe
          className="map-w3layouts"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
          width="100%"
          height="400"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="w3l-footer py-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 sub-one-left">
              <h6>About </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia dicta magni ea at, culpa atque,
                rerum dolorum voluptas alias qui temporibus ex totam distinctio nobis impedit minus rerum, nihil blan ditiis
                quos atque.
              </p>
              <ul className="social mt-4 pt-lg-1">
                <li>
                  <a href="#facebook">
                    <span className="fab fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <span className="fab fa-linkedin-in"></span>
                  </a>
                </li>
                <li>
                  <a href="#google-plus">
                    <span className="fab fa-google-plus-g"></span>
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
              <h6>Recent Posts</h6>
              <div className="footer-post">
                <ul>
                  <li>
                    <a href="#post">Suzan Lois</a>
                  </li>
                  <li className="mx-2">
                    <a href="#post">- Nov. 21 - </a>
                  </li>
                  <li>
                    <a href="#post">3 comments</a>
                  </li>
                </ul>
                <p className="post-footer">
                  <a href="#post">Delivering New Customer Experiences with Workup.</a>
                </p>
              </div>
              <div className="footer-post mt-4">
                <ul>
                  <li>
                    <a href="#post">Rose Alha</a>
                  </li>
                  <li className="mx-2">
                    <a href="#post">- Nov. 21 - </a>
                  </li>
                  <li>
                    <a href="#post">3 comments</a>
                  </li>
                </ul>
                <p className="post-footer">
                  <a href="#post">Discussing the current trends in the share market.</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
              <h6>Contact </h6>
              <div className="column2">
                <div className="href1">
                  <span className="fas fa-envelope-open"></span>
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div className="href2 my-3">
                  <span className="fas fa-phone-alt"></span>
                  <a href="tel:+44-123-456-78">+44-123-456-78</a>
                </div>
                <div>
                  <p className="contact-para mb-3">
                    <span className="fas fa-map-marker-alt"></span>New York, 235 Lane, 10001
                  </p>
                </div>
                <div>
                  <p className="contact-para">
                    <span className="fas fa-clock"></span>Office Hours: 9AM - 7PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-footer text-center mt-5 pt-sm-4 pt-2">
            <p>
              &copy; 2021 Workup. All rights reserved | Design by{" "}
              <a href="https://w3layouts.com/">W3Layouts</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Move top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        id="movetop"
        title="Go to top"
      >
        <span className="fas fa-level-up-alt" aria-hidden="true"></span>
      </button>
    </>
  );
}
