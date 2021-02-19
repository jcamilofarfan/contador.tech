const header = document.querySelector("section.profile-main-container div.resume");
const section = document.querySelector("section div.proyects-main-container");
const sectionTwo = document.querySelector("section div.jobs-main-container");

let requestURL = "./linkedin.json";
let request = new XMLHttpRequest();
// let requestURL = 'https://cache1.phantombooster.com/pzuhC3LNq4M/Q2PwRzWTBaSOHZqrIAM4fA/result.json';

request.open("GET", requestURL);
request.responseType = "text";
request.send();

request.onload = function () {
  const linkedinText = request.response;
  const linkedin = JSON.parse(linkedinText);
  populateHeader(linkedin);
  showlicences(linkedin);
  showJobs(linkedin);
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

function showJobs(jsonObj){
  const jobs = jsonObj[0]["jobs"];
  for (let i = 0; i < jobs.length; i++) {
    const myArticle = document.createElement("article");
    myArticle.className += "jobs-container";
    const myH4 = document.createElement("h4");
    const fecha = document.createElement("em");
    const salto = document.createElement("br");
    const description = document.createElement("span");
    myH4.textContent = jobs[i].jobTitle + " en " + jobs[i].companyName;
    fecha.textContent = jobs[i].dateRange;
    description.textContent = jobs[i].description;
    myArticle.appendChild(myH4);
    myArticle.appendChild(fecha);
    myArticle.appendChild(salto);
    myArticle.appendChild(description);
    sectionTwo.appendChild(myArticle);


  }
}