document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
         <div class="header-container">
        <div class="header-logo">
          <a href="https://allentertainment.com">
            <img
              src="images/LogoNoBackground.png"
              alt="All Entertainment Colorado"
          /></a>
        </div>
        <nav class="header-nav">
          <a href="indexCF.html"
            >Children's Entertainment Colorado</a
          >
          <a href="indexBS.html">Best Sound Colorado</a>
          <a href="about.html">About All Entertainment Colorado</a>
        </nav>
      </div>
  `;
  document.body.prepend(header);
});
