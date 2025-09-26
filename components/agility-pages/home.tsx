import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Dynamically load Bootstrap JS (once client-side)
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Load custom scripts if any are placed in public/js
    const script = document.createElement('script');
    script.src = '/js/theme-change.js';  // example for custom script
    script.async = true;
    document.body.appendChild(script);

    // Cleanup scripts on unmount (optional)
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <header id="site-header" className="fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <form action="#search" method="GET" className="d-flex search-header ms-lg-2">
                <input className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search" required />
                <button className="btn btn-style" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            {/* Add theme switcher if needed */}
          </nav>
        </div>
      </header>

      {/* Banner slider */}
      <div className="slider">
        {/* Static slider markup here */}
        <div className="slide current">
          <div className="bg-layer">
            <div className="content">
              <h6>Start Your Company With Us</h6>
              <h3>Plan Business to Active Goal!</h3>
              <a href="/about" className="btn btn-style mt-4">
                Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Other slides similar */}
      </div>
      <div className="buttons">
        <button id="prev">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button id="next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* More sections go here, copied and converted similarly ... */}

      {/* Footer */}
      <footer className="w3l-footer py-5">
        {/* Footer content as JSX */}
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        id="movetop"
        title="Go to top"
      >
        <span className="fas fa-level-up-alt" aria-hidden="true"></span>
      </button>
    </>
  );
}
