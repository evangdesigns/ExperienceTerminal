import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import HeadBoard from '../Components/Shared/DepartureBoard/HeadBoard/HeadBoard';
import DirectiveSign from '../Components/Shared/DirectiveSign/DirectiveSign';
import Bio from'../Components/Pages/Bio/Bio';
import GraphicDesign from '../Components/Pages/GraphicDesign/GraphicDesign';
import WebDesign from '../Components/Pages/WebDesign/WebDesign';
import Marketing from '../Components/Pages/Marketing/Marketing';
import UxUiDesign from '../Components/Pages/UxUiDesign/UxUiDesign';

import { getAllTitles, getTitleId } from '../helpers/data/titles';

import './App.scss';

class App extends React.PureComponent {

  state = {
    selectedTitle:'Graphic Designer',
    selectedTitleId: 3,
    titles: [],
  }

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


  getTitleId = (selectedTitle) => {
    getTitleId(selectedTitle)
    .then(titleId => this.setState({ selectedTitleId : titleId }))
  }

  titleChange = (newTitle) => {
    this.setState({selectedTitle : newTitle });
    this.getTitleId(newTitle);
  }

  componentDidMount() {
    getAllTitles()
      .then(titles => this.setState({ titles : titles }))
  }

  render () {
    const { titles, selectedTitle, selectedTitleId } = this.state;
    return (
      <div className="App">
        <Container>
          <Router>
            <HeadBoard titles={titles} selectedTitle={selectedTitle} titleChange={this.titleChange} routeWriter={this.routeWriter}/>
            <DirectiveSign titleId={selectedTitleId} selectedTitle={selectedTitle} routeWriter={this.routeWriter}/>
              <Switch>
                <Route path="/" exact render={(props) => (<Bio titleId={selectedTitleId}/>)}/>
                <Route path="/graphic-design" exact render={(props) => (<GraphicDesign titleId={selectedTitleId} />)}/>
                <Route path="/web-design" exact render={(props) => (<WebDesign titleId={selectedTitleId}/>)}/>
                <Route path="/marketing" exact render={(props) => (<Marketing titleId={selectedTitleId}/>)}/>
                <Route path="/ux-ui-design" exact render={(props) => (<UxUiDesign titleId={selectedTitleId}/>)}/>
              </Switch>
          </Router>
        </Container>
    </div>
    );
  }
}

export default App;
