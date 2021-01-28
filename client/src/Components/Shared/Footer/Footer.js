import React from 'react';

import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { ReactComponent as Logo} from '../../../images/logo.svg';
import { ReactComponent as Resume} from '../../../images/icons/icon_Resume.svg';
import { ReactComponent as Mail} from '../../../images/icons/icon_Contact.svg';
import { ReactComponent as LinkedIn} from '../../../images/icons/icon_linkedin.svg';
import { ReactComponent as GitHub} from '../../../images/icons/icon_GitHub.svg';

import { ReactComponent as JOAT} from '../../../images/icons/title/title_joat.svg';
import { ReactComponent as GraphicD} from '../../../images/icons/title/title_graphicDesigner.svg';
import { ReactComponent as WebDev} from '../../../images/icons/title/title_webDeveloper.svg';
import { ReactComponent as Market} from '../../../images/icons/title/title_marketeer.svg';
import { ReactComponent as UxUi} from '../../../images/icons/title/title_uiUxDesigner.svg';

import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

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

  renderTitleIcon = (input) => {
    if (input === "Jack of All Trades") {
      return <JOAT className="icon white" id={input} />
    } else if (input === "Graphic Designer") {
      return <GraphicD className="icon white" id={input} />
    } else if (input === "Web Developer") {
      return <WebDev className="icon white" id={input} />
    } else if (input === "Marketeer") {
      return <Market className="icon white" id={input} />
    } else if (input === "UX UI Designer") {
      return <UxUi className="icon white" id={input} />
    }
  }

  eventHandler = (e) => {
    e.preventDefault();
    const { titleChange } = this.props;
    const newTitle = e.target.id;
    titleChange(newTitle);
  }

  popModalClick= (e) => {
    e.preventDefault();
    const { popModal, toggleModal } = this.props;
    window.scrollTo(0, 0);
    popModal('Contact');
    toggleModal();
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

              <Col xs={12} sm={6}>
                <div className="clickOverlay" id={prev.title_name} onClick={this.eventHandler}>
                  <Link id={prev.title_name} to={routeWriter(prev.title_name)} >
                    <div id={next.title_name} className="d-flex prev">
                      <Arrow id={prev.title_name} className="left icon white"/>
                      {this.renderTitleIcon(prev.title_name)}
                      <h3 id={prev.title_name}>{prev.title_name}</h3>
                    </div>
                  </Link>
                </div>
              </Col>

            <Col xs={12} sm={6}>
              <div className="clickOverlay" id={next.title_name} onClick={this.eventHandler}>
                <Link id={next.title_name} to={routeWriter(next.title_name)} >
                  <div id={next.title_name} className="d-flex next">
                    <h3 id={next.title_name}>{next.title_name}</h3>
                    {this.renderTitleIcon(next.title_name)}
                    <Arrow id={prev.title_name} className="icon white"/>
                  </div>
                </Link>
              </div>
            </Col>

          </Row>
          <Row>
            <Col className="pt-3">
              <h1 className="text-center">GET IN TOUCH</h1>
            </Col>
          </Row>
          <Row>
            <Col className="pb-3 d-flex justify-content-center">
              <Link to="/resumes/Evan Grabenstein_Resume.pdf" rel="noopener noreferrer" target="_blank"><Resume className="icon white"/></Link>
              <Link onClick={this.popModalClick}><Mail className="icon white"/></Link>
              <a href={this.popModal} rel="noopener noreferrer" target="_blank"><LinkedIn className="icon white"/></a>
              <a href="https://github.com/evangdesigns" rel="noopener noreferrer" target="_blank"><GitHub className="icon white"/></a>
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
          <p>©2021 Evan Grabenstein. All rights reserved.</p>
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