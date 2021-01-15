import React from 'react';
import { Link } from 'react-router-dom';

class RadioSelector extends React.Component {

  eventHandler = (e) => {
    e.preventDefault();
    const { titleChange } = this.props;
    const newTitle = e.target.id;
    titleChange(newTitle);
  }

  render () {
    const { title, status, routeWriter} = this.props;
    const route = routeWriter(title.title_name)
    return (
      <div className="radio-wrapper">
        <p className="job-title">{title.title_name}</p>
        <div className="radio-button" id={title.title_name} onClick={this.eventHandler}>
        <Link to={route}>
          <div className="radio-base" id={title.title_name}>
            <div className={`radio-dot ${status}`} id={title.title_name}></div>
          </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default RadioSelector;