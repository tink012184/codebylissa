document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("footer");
  header.innerHTML = `      <div class="footer">
        <div class="info-bar">
          <span class="left">Dominick</span>
          <span class="center">All Entertainment Colorado</span>
          <a class="right" href="tel:7192330106"> 719.233.0106</a>
        </div>
      </div>`;
  document.body.append(header);
});
