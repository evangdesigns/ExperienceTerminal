import React from 'react';
import DepartureBoard from '../../Shared/DepartureBoard/DepartureBoard';
import { getTitleId } from '../../../helpers/data/titles';
import { getAllSkills, getSkillsByTitle } from '../../../helpers/data/skills';
import RadioSelector from '../../Shared/HeadBoard/TitleSelector/RadioSelection/RadioSelection';

class TitlePage extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    const { titleId } = this.state;
    this.getSkills(titleId);
  }

  componentWillReceiveProps(nextProps) {
    const { selectedTitle } = this.props;
    if (nextProps.selectedTitle !== selectedTitle ) {
      this.getTitleId(nextProps.selectedTitle)
      }
    }

  getTitleId = (selectedTitle) => {
    getTitleId(selectedTitle)
    .then(titleId => this.getSkills(titleId))
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
    const { selectedTitle } = this.props;
    return (
      <div className="TitlePage">

          <div className="row head-board">
            <div className="col-1 align-middle justify-content-center">
              <RadioSelector status="selected" title={""} />
            </div>
            <div className="col-10">
              <DepartureBoard letterCount={18} messages={["Skills"]} />
            </div>
            <div className="col-1">

            </div>
          </div>
          <div>
            <h1 className="text-center">{`${selectedTitle} Projects Component Go Here`}</h1>
          </div>
      </div>
    );
  }
}

export default TitlePage;