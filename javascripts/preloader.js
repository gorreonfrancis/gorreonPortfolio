  window.addEventListener("load", () => {
    setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    AOS.refresh(); 
  }, 3000);
});