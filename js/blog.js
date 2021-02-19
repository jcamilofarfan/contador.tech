// https://jcamilofarfan.blogspot.com/feeds/posts/default?alt=rss
let xmlhttpUrl = "./blog.xml";
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", xmlhttpUrl);
xmlhttp.send();

xmlhttp.onload = function () {
  xmlDoc = xmlhttp.responseXML;
  getRssLastest("lastest");
  getRSS("blog");
};

function getRSS(param) {

  var strBuffer = "";
  strBuffer = strBuffer + "<h3>Ultimos Post</h3>";
  var x = xmlDoc.getElementsByTagName("item");

  for (i = 0; i < x.length; i++) {
    if (i == 12) {
      break;
    }
    title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    link = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
    desc = x[i]
      .getElementsByTagName("atom:summary")[0]
      .childNodes[0].nodeValue.substring(0, 100);
    strBuffer = strBuffer + '<article class="post-container">';
    strBuffer = strBuffer + "<p>" + title + "</p>";
    strBuffer = strBuffer + "<p>" + desc + "..." + "</p>";
    strBuffer =
      strBuffer +
      '<a target="_blank" href="' +
      link +
      '" class="blogs-button">Leer mas!!</a>';
    strBuffer = strBuffer + "</article>";
    if (i == 12) {
      break;
    }
  }
  document.getElementById(param).innerHTML = strBuffer;
}
function getRssLastest(param) {
  var strBuffer = "";
  var x = xmlDoc.getElementsByTagName("item");

  for (i = 0; i < x.length; i++) {
    if (i === 1) {
      break;
    }
    title = x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    link = x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
    desc = x[i]
      .getElementsByTagName("atom:summary")[0]
      .childNodes[0].nodeValue;
    strBuffer = strBuffer + "<h2>" + title + "</h2>";
    strBuffer = strBuffer + "<p>" + desc + "..." + "</p>";
    strBuffer =
      strBuffer +
      '<a target="_blank" href="' +
      link +
      '" class="blogs-button">Leer mas!!</a>';
  }
  document.getElementById(param).innerHTML = strBuffer;
}
