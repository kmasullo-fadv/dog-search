'use strict';

function getDogImage(breed) {

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));

  
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if (responseJson.status!=='error'){
    $('.image').html(
      `<img src="${responseJson.message}" class="results-img">`
    );
    //display the results section
    $('.results').removeClass('hidden');
  } else {$('.image').html(
    '<h2>Breed not found, please try another</h2>'
  );}

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $('#breed').val();
    getDogImage(breed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});