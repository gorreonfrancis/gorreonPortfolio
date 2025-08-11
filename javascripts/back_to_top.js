let back_to_top_button = document.getElementById("back_to_top_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    back_to_top_button.classList.remove("invisible");
  } else {
     back_to_top_button.classList.add("invisible");
  }
}

// When the user clicks on the button, scroll to the top of the document
  function backToTopFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}