import React              from 'react';
import { render, screen } from '@testing-library/react';
import { AppBase }        from './App';
import withFetch          from './withFetch';
import userEvent          from '@testing-library/user-event'

describe('Detail component', () => {

  test('Includes the navigation pane', async () => {

    const App = withFetch(AppBase, Promise.resolve(testSearchData3));

    const { getByText } = render(<App />);
    await screen.findByText('Select An Image');

    const navHeading = getByText('Select An Image');
    expect(navHeading).toBeInTheDocument();

  });

  test('Correctly plumbs in the navigation pane', async () => {

    const App = withFetch(AppBase, Promise.resolve(testSearchData3));

    render(<App />);
    await screen.findByText('Select An Image');

    expect(screen.getByAltText('Photo 1')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 2')).toBeInTheDocument();
    expect(screen.getByAltText('Photo 3')).toBeInTheDocument();

  });

  it('pulls in the Detail component', () => {
    const promisedData = new Promise((res,rej)=>{res(testSearchData3)});
    const App = withFetch(AppBase, promisedData);

    render(<App />);

    const img = screen.getByAltText(/Big Image/);
    expect(img).toBeInTheDocument();
  });

/* TODO: Get this going.
 * But first, make a test for "Nav" where it reacts to a click.
 *
  it('Detail is plumbed in correctly', async () => {
    const promisedData = Promise.resolve(testSearchData3);
    //const promisedData = new Promise((res,rej)=>{res(testSearchData3)});
    const App = withFetch(AppBase, promisedData);

    // Click and wait for the title to show up
    render(<App />);
    await screen.findByText('Select An Image');
    userEvent.click(screen.getByAltText('Photo 1'))
    await screen.findByText('Photo 1');

    expect(screen.getByText('Photo 1')).toBeInTheDocument();
    expect(screen.getByText('Photo 2')).not.toBeInTheDocument();
    expect(screen.getByText('Photo 3')).not.toBeInTheDocument();
  });
 *
 */

});

const testSearchData3 = {
  results: [
    {title:"Photo 1",image_url:["./logo.svg"]},
    {title:"Photo 2",image_url:["x.jpg"]},
    {title:"Photo 3",image_url:["y.jpg"]},
  ]
};

