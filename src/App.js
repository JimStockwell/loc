import React     from 'react';
// import logo   from './logo.svg';
import                './App.css';
import Nav       from './Nav.js';
import Detail    from './Detail.js';
import withFetch from './withFetch.js';

class AppBase extends React.Component {
  
  render() {
    return (
      <div className="App">
        {/* I plan to use CSS float to arrange Nav to the left */}
        <Nav data={this.props.data ?? ""}/>
        <Detail/>
      </div>
    );
  }
}

const QUERY = "https://www.loc.gov/photos/?fa=online-format:image%7Clanguage:english&fo=json"
const promise = fetch(QUERY).then(response => response.json());
var App = withFetch(AppBase, promise);


export { App as default, AppBase };
