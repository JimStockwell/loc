import React from 'react';
import './Detail.css';
import { title, bigImage } from './utility.js';

/**
 * props:
 *   data - results section of response from LOC.
 *   index - index into "data" for the detail of interest.
 */
class Detail extends React.Component {

  render() {
    return (
      <section className="Detail">
        <h1>{title(this.props.data,this.props.index)}</h1>
        <img className="BigImage"
             alt="Big Image"
             src={bigImage(this.props.data,this.props.index)}/>
      </section>
    );
  }
}

export default Detail;
