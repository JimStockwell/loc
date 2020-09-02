import React from 'react';

/**
 * Extracts the title of a work from the LOC data,
 * given the search results
 * and the index of interest within the results.
 */
function title ( data, index ) {
  if( typeof index === 'undefined' ) return "";
  if( index === null ) return "";
  if( !data ) return "";
  return data.results[index].title;
}

/**
 * Extracts the title of a work from the LOC data,
 * given the search results
 * and the index of interest within the results.
 */
function bigImage ( data, index ) {
  if( typeof index === 'undefined' ) return "";
  if( index === null ) return "";
  if( !data ) return "";
  const urlArray = data.results[index].image_url;
  return urlArray[urlArray.length-1];
}

/**
 * Given an array of objects with the following structure:
 * { title : "name of photo", image_url : ["url"] },
 * returns an array of images for including in the DOM.
 *
 * results - the "results" field of LOC's query response.
 * onclick - function to call and pass the image index to when clicked
 *
 */
function gatherImages(results,onClick) {
    const dataItems = [];
    for (let index=0; index<results.length; index++) {
      const img = <img
        key={results[index].title + index}
        className="NavImage"
        alt={results[index].title}
        onClick={onClick ? () => onClick(index) : null}
        src={results[index].image_url[0]}/>;
      dataItems.push(img);
    }
//    console.log(dataItems);
    return dataItems;
}

export { title, gatherImages, bigImage };
