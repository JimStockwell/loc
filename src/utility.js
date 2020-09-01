import React from 'react';

/**
 * Extracts the title of a work from the LOC data,
 * given the search results
 * and the index of interest within the results.
 */
function title ( data, index ) {
  /* index can validly be zero, so can't just treat it as boolean */
  return (data && (typeof index !== 'undefined')) ?
    data.results[index].title : "";
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
//    console.log(results);
    const dataItems = [];
    for (const index in results) {
      const img = <img
        key={results[index].title + index}
        className="Nav-image"
        alt={results[index].title}
        onClick={onClick ? () => onClick(index) : null}
        src={results[index].image_url[0]}/>;
      dataItems.push(img);
    }
//    console.log(dataItems);
    return dataItems;
}

export { title, gatherImages };
