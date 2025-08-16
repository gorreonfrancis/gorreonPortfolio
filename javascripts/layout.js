fetch("nav_bar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav_bar").innerHTML = data;

    // Smooth scroll for in-page links
    document.querySelectorAll('#nav_bar a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

// Load other sections
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

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);

function toggleSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.classList.toggle("invisible");
}
