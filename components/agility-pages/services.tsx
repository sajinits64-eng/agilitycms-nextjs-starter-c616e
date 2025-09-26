import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Optional: load bootstrap JS and any custom scripts here as needed
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    // Load custom scripts like theme-change.js if needed here 
  }, []);

  return (
    <>
      {/* header */}
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
              <span className="navbar-toggler-icon fa icon-expand fa-bars" />
              <span className="navbar-toggler-icon fa icon-close fa-times" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">
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
                  <a className="nav-link" href="contact.html">
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
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            {/* toggle switch for light and dark theme */}
            <div className="cont-ser-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun" />
                      <i className="gg-moon" />
                    </div>
                  </label>
                </div>
              </nav>
            </div>
            {/* //toggle switch for light and dark theme */}
          </nav>
        </div>
      </header>
      {/* banner section */}
      <div className="slider">
        <div className="slide current">
          <div className="bg-layer">
            <div className="content">
              <h6>Start Your Company With Us</h6>
              <h3>
                Plan Business to Active <br /> Goal!
              </h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Business & Finance Consultancy</h6>
              <h3>To grow & manage your business!</h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Start Your Company</h6>
              <h3>
                Your Vision, <br />
                Our Achievement!
              </h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="bg-layer">
            <div className="content">
              <h6>Business Consultancy</h6>
              <h3>Building a future together!</h3>
              <a href="about.html" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev">
          <i className="fas fa-arrow-left" />
        </button>
        <button id="next">
          <i className="fas fa-arrow-right" />
        </button>
      </div>
      {/* //banner section */}
      {/* home page service grids */}
      <section className="home-services py-5" id="services">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: 700 }}>
            <h5 className="small-title mb-2">Valued Services</h5>
            <h3 className="title-style">More than 30+ years we provide business consulting</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-donate" />
                </div>
                <h4 className="number">01</h4>
                <h4>
                  <a href="#url">Financial planing</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem,
                  dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-marker" />
                </div>
                <h4 className="number">02</h4>
                <h4>
                  <a href="#url">Training services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem,
                  dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-user-tie" />
                </div>
                <h4 className="number">03</h4>
                <h4>
                  <a href="#url">Marketing services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem,
                  dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="icon">
                  <i className="fas fa-calculator" />
                </div>
                <h4 className="number">04</h4>
                <h4>
                  <a href="#url">Taxation services</a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit. doloret quas saepe autem,
                  dolor set.
                </p>
                <a href="services.html" className="read">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //home page service grids */}
      {/* why choose section */}
      <section className="w3l-servicesblock py-5" id="whychoose">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 className="small-title mb-2">Why choose us</h5>
              <h3 className="title-style">We Provided Some Of The Good Quality To You</h3>
              <p className="mt-3">
                Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.
              </p>
              <div className="row two-grids mt-5 pt-lg-4">
                <div className="col-sm-6 grids_info d-flex">
                  <i className="fas fa-hand-holding-usd" />
                  <div className="detail ms-3">
                    <h4>Finance Consultant</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                  </div>
                </div>
                <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                  <i className="far fa-chart-bar" />
                  <div className="detail ms-3">
                    <h4>Business Consultant</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
              <img src="assets/images/img1.jpg" alt="" className="img-fluid radius-image" />
              <div className="imginfo__box">
                <h6 className="imginfo__title">36+</h6>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //why choose section */}
      {/* features section */}
      <section className="w3l-grids-block py-5" id="features">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: 600 }}>
            <h5 className="small-title mb-2">Our Features</h5>
            <h3 className="title-style">We Make Your Agency Full Bright</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-business-time" />
                  <h3 className="mt-3 mb-2"> Market Research</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fab fa-accusoft" />
                  <h3 className="mt-3 mb-2">Startup Business</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-chart-line" />
                  <h3 className="mt-3 mb-2">Business Growth</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-chart-pie" />
                  <h3 className="mt-3 mb-2">Consultancy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-piggy-bank" />
                  <h3 className="mt-3 mb-2"> Financial Advices</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-copy" />
                  <h3 className="mt-3 mb-2">Tax Strategy</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora rerum
                    perspiciatis?
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //features section */}
      {/* 3grids with bg-image section */}
      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: 700 }}>
            <h5 className="small-title mb-2">What we do?</h5>
            <h3 className="title-style">We take care of the Future!</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <span className="meta-value">Investment</span>
                  <a href="#blog" className="blog-desc">
                    Strength solutions
                  </a>
                  <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">
                    Read More
                    <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <span className="meta-value">Strategy</span>
                  <a href="#blog" className="blog-desc">
                    Business analytics
                  </a>
                  <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">
                    Read More
                    <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
              <div className="top-pic3">
                <div className="card-body blog-details">
                  <span className="meta-value"> Tax Consulting </span>
                  <a href="#blog" className="blog-desc">
                    Stock investments
                  </a>
                  <a href="#blog" className="btn btn-style-primary btn-style text-white mt-4">
                    Read More
                    <i className="fas fa-arrow-right ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //3grids with bg-image section */}
      {/* footer */}
      <footer className="w3l-footer py-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-4 sub-one-left">
              <h6>About </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia dicta magni ea at, culpa atque,
                rerum dolorum voluptas alias qui temporibus ex totam distinctio nobis impedit minus rerum, nihil blan
                ditiis quos atque.
              </p>
              <ul className="social mt-4 pt-lg-1">
                <li>
                  <a href="#facebook">
                    <span className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <span className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#google-plus">
                    <span className="fab fa-google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <span className="fab fa-instagram" />
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
                  <span className="fas fa-envelope-open" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div className="href2 my-3">
                  <span className="fas fa-phone-alt" />
                  <a href="tel:+44-123-456-78">+44-123-456-78</a>
                </div>
                <div>
                  <p className="contact-para mb-3">
                    <span className="fas fa-map-marker-alt" />
                    New York, 235 Lane, 10001
                  </p>
                </div>
                <div>
                  <p className="contact-para">
                    <span className="fas fa-clock" />
                    Office Hours: 9AM - 7PM
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
      {/* //footer */}
      {/* move top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        id="movetop"
        title="Go to top"
      >
        <span className="fas fa-level-up-alt" aria-hidden="true" />
      </button>
    </>
  );
}
