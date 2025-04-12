document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="header-container">
      <div class="header-logo">
        <img src="images/CodeByLissaLogo.png" alt="Code by Lissa">
      </div>
      <nav class="header-nav">
        <a href="index.html"><i class="fas fa-home"></i> Home</a>
        <a href="projects.html"><i class="fas fa-code"></i> Projects</a>
        <a href="contact.html"><i class="fas fa-envelope"></i> Contact</a>
      </nav>
    </div>
  `;
  document.body.prepend(header);
});
