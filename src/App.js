import React     from 'react';
// import logo   from './logo.svg';
import                './App.css';
import Nav       from './Nav.js';
import Detail    from './Detail.js';
import withFetch from './withFetch.js';

class AppBase extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavImageClick= this.handleNavImageClick.bind( this );
    this.state = {NavIndex : null};
  }

  handleNavImageClick(index) {
    this.setState(state => ({
      NavIndex : index
    }));
  }

  render() {
    return (
      <div className="App">
        <Nav data={this.props.data ?? ""} onClick={this.handleNavImageClick}/>
        <Detail data={this.props.data ?? null} index={this.state.NavIndex}/>
      </div>
    );
  }
}

const QUERY = "https://www.loc.gov/photos/?fa=online-format:image%7Clanguage:english&fo=json"
const promise = fetch(QUERY).then(response => response.json());
var App = withFetch(AppBase, promise);


export { App as default, AppBase };
