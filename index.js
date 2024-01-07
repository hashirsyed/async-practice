const body = document.body;
const fetchPromise = fetch("https://api.github.com/users", {
  method: "GET",
  headers: {
    "Content-Type": "application.json",
  },
});
const loading = document.querySelector(".loader");
body.append(loading);

fetchPromise
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (parsedData) {
    console.log(parsedData);
    body.removeChild(loading);
    for(let obj of parsedData){
    
    var img = document.createElement("img");
    img.setAttribute("src",obj.avatar_url);
    img.classList.add("img");
    var card = document.createElement("div");
    card.classList.add("card");
    var h3 = document.createElement("h3");
    h3.innerHTML = obj.login;
    h3.classList.add("title");
    card.append(img);
    card.append(h3);
    body.append(card);
  }})
  .catch(function (err) {
    console.log(err);
  });
