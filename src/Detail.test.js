import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';

describe('Detail component', () => {

  it('does not crash with no data or index', () => {
    render(<Detail />);
    
    /* and here, we don't crash! */
  });

  it('has correct AltText', () => {
    render(<Detail data={testSearchData3} index={1}/>);

    const img = screen.getByAltText(/Bigger Copy Of Selection On Left/i);
    expect(img).toBeInTheDocument();
  });

  it('has title from data and index', () => {
    render(<Detail data={testSearchData3} index={1}/>);
    
    const title = screen.getByText(/Photo 2/);
    expect(title).toBeInTheDocument();
  });

  it('has title from another data and index', () => {
    render(<Detail data={testSearchData3} index={0}/>);
    
    const title = screen.getByText(/Photo 1/);
    expect(title).toBeInTheDocument();
  });

});

const testSearchData3 = {
  "results": [
    {"title":"Photo 1","image_url":["./logo.svg"]},
    {"title":"Photo 2","image_url":[""]},
    {"title":"Photo 3","image_url":[""]},
  ]
};

