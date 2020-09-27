import React from 'react';
import './Detail.css';
import { title, bigImage } from './utility.js';

/**
 * props:
 *   data - results section of response from LOC.
 *   index - index into "data" for the detail of interest.
 */
class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      sizeMsg: ""
    };
  }

  handleOnLoad(e) {
  
    /* "e.persist()" prevents the event from being remove the synthetic event
     * from the pool and allow references to the event to be retained by our code
     */
    e.persist();

    this.setState(state => ({
      loaded: true,
      sizeMsg: "Load-time Size = " + e.target.height + " high X " + e.target.width + " wide",
    }));
  }

  render() {
    if (this.props.index == null) {
      return (
        <div className="Detail">
          <p><b>Select An Image From The Panel On The Left</b><br/>
          They are the first 25 images from a Library of Congress API based image search</p>
        </div>
      )
    }
    return (
      <section className="Detail">
        <h1>{title(this.props.data,this.props.index)}</h1>
        <img className="BigImage"
             alt="Bigger Copy Of Selection On Left"
             src={bigImage(this.props.data,this.props.index)}
             onLoad={this.handleOnLoad.bind(this)}
             />
        <p className="sizeMsg">{this.state.sizeMsg}</p>
      </section>
    );
  }
}

export default Detail;
