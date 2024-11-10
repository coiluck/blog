document.addEventListener("DOMContentLoaded", function() {
  const blogLinks = document.querySelectorAll("a.blog-link");
  blogLinks.forEach(link => link.setAttribute("target", "_blank"));
});
