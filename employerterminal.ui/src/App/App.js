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
import Modal from '../Components/Shared/Modal/Modal';

import { getAllTitles, getTitleId } from '../helpers/data/titles';

import './App.scss';

class App extends React.PureComponent {

  state = {
    selectedTitle:'Jack of All Trades',
    selectedTitleId: 1,
    titles: [],
    modalShow: false,
    modalData: null
  }

  toggleModal = () => {
    const { modalShow } = this.state;
    if (modalShow === true) {
      this.setState({modalShow: false})
    } else if (modalShow === false) {
      this.setState({modalShow: true})
    }
  }

  popModal = (data) => {
    if (data) {
      this.setState({modalData: data})
      this.setState({modalShow: true})
    } else {
      return null
    }
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

  routeChecker = () => {
    const url = window.location.pathname;
    const title = this.state.selectedTitle;
    var dict = {
      "/graphic-design" : "Graphic Designer",
      "/web-design" : "Web Developer",
      "/marketing" : "Marketeer",
      "/ux-ui-design" : "UX UI Designer",
      "/" : "Jack of All Trades"
   };
    let output = Object.keys(dict).filter(key => key === url);
    if (title !== dict[output]) {
      this.titleChange(dict[output]);
    }
  }

  componentDidMount() {
    getAllTitles()
      .then(titles => this.setState({ titles : titles }));
    this.routeChecker()
  }

  componentDidUpdate() {
    this.routeChecker()
  }

  componentWillUnmount() {
    this.routeChecker()
  }

  render () {
    const { titles, selectedTitle, selectedTitleId, modalShow, modalData } = this.state;
    const buildModal = () => {
      if (modalData && modalShow) {
        return ( <Modal projectId={modalData} toggleModal={this.toggleModal} />)
      }
    }
    return (
      <div className="App">
        <Container>
          <Router>
          {buildModal()}
            <HeadBoard titles={titles} selectedTitle={selectedTitle} titleChange={this.titleChange} routeWriter={this.routeWriter}/>
            <DirectiveSign titleId={selectedTitleId} selectedTitle={selectedTitle} titleChange={this.titleChange} routeWriter={this.routeWriter}/>
              <Switch>
                <Route path="/" exact render={props => <Bio titleId={selectedTitleId}/>}/>
                <Route path="/graphic-design" exact render={props => <GraphicDesign titleId={selectedTitleId} popModal={this.popModal} toggleModal={this.toggleModal} />} />
                <Route path="/web-design" exact render={props => <WebDesign titleId={selectedTitleId}/>}/>
                <Route path="/marketing" exact render={props => <Marketing titleId={selectedTitleId}/>}/>
                <Route path="/ux-ui-design" exact render={props => <UxUiDesign titleId={selectedTitleId}/>}/>
              </Switch>
          </Router>
        </Container>
    </div>
    );
  }
}

export default App;
