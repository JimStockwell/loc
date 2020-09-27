import React              from 'react';
import { render, screen } from '@testing-library/react';
import { AppBase }        from './App';
import withFetch          from './withFetch';
import userEvent          from '@testing-library/user-event'

describe('Detail component', () => {

  test('Correctly plumbs in the navigation pane', async () => {

    const App = withFetch(AppBase, Promise.resolve(testSearchData3));

    render(<App />);
    await screen.findByAltText('Photo 1');

    expect(screen.getByAltText('Photo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 2')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 3')).toBeInTheDocument();

  });

  it('pulls in the Detail component', async () => {
    const promisedData = new Promise((res,rej)=>{res(testSearchData3)});
    const App = withFetch(AppBase, promisedData);

    render(<App />);

    const img = await screen.findByText(/From The Panel/);
    expect(img).toBeInTheDocument();
  });

  it('Detail is plumbed in correctly', async () => {
    const promisedData = Promise.resolve(testSearchData3);
    //const promisedData = new Promise((res,rej)=>{res(testSearchData3)});
    const App = withFetch(AppBase, promisedData);

    // Click and wait for the title to show up
    render(<App />);
    await screen.findByAltText('Photo 1');
    userEvent.click(screen.getByAltText('Photo 1'))
    await screen.findByText('Photo 1');

    expect(screen.getByText('Photo 1')).toBeInTheDocument();
    expect(screen.queryByText('Photo 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Photo 3')).not.toBeInTheDocument();
  });

});

const testSearchData3 = {
  results: [
    {title:"Photo 1",image_url:["./logo.svg"]},
    {title:"Photo 2",image_url:["x.jpg"]},
    {title:"Photo 3",image_url:["y.jpg"]},
  ]
};

