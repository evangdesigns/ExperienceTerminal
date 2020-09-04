import React from 'react';
import RadioSelector from '../../../RadioSelection/RadioSelection';
import './TitleSelector.scss';

class TitleSelector extends React.Component {
  state = {
    selected: 'Jack of All Trades',
  }

  changeStatus = (newTitle) => {
    const { titleChange } = this.props;
    if (newTitle !== '') {
      this.setState({selected : newTitle})
      titleChange(newTitle);
    }
  }

  componentDidMount() {
    const { selectedTitle } = this.props;
    this.setState({selected: selectedTitle})
  }

  render () {
    const { selected } = this.state;
    const { titles } = this.props;
    const flowPercent = () => {
      if (selected === 'Jack of All Trades') {
        return '0%'
      } else if (selected === 'Graphic Designer') {
        return '25%'
      } else if (selected === 'Web Developer') {
        return '50%'
      } else if (selected === 'Marketeer') {
        return '74%'
      } else if (selected === 'UX UI Designer') {
        return '98%'
      }
    }
    return (
      <div className="TitleSelector">
        <div className="behind-block">
          <div className="flow-line" style={{width: flowPercent()}}></div>

          <div className="radio-container d-flex justify-content-between">
          {titles.map(title => {
          if (selected !== title.title_Name)
            return <RadioSelector key={title.title_Id} id={title.title_Name} title={title} changeStatus={this.changeStatus} status='unselected' />
            return <RadioSelector key={title.title_Id} id={title.title_Name} title={title} changeStatus={this.changeStatus} status='selected' />
            }
          )}
          </div>

        </div>
      </div>
    );
  }
}

export default TitleSelector;