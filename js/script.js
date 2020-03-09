/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array containing multiple quote objects.
***/

let quotes = [
  {
    quote: 'Monsters are real, Ghosts are too. They live inside of us and sometimes they win.',
    source: 'Stephen King',
    citation: 'The Shining',
    year: '1977'
  }, 
  {
    quote: 'People who try hard to do the right thing always seem mad.',
    source: 'Stephen King',
    citation: 'The Stand',
    year: '1978'
  },
  {
    quote: 'Time takes it all. Whether you want it to or not',
    source: 'Stephen King',
    citation: 'The Green Mile',
    year: '1997',
    collection: 'Originally serialised as 6 volumes in 1996' // Additional property for extra credit catergory
  },
  {
    quote: 'We lie best when we lie to ourselves',
    source: 'Stephen King',
    citation: 'It',
    year: '1986'
  },
  {
    quote: "There's no harm in hoping for the best as long as you're prepared for the worst.",
    source: 'Stephen King',
    citation: 'Rita Hayworth and Shawshank Redemption',
    year: '1982',
    collection: 'From the collected novel Different Seasons (1982)' // Additional property for extra credit catergory
  },
  {
    quote: "If you don't control your temper, your temper will control you",
    source: 'Stephen King',
    citation: 'Under The Dome',
    year: '2009'
  },
  {
    quote: 'The scariest moment is always just before you start.',
    source: 'Stephen King',
    citation: 'On Writing: A Memoir of the Craft',
    year: '2000'
  },
  {
    quote: 'We all float down here!',
    source: 'Pennywise the Clown',
    citation: 'IT',
    year: '1986'
  },
  {
    quote: 'Some things it dont pay to be curious about.',
    source: 'Stephen King',
    citation: 'Pet Sematary',
    year: '1983'
  },
  {
    quote: "A person who doesn't learn from the past is an idiot in my estimation",
    source: 'Stephen King',
    citation: '11/22/63',
    year: '2011'
  },
  {
    quote: "If a fear cannot be articulated, it can't be conquered",
    source: 'Stephen King',
    citation: 'Salems Lot',
    year: '1975'
  }
];

let intervId; //id generated for interval function.

/***
 * `getRandomQuote` function 
 *  Obtains a number between 0 and quotes.length
 *  and then returns a random quote object
***/

function getRandomQuote() {
  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];   
}

/***
 * Random colour functions
 * Generates a random colour by using random numbers.
 */

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColour() {
  let color = `rgb(`;
  color += `${randomRGB()},`;
  color += `${randomRGB()},`;
  color += `${randomRGB()})`;
  return color;
}

/***
 * Function to change the background colour of the page to
 * a randomly selected colour.
*/

function setBodyColour() {
  let setColour = randomColour();
  document.body.style.background = setColour; 
}

/**
 * Functions that create a timer that continually
 * call a function until stopTimer is called
 */

function newTimer(aFunction) {
  intervId = setInterval(aFunction, 10000);
}

function stopTimer() {
  clearInterval(intervId);
}

// Function call to initialise page with timed change

newTimer(printQuote);

/***
 * `printQuote` function
 * Prints a randomly selected quote to page
 * Changes page background to a random colour
 * Re initialises timer on click so timer restarts.
 * Adds properties where available.
***/

function printQuote() {
  stopTimer();
  newTimer(printQuote);
  setBodyColour();
  
  let quoteSelected = getRandomQuote();
  
  let message = `<p class="quote">${quoteSelected.quote}</p>`;
      message += `<p class="source">${quoteSelected.source}`;
      
      if (quoteSelected.hasOwnProperty('citation')) {
        message += `<span class="citation">${quoteSelected.citation}</span>`;
      }

      if (quoteSelected.hasOwnProperty('year')) {
        message += `<span class="year">${quoteSelected.year}</span>`;
      }

      if (quoteSelected.hasOwnProperty('collection')) {
        message += `<span class="year">${quoteSelected.collection}</span>`;
      }
      
      message += `</p>`;
      
      return document.getElementById('quote-box').innerHTML = message;
  }

  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);