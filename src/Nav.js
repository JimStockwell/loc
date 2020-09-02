import React from 'react';
import './Nav.css';
import { gatherImages } from './utility.js'

/**
 * Displays photographs from LOC photo search query,
 * and allows a callback when one of them photos is clicked.
 *
 * data -  which is the json from LOC search query
 * onClick - call back for selection made
 */

class Nav extends React.Component {
  constructor( props ) {
    super( props );
    this.onClick = this.onClick.bind( this );
  }

  onClick(index) {
    if ( this.props.onClick ) this.props.onClick(index);
  }

  render() {
    if ( !this.props.data ) {
      return ( <div className="Nav">Loading...</div> )
    };
    const images = gatherImages(this.props.data.results, this.onClick);
    return (
      <div className="Nav">
        Select An Image
        <div>
          {images}
        </div>
      </div>
    );
  }
}
export default Nav;
