import React from 'react';
import RadioSelector from '../../RadioSelector/RadioSelector';
import './TitleSelector.scss';

class TitleSelector extends React.Component {

  routeWriter = (title) => {
    if (title  === 'Graphic Designer') {
      return ('/graphic-design')
    } else if (title  === 'Web Developer') {
      return ('/web-design')
    } else if (title  === 'Marketeer') {
      return ('/marketing')
    }  else if (title  === 'UX UI Designer') {
      return ('/ux-ui-design')
    }  else if (title  === 'Jack of All Trades') {
      return ('/')
    }
  }

  render () {
    const { selectedTitle, titles, titleChange } = this.props;
    const flowPercent = () => {
      if (selectedTitle === 'Jack of All Trades') {
        return '10%'
      } else if (selectedTitle === 'Graphic Designer') {
        return '30%'
      } else if (selectedTitle === 'Web Developer') {
        return '50%'
      } else if (selectedTitle === 'Marketeer') {
        return '70%'
      } else if (selectedTitle === 'UX UI Designer') {
        return '90%'
      }
    }

    return (
      <div className="TitleSelector">
        <div className="behind-block">
          <div className="flow-line" style={{width: flowPercent()}}></div>
          <div className="radio-container d-flex justify-content-around">
          {titles.map(title => {
          if (selectedTitle !== title.title_Name)
            return <RadioSelector key={title.title_Id} id={title.title_Name} title={title} titleChange={titleChange} routeWriter={this.routeWriter} status='unselected' />
            return <RadioSelector key={title.title_Id} id={title.title_Name} title={title} titleChange={titleChange} routeWriter={this.routeWriter} status='selected' />
            }
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleSelector;