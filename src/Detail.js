import React from 'react';
import './Detail.css';
import { title } from './utility.js';

/**
 * props:
 *   data - results section of response from LOC.
 *   index - index into "data" for the detail of interest.
 */
class Detail extends React.Component {

  render() {
    return (
      <section>
        <h1>{title(this.props.data,this.props.index)}</h1>
        <img alt="Big Image"/>
      </section>
    );
  }
}

export default Detail;
