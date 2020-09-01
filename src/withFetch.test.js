import React from 'react';
import { render } from '@testing-library/react';
import withFetch from './withFetch';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.prop = { data: null };
  }

  render() {
    return <div>{this.props.data}</div>;
  }
}

test('A "fetched" message is put in the wrapped component', async () => {
  const promisedData = new Promise((res,rej)=>{res("A message")});
  const X = withFetch(Test, promisedData);
  const { findByText } = render(<X />);
  const found = await findByText(/A message/);
  expect(found).toBeInTheDocument();
});
