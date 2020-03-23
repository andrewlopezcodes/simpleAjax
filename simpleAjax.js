const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";


const dogs = document.querySelector(".dogs");

function addNewDog(){
  const promise = fetch(BREEDS_URL);
  promise 
  .then(function(response){
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse){
    const img = document.createElement('img');
    img.src = processedResponse.message;
    img.alt = "cute dog";
    dogs.appendChild(img);
    console.log(processedResponse);
  });
};



  document.querySelector('.add-dog').addEventListener('click', addNewDog);

  console.log('this will log first');