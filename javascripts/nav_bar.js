 fetch("nav_bar.html")
      .then(res => res.text())
      .then(data => document.getElementById("nav_bar").innerHTML = data);
 
 function toggleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("invisible");
      }