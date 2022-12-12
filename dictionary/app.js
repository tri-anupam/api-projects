let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search')
let notFound = document.querySelector('.not_found')
let defBox = document.querySelector('.def')
let audioBox = document.querySelector('.audio')
let loading = document.querySelector('.loading')

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();

    //clear data
    audioBox.innerHTML = '';
    notFound.innerText = '';
    defBox.innerText = '';

    //Get input data
    let word = input.value;

    //call API get data
    if (word === '') {
        alert('word is required');
        return;
    }

    getData(word);
})


async function getData(word) {
    loading.style.display = 'block'
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    
    const data = await response.json();
    
    //if empty result
    if (!data.length) {
        loading.style.display = 'none'
        notFound.innerHTML = 'No result found';
        // defBox.style.display = 'none';
        return;
    }
    
    
    //Result found
    loading.style.display = 'none'
    let defination = data[0].meanings[0].definitions[0].definition;
    defBox.innerText = defination;
    //console.log(defination);
    // console.log(data);
    
    
    //sound
    const soundName = data[0].phonetics[0].audio;
    if (soundName) {
        renderSound(soundName);
    }
    // console.log(soundName);


}

function renderSound(soundName) {
    audioBox.innerHTML = ` <audio controls>
    <source src="${soundName}" type="audio/mpeg">
  </audio> `
}