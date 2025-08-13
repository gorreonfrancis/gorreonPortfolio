 fetch("nav_bar.html")
      .then(res => res.text())
      .then(data => document.getElementById("nav_bar").innerHTML = data);

fetch("home.html")
      .then(res => res.text())
      .then(data => document.getElementById("home").innerHTML = data);

 fetch("about.html")
      .then(res => res.text())
      .then(data => document.getElementById("about").innerHTML = data);

fetch("projects.html")
      .then(res => res.text())
      .then(data => document.getElementById("projects").innerHTML = data);

fetch("contact.html")
      .then(res => res.text())
      .then(data => document.getElementById("contact").innerHTML = data);

 function toggleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("invisible");
      }



