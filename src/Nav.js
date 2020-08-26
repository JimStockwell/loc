import React from 'react';
import './Nav.css';

class Nav extends React.Component {

  render() {
    const dataItems = [];
    let i = 0;
    for (const index in this.props.data.results) {
      dataItems.push(<img
        key={i++}
        alt={this.props.data.results[index].title}
        src={this.props.data.results[index].image_url[0]}/>);
    }
    return (
      <div className="Nav">
        Select An Image
        {dataItems}
      </div>
    );
  }
}


export default Nav;
