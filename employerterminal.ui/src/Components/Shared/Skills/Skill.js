import React from 'react';
import './SkillBox.scss';

class Skill extends React.Component {
state = {
  show: false,
}

  toggleSpeechBubble = (e) => {
    e.preventDefault();
    const { show } = this.state;
    if (show) {
    this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  }

  render () {
    const { skill } = this.props;
    const { show } = this.state;
    return (
      <div className="SkillBox">
        <div dangerouslySetInnerHTML={{__html: skill.svg_icon}} onMouseOver={this.toggleSpeechBubble} onMouseOut={this.toggleSpeechBubble}></div>
        { show ? <div className="speech-bubble text-center"><div className="arrow top"></div>{skill.skill_name}</div> : null }
      </div>
    );
  }
}

export default Skill;