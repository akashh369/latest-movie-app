const api_key='5e33702bec44fe3e1605fba949edb2aa';
const img_url='https://image.tmdb.org/t/p/w500/';
let search_key='http://api.themoviedb.org/3/search/movie?api_key=5e33702bec44fe3e1605fba949edb2aa'//&&query=bat

let base_link='http://api.themoviedb.org/3/movie'

var mainu=document.getElementById("main");
var search=document.getElementById("realsearch");
var searchtxt=document.getElementById("search");
var home=document.getElementById("home");

const alt="https://thumbs.dreamstime.com/b/sweet-popcorn-english-text-movie-time-decorative-illustration-food-133551420.jpg";
function display(ele){
    mainu.innerHTML=``;
    ele.forEach( function(e) {
        const{poster_path,title,overview,vote_average}=e;
        var link=img_url+poster_path;
        var a=document.createElement("div");
        a.classList.add('movie');
        a.innerHTML=`
        <img src=${link} onerror=this.src="alt.jpg">
            <div class="movieinfo">
                <h3>${title}</h3>
                <span class="green">${vote_average}</span>
            </div>
            <div class="overview">
                <h2>overview</h2>
                ${overview}
            </div>
        `
        mainu.appendChild(a);
    });
}

realsearch.addEventListener("click",function(){
    var a=searchtxt.value;
    searchtxt.value="";
    if(a=="")
    {
        popularMovies()
    }
    else{
    var searchlink="https://api.themoviedb.org/3/search/movie?api_key=5e33702bec44fe3e1605fba949edb2aa&query="+a;
    console.log(searchlink);
    async function searchdata(){
        const response2=await fetch(searchlink);
        const result2=await response2.json();
        display(result2.results);
    }
    searchdata();
}
})


home.addEventListener("click", e =>{
    popularMovies();
})

async function popularMovies(){
    const link=base_link+"/popular?api_key="+api_key;
    const response=await fetch(link);
    const result=await response.json();
    display(result.results);  
}
popularMovies();
