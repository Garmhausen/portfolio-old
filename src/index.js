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
    Events.scrollEvent.register('begin', function() {
      // console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      // console.log('end', arguments);
    });

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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <span className="navbar-brand nav-title">Robert Garmhausen</span>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="about"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="projects"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="about" className="element about-section">
          <div>
            Hi! I'm Robert, a full-stack web developer, aspiring designer and
            lover of algorithms.
          </div>
        </Element>

        <Element name="projects" className="element projects-section">
          Projects
        </Element>

        <Element name="contact" className="element contact-section">
          Contact
        </Element>
      </div>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById('root'));
