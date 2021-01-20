import React from 'react';
import { ReactComponent as URLico} from '../../../images/icons/icon_website.svg';
import { ReactComponent as GITico} from '../../../images/icons/icon_GitHub.svg';
import './TitleIcon.scss';

class TitleIcon extends React.Component {
  state = {
    icon:{}
  }

  renderIcon = () => {
    const { icon } = this.state;
    if (icon === this ) {
      return
    }
  }

  componentDidMount() {
    const { icon } = this.props;
    this.setState({icon : icon})
  }

  render () {
    return this.renderIcon()
  }
}

export default TitleIcon;