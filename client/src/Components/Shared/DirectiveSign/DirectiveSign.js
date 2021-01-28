import React from 'react';
import SkillBox from '../Skills/SkillBox';
import { ReactComponent as Arrow} from '../../../images/icons/icon_arrow.svg';
import { ReactComponent as JOAT} from '../../../images/icons/title/title_joat.svg';
import { ReactComponent as GraphicD} from '../../../images/icons/title/title_graphicDesigner.svg';
import { ReactComponent as WebDev} from '../../../images/icons/title/title_webDeveloper.svg';
import { ReactComponent as Market} from '../../../images/icons/title/title_marketeer.svg';
import { ReactComponent as UxUi} from '../../../images/icons/title/title_uiUxDesigner.svg';

import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

import { getTitle } from '../../../helpers/data/titles';

import './DirectiveSign.scss';


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

  renderTitleIcon = (input) => {
    if (input === "Jack of All Trades") {
      return <JOAT className="icon black" id={input} />
    } else if (input === "Graphic Designer") {
      return <GraphicD className="icon black" id={input} />
    } else if (input === "Web Developer") {
      return <WebDev className="icon black" id={input} />
    } else if (input === "Marketeer") {
      return <Market className="icon black" id={input} />
    } else if (input === "UX UI Designer") {
      return <UxUi className="icon black" id={input} />
    }
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
          <Row className="upperDeck  py-3">

            <Col xs={12} sm={6}>
              <div className="clickOverlay" id={prev.title_name} onClick={this.eventHandler}>
                <Link id={prev.title_name} to={routeWriter(prev.title_name)} >
                  <div id={next.title_name} className="d-flex align-middle prev">
                    <Arrow id={prev.title_name} className="left icon black"/>
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
                  <Arrow id={prev.title_name} className="icon black"/>
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
          <Arrow  className="mb-2 down" transform="rotate(90)" />
          </Col>
          <Col xs={10} className="px-0">
            <SkillBox titleId={titleId} />
          </Col>
          <Col xs={1} className="align-self-end px-0">
          <Arrow  className="mb-2 down float-right" transform="rotate(90)"/>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default DirectiveSign;