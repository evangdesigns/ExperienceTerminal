import React from 'react';
import Container from 'react-bootstrap/Container';
import HeadBoard from '../Components/Shared/DepartureBoard/HeadBoard/HeadBoard';
import TitlePage from '../Components/Pages/TitlePage/TitlePage';

import { getAllTitles, getTitleId } from '../helpers/data/titles';

import './App.scss';

class App extends React.PureComponent {

  state = {
    selectedTitle:'Jack of All Trades',
    selectedTitleId: 1,
    titles: [],
  }

  componentDidMount() {
    getAllTitles()
    .then(titles => this.setState({ titles : titles }))
  }

  getTitleId = (selectedTitle) => {
    getTitleId(selectedTitle)
    .then(titleId => this.setState({ selectedTitleId : titleId }))
  }

  titleChange = (newTitle) => {
    this.setState({selectedTitle : newTitle });
    this.getTitleId(newTitle);
  }

  render () {
    const { titles, selectedTitle, selectedTitleId } = this.state;
    return (
      <div className="App">
        <Container>
          <HeadBoard titles={titles} selectedTitle={selectedTitle} titleChange={this.titleChange} />
          <TitlePage selectedTitle={selectedTitle} titleId={selectedTitleId}/>
        </Container>
    </div>
    );
  }
}

export default App;
