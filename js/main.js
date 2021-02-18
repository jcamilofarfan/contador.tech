const header = document.querySelector("section.profile-main-container div.resume");
const section = document.querySelector("section div.proyects-main-container");

let requestURL = "./linkedin.json";
let request = new XMLHttpRequest();
// let requestURL = 'https://cache1.phantombooster.com/pzuhC3LNq4M/Q2PwRzWTBaSOHZqrIAM4fA/result.json';

request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  showlicences(superHeroes);
};

function populateHeader(jsonObj) {
  const general = jsonObj[0]["general"];
  const myH1 = document.createElement("h2");
  myH1.textContent = "Hola, mi nombre es " + general.fullName;
  header.appendChild(myH1);

  const myresume = document.createElement("p");
  myresume.textContent = general.description;
  header.appendChild(myresume);
}

function showlicences(jsonObj) {
  const licences = jsonObj[0]["licences"];
  for (let i = 0; i < licences.length; i++) {
    const myArticle = document.createElement("article");
    const numberlicences = i + 1;
    myArticle.className += "proyects-container";
    const myH2 = document.createElement("h4");
    const mylink = document.createElement("a");
    myH2.textContent = licences[i].name;
    mylink.textContent = "Ver certificado";
    mylink.className += "blogs-button";
    mylink.href = licences[i].credentialUrl;
    mylink.target = "_blank";
    myArticle.appendChild(myH2);
    myArticle.appendChild(mylink);

    section.appendChild(myArticle);
  }
}
