document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.innerHTML = `
         <div class="header-container">
        <div class="header-logo">
          <a href="../allentertainmentcolorado/index.html">
            <img
              src="images/LogoNoBackground.png"
              alt="All Entertainment Colorado"
          /></a>
        </div>
        <nav class="header-nav">
          <a href="../allentertainmentcolorado/indexCE.html"
            >Children's Entertainment Colorado</a
          >
          <a href="../allentertainmentcolorado/indexBS.html">Best Sound Colorado</a>
          <a href="../allentertainmentcolorado/about.html">About All Entertainment Colorado</a>
        </nav>
      </div>
  `;
  document.body.prepend(header);
});
