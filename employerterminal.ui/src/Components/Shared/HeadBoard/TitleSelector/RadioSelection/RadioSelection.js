import React from 'react';
// import './RadioSelector.scss';

class RadioSelector extends React.Component {

  eventHandler = (e) => {
    e.preventDefault();
    const { changeStatus } = this.props;
    const newTitle = e.target.id;
    changeStatus(newTitle);
  }

  render () {
    const { title, status } = this.props;
    return (
      <div className="radio-wrapper">
        <p className="job-title">{title.title_Name}</p>
        <div className="radio-button" id={title.title_Name} onClick={this.eventHandler}>
          <div className="radio-base" id={title.title_Name}>
            <div className={`radio-dot ${status}`} id={title.title_Name}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default RadioSelector;