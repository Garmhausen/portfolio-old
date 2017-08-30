import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import './index.css';

// react-scroll: https://github.com/fisshy/react-scroll
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin');

    Events.scrollEvent.register('end');

    scrollSpy.update();
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-internal-wrapper">
            <div className="nav-links-wrapper">
              <div className="nav">
                <a
                  className="navbar-brand nav-title"
                  href="http://www.robertgarmhausen.com"
                >
                  Robert Garmhausen
                </a>
                <Link
                  activeClass="active"
                  className="about navlink"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  className="projects navlink"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  className="contact navlink"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
                <span className="nav-icons">
                  <a
                    href="https://www.linkedin.com/in/robertgarmhausen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/Garmhausen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <Element name="about" className="element about-section">
          <div className="about-wrapper">
            <div className="about-text">
              <div className="about-title">Hello</div>
              Hi! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula lorem tellus, quis imperdiet nisl pellentesque eget.
              Fusce ac viverra enim, ut hendrerit risus. Aenean ac dolor turpis.
              Phasellus viverra aliquet sagittis. Nulla ac sagittis arcu, at
              viverra velit. Aliquam nisi ipsum, placerat eu sagittis vitae,
              elementum id nisl. Ut elementum, nisi ut facilisis porttitor, enim
              nisi efficitur leo, ut fermentum velit arcu non nibh. In hac
              habitasse platea dictumst. Sed venenatis commodo maximus. Nullam
              consequat venenatis ipsum ac tincidunt. Nunc augue lacus, ornare
              id odio sed, ultrices hendrerit tellus.
            </div>
          </div>
          <div className="skills-grid">Huge grid of skills will go here.</div>
        </Element>

        <Element name="projects" className="element projects-section">
          <div className="projects-wrapper">
            <div className="projects-card">
              <div className="projects-card-left mysteryword-left">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vehicula lorem tellus, quis imperdiet nisl pellentesque eget.
                  Fusce ac viverra enim, ut hendrerit risus. Aenean ac dolor
                  turpis. Phasellus viverra aliquet sagittis.
                </p>
              </div>
              <div className="projects-card-right mysteryword-right">
                  <a className="project-link" href="liveProject">Live
                  </a>
                  <a className="project-link" href="codeProject">
                    Code
                  </a>
                </div>
            </div>
            <div className="projects-card">Card 2</div>
            <div className="projects-card">Card 3</div>
          </div>
        </Element>

        <Element name="contact" className="element contact-section">
          Contact
        </Element>
      </div>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
