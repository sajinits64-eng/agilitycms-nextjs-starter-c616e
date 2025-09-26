export default function About() {
  return (
    <>
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
                  <a className="nav-link active" href="about.html">
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
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            {/* Add React state for theme toggle instead of raw HTML */}
          </nav>
        </div>
      </header>

      {/* Further page sections similarly converted */}

      {/* Replace img src paths */}
      <img src="/images/about.jpg" alt="" className="img-fluid radius-image" />

      {/* Continue for features, why choose, progress, testimonials, team, footer etc. */}
    </>
  );
}
