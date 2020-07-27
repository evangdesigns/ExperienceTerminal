import React from 'react';
import './SkillBox.scss';

class SkillBox extends React.Component {

  render () {
    const { skill } = this.props;
    return (
      <div className="SkillBox" dangerouslySetInnerHTML={{__html: skill.svg_icon}}>
      </div>
    );
  }
}

export default SkillBox;