import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { ReactComponent as Logo} from '../../../images/logo.svg';
import { ReactComponent as Resume} from '../../../images/icons/icon_Resume.svg';
import { ReactComponent as Mail} from '../../../images/icons/icon_Contact.svg';
import { ReactComponent as LinkedIn} from '../../../images/icons/icon_linkedin.svg';
import { ReactComponent as GitHub} from '../../../images/icons/icon_GitHub.svg';
import { Row, Col, Container, Media } from 'react-bootstrap';
import { getTitle } from '../../../helpers/data/titles';

import './Footer.scss';


class Footer extends React.Component {
  state = {
    next: [],
    prev: []
  }

  getNextTitle = (titleId) => {
    let nextTitle = 0;
    if (titleId === 1 || titleId === 2 || titleId === 3 || titleId === 4) {
      nextTitle = titleId + 1;
    } else if (titleId === 5) {
      nextTitle = 1;
    }
    getTitle(nextTitle)
    .then(title => this.setState({ next : title }))
  }

  getPreviousTitle = (titleId) => {
    let prevTitle = 0;
    if (titleId === 1 ) {
      prevTitle = 5;
    } else if (titleId === 2 || titleId === 3 || titleId === 4 || titleId === 5) {
      prevTitle = titleId - 1;
    }
    getTitle(prevTitle)
    .then(title => this.setState({ prev : title }))
  }

  routeEvent = (title) => {
    const { routeWriter } = this.props;
    routeWriter(title);
  }

  eventHandler = (e) => {
    e.preventDefault();
    const { titleChange } = this.props;
    const newTitle = e.target.id;
    titleChange(newTitle);
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getNextTitle(titleId)
    this.getPreviousTitle(titleId)
  }

  componentDidUpdate(prevProps) {
    const { titleId } = this.props;
    if (prevProps.titleId !== titleId ) {
      this.getNextTitle(titleId);
      this.getPreviousTitle(titleId)
      }
    }

  render () {
    const { routeWriter } = this.props;
    const { next, prev } = this.state;
    return (
      <div>
        <Container bsPrefix="Footer">
          <div className="inner-footer">
            <Row className="upperDeck py-3">
            <Col onClick={this.eventHandler}>
            <Link to={routeWriter(prev.title_Name)}>
              <div className="clickOverlay" id={prev.title_Name}></div>
            </Link>
              <Media className="underlay">
                <Arrow className="align-self-start mr-3 hrzArrow" transform="rotate(180)" fill="#fff"/>
                <Media.Body>
                <h3><img src={`https://github.com/evangdesigns/EmployerTerminal/blob/master/employerterminal.ui/src/images/icons/title/${prev.title_Icon}.png?raw=true`} alt=" " width={50} /> {prev.title_Name}</h3>
                </Media.Body>
              </Media>
            </Col>
            <Col onClick={this.eventHandler}>
            <Link to={routeWriter(next.title_Name)}>
              <div className="clickOverlay" id={next.title_Name}></div>
            </Link>
            <Media className="underlay">
              <Media.Body>
              <h3 className="text-right"><img src={`https://github.com/evangdesigns/EmployerTerminal/blob/master/employerterminal.ui/src/images/icons/title/${next.title_Icon}.png?raw=true`}  alt=" " width={50} /> {next.title_Name}</h3>
              </Media.Body>
                <Arrow className="align-self-start ml-3 hrzArrow"/>
            </Media>
            </Col>
          </Row>
          <Row>
            <Col className="pt-3">
              <h1 className="text-center">GET IN TOUCH</h1>
            </Col>
          </Row>
          <Row>
            <Col className="pb-3 d-flex justify-content-center">
              <Link to="/resumes/Evan Grabenstein_Resume.pdf" rel="noopener noreferrer" target="_blank"><Resume className="icon"/></Link>
              <a href="mailto:evan.grabenstein@gmail.com"><Mail className="icon"/></a>
              <a href="https://www.linkedin.com/in/evangrabenstein/" rel="noopener noreferrer" target="_blank"><LinkedIn className="icon"/></a>
              <a href="https://github.com/evangdesigns" rel="noopener noreferrer" target="_blank"><GitHub className="icon"/></a>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="bars d-flex justify-content-around">
        <svg  width="25" height="150" style={{marginTop:-20, marginBottom:-20}}>
          <rect width="25" height="150" />
        </svg>
        <div>
          <Logo className="logo"/>
          <p>©2020 Evan Grabenstein. All rights reserved.</p>
        </div>
        <svg width="25" height="150" style={{marginTop:-20, marginBottom:-20}}>
          <rect width="25" height="150" />
        </svg>
      </div>
    </div>
    );
  }
}

export default Footer;