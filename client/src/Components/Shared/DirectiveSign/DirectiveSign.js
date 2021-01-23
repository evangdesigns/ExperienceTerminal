import React from 'react';
import SkillBox from '../Skills/SkillBox';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { getTitle } from '../../../helpers/data/titles';

import './DirectiveSign.scss';
import e from 'cors';


class DirectiveSign extends React.Component {
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

  eventHandler = (e) => {
    e.preventDefault();
    const { titleChange, routeWriter } = this.props;
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
    const { selectedTitle, titleId, routeWriter } = this.props;
    const { next, prev } = this.state;
    return (
      <div>
        <div className="bars d-flex justify-content-around">
          <svg  width="25" height="40" style={{marginTop:-20, marginBottom:-20}}>
            <rect width="25" height="40" />
          </svg>
          <svg width="25" height="40" style={{marginTop:-20, marginBottom:-20}}>
            <rect width="25" height="40" />
          </svg>
        </div>
        <Container bsPrefix="DirectiveSign">
        <Row className="upperDeck">
          <Col>
            <div className="clickOverlay" id={prev.title_name} onClick={this.eventHandler}>
              <Link id={prev.title_name} to={routeWriter(prev.title_name)} >
                <button id={prev.title_name} className="arrow">
                  <div id={prev.title_name} className="d-flex justify-content-start align-items-center prev">
                    <img id={prev.title_name} src="images/icons/icon_arrow.svg" width={50} alt={`${prev.title_name} arrow`} className="left"/>
                    <img id={prev.title_name} src={`images/icons/title/${prev.title_icon}.png`} alt={`${prev.title_name} icon`}/>
                    <h3 id={prev.title_name}>{prev.title_name}</h3>
                  </div>
                </button>
              </Link>
            </div>
          </Col>

          <Col>
            <div className="clickOverlay" id={next.title_name} onClick={this.eventHandler}>
              <Link id={next.title_name} to={routeWriter(next.title_name)} >
                <div id={next.title_name} className="d-flex justify-content-end">
                  <button id={next.title_name} className="arrow">
                    <div className="d-flex align-items-center next">
                      <h3 id={next.title_name}>{next.title_name}</h3>
                      <img id={next.title_name} src={`images/icons/title/${next.title_icon}.png`} alt={`${next.title_name} icon`}/>
                      <img id={next.title_name} src="images/icons/icon_arrow.svg" width={50} alt={`${next.title_name} arrow`}/>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </Col>

        </Row>
        <Row>
          <Col className="py-3">
            <h1 className="text-center">{selectedTitle}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={1} className="align-self-end px-0">
          <Arrow  className="mb-2 vrtArrow" transform="rotate(90)" />
          </Col>
          <Col xs={10} className="px-0">
            <SkillBox titleId={titleId} />
          </Col>
          <Col xs={1} className="align-self-end px-0">
          <Arrow  className="mb-2 vrtArrow float-right" transform="rotate(90)"/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default DirectiveSign;