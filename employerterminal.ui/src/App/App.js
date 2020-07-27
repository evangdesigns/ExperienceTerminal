import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from 'react-router-dom';

import HeadBoard from '../Components/Shared/HeadBoard/HeadBoard';
import TitlePage from '../Components/Pages/TitlePage/TitlePage';

import { getAllTitles } from '../helpers/data/titles';

import './App.scss';

class App extends React.PureComponent {

  state = {
    selectedTitle:'Jack of All Trades',
    titles: [],
  }

  componentDidMount() {
    getAllTitles()
    .then(titles => this.setState({ titles : titles }))
  }

  titleChange = (newTitle) => {
    this.setState({selectedTitle : newTitle });
  }

  render () {
    const { titles, selectedTitle } = this.state;
    return (
      <div className="App">
        <div className="enchelada">
        <HeadBoard titles={titles} selectedTitle={selectedTitle} titleChange={this.titleChange} />
        <TitlePage selectedTitle={selectedTitle} />
      </div>
    </div>
    );
  }
}

export default App;
