const header = document.querySelector("section.profile-main-container div.resume");
const sectionCourses = document.querySelector("section div.courses-main-container");
const sectionJobs = document.querySelector("section div.jobs-main-container");
const sectionProyects = document.querySelector("section div.proyects-main-container");
// Linkedin Request
let requestURL = "./assets/data/linkedin.json";
let request = new XMLHttpRequest();
// let requestURL = 'https://cache1.phantombooster.com/pzuhC3LNq4M/tSNuGLMzwXoSw1gH5CsRwQ/result.json';
request.open("GET", requestURL, true);
request.responseType = "text";
request.send();
request.onload = function () {
  const linkedinText = request.response;
  const linkedin = JSON.parse(linkedinText);
  populateHeader(linkedin);
  showJobs(linkedin);
  showlicences(linkedin);
};

// request GitHub

let urlGithub = 'https://api.github.com/users/jcamilofarfan/repos';
let gitRequest = new XMLHttpRequest();
gitRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 403 || this.readyState == 4 && this.status == 404 ) {
    urlGithub = "./assets/data/github.json";
    let gitRequest = new XMLHttpRequest();
    gitRequest.open("GET", urlGithub, true);
    gitRequest.responseType = "text";
    gitRequest.send();
    gitRequest.onload = function () {
      const dataText = gitRequest.response;
      const data = JSON.parse(dataText);
      showRepositories(data);
    };
  }
};

gitRequest.open(
"GET",
urlGithub,
true
);
gitRequest.send();
gitRequest.onload = function () {
  const dataText = gitRequest.response;
  const data = JSON.parse(dataText);
  showRepositories(data);
};
function showRepositories(data){
  const sectionProyects = document.querySelector("section div.proyects-main-container");
  for (let i = 0; i < data.length; i++) {
    const myArticle = document.createElement("article");
    myArticle.className += "proyects-container";
    const myH4 = document.createElement("h4");
    const languajes = document.createElement("h4");
    const mylink = document.createElement("a");
    myH4.textContent = data[i].name;
    mylink.textContent = "Ver certificado";
    mylink.className += "blogs-button";
    mylink.href = data[i].html_url;
    mylink.target = "_blank";
    // languajes.textContent = "prueba"
    myArticle.appendChild(myH4);
    myArticle.appendChild(mylink);
    myArticle.appendChild(languajes);
    sectionProyects.appendChild(myArticle);
  }
};

function populateHeader(jsonObj) {
  const general = jsonObj[0]["general"];
  const myH1 = document.createElement("h2");
  myH1.textContent = "Hola, Mi nombre es " + general.fullName;
  header.appendChild(myH1);

  const myresume = document.createElement("p");
  myresume.textContent = general.description;
  header.appendChild(myresume);
}

function showlicences(jsonObj) {
  const licences = jsonObj[0]["licences"];
  for (let i = 0; i < licences.length; i++) {
    const myArticle = document.createElement("article");
    myArticle.className += "courses-container";
    const myH2 = document.createElement("h4");
    const mylink = document.createElement("a");
    myH2.textContent = licences[i].name;
    mylink.textContent = "Ver certificado";
    mylink.className += "blogs-button";
    mylink.href = licences[i].credentialUrl;
    mylink.target = "_blank";
    myArticle.appendChild(myH2);
    myArticle.appendChild(mylink);

    sectionCourses.appendChild(myArticle);
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
    sectionJobs.appendChild(myArticle);


  }
}

function showRepositories(data){
  const sectionProyects = document.querySelector("section div.proyects-main-container");
  for (let i = 0; i < data.length; i++) {
    const myArticle = document.createElement("article");
    myArticle.className += "proyects-container";
    const myH4 = document.createElement("h4");
    const salto = document.createElement("br");
    const fecha = document.createElement("em");
    const languajes = document.createElement("p");
    const mylink = document.createElement("a");
    myH4.textContent = data[i].name;
    fecha.textContent =  'Creado el :' + data[i].created_at.substring(0, 10);;
    mylink.textContent = "Ir al Repositorio";
    mylink.className += "blogs-button";
    mylink.href = data[i].html_url;
    mylink.target = "_blank";
    languajes.textContent = 'Lenguaje Principal :' + data[i].language;
    myArticle.appendChild(myH4);
    myArticle.appendChild(salto);
    myArticle.appendChild(mylink);
    myArticle.appendChild(languajes);
    myArticle.appendChild(fecha);
    sectionProyects.appendChild(myArticle);
  }
};