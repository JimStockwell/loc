import React from 'react';

/**
 * This is inspired by
 * withSubscription as presented in
 * https://reactjs.org/docs/higher-order-components.html
 *
 * WrappedComponent - Component we are adding "fetching" to
 * source - object containing fetch
 * promisedData - a promise of fetched Json
 */

function withFetch(WrappedComponent,promisedData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
        promisedData.then(json => this.setState({ data: json }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

export default withFetch;
