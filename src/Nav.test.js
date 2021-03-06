import React              from 'react';
import { render, screen } from '@testing-library/react';
import userEvent          from '@testing-library/user-event'
import Nav                from './Nav';

describe('Nav component', () => {

  test('Gets image Alt names from results.titles', () => {
    const { getByAltText } = render(<Nav data={testSearchData3} />);
    const img = getByAltText(/Photo 1/);
    expect(img).toBeInTheDocument();
  });

  test('Gets image source from results.image_url', () => {
    const { getByAltText } = render(<Nav data={testSearchData3} />);
    const img = getByAltText(/Photo 1/);
    expect(img).toHaveAttribute('src','./logo.svg');
  });

  test('Has correct class for styling', () => {
    const { getByAltText } = render(<Nav data={testSearchData3} />);
    const img = getByAltText(/Photo 1/);
    expect(img).toHaveClass('NavImage');
  });

  test('The correct number of images get included', () => {
    const { getByAltText } = render(<Nav data={testSearchData3} />);
    expect(getByAltText(/Photo 1/)).toBeInTheDocument();
    expect(getByAltText(/Photo 2/)).toBeInTheDocument();
    expect(getByAltText(/Photo 3/)).toBeInTheDocument();
  });

  test('Selecting photo 1 calls back', done => {
    render(<Nav data={testSearchData3} onClick={callback}/>);

    userEvent.click(screen.getByAltText('Photo 1'));

    function callback(index) {
      expect(index).toBe(0);
      done();
    }
  });

  test('Selecting photo 2 calls back', done => {
    render(<Nav data={testSearchData3} onClick={callback}/>);

    userEvent.click(screen.getByAltText('Photo 2'));

    function callback(index) {
      expect(index).toBe(1);
      done();
    }
  });
});

const testSearchData3 = {
  "results": [
    {"title":"Photo 1","image_url":["./logo.svg"]},
    {"title":"Photo 2","image_url":[""]},
    {"title":"Photo 3","image_url":[""]},
  ]
};

