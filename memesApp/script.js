let meme = document.getElementById("meme")
let title = document.getElementById("title")
let getMemeBtn = document.getElementById("get-meme-btn")
//API URL
let url = "https://meme-api.com/gimme/"
//Array of subreddits of your choice
let subreddits = ["catmemes","dogmemes","wholesomemes","me_irl"]


//fucntion to get random meme
let getMeme = ()=>{
    let randomSubreddit = subreddits[Math.floor(Math.random()*subreddits.length)]
    console.log(randomSubreddit);
    //fetch data from api
    fetch(url+randomSubreddit)
    .then(resp => resp.json())
    .then(data =>{
        // console.log(data);
        // let memeImg = new Image();
        // //Display meme image and title only after the image loads
        // memeImg.onload = () =>{
        //     meme.src = data.url
        // }
        // memeImg.src = data.url;
        // console.log(data.url);
        meme.innerHTML = `<img src="${data.url}" alt="meme not found">`
        title.innerText = `${data.title}`
        
    })

}

//call the getMeme() on button click
getMemeBtn.addEventListener('click',getMeme)
window.addEventListener("load",getMeme);