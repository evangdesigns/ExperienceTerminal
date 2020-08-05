import React from 'react';
import Skill from './Skill';
import TitleBoard from '../TitleBoard/TitleBoard';
import { getAllSkills, getSkillsByTitle } from '../../../helpers/data/skills';
import './SkillBox.scss';
import { Container, Row, Col } from 'react-bootstrap';

class SkillBox extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    const { titleId } = this.props;
    this.getSkills(titleId);
  }

  componentWillReceiveProps(nextProps) {
    const { titleId } = this.props;
    if (nextProps.titleId !== titleId ) {
      this.getSkills(nextProps.titleId);
      }
    }

  getSkills = (titleId) => {
    if (titleId === 1){
      getAllSkills()
      .then(skills => this.setState({skills:skills}))
    } else {
      getSkillsByTitle(titleId)
      .then(skills => this.setState({skills:skills}))
    }
  }

  render () {
    const { skills } = this.state;
    const titleSkills = skills.map(skill => <Skill key={skill.skill_id} skill={skill}/>)
    return (
      <div>
        <TitleBoard title="technologies"/>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} sm={12}>
              <div className="d-flex flex-wrap justify-content-center">
                {titleSkills}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SkillBox;