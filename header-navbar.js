// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    var navbarHtml = `
  <header id="header" class="d-flex align-items-center">
    <div class="felsopiros"></div>

    <div class="container d-flex align-items-center justify-content-between">

      <!-- Uncomment below if you prefer to use an image logo -->
      
      <img src="assets/img/washtag-header-logo-white.svg" alt="" class="logo img-fluid">
      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">OTTHON</a></li>
          <li><a class="nav-link scrollto" href="#rolunk">INFÓ</a></li>
          <li><a class="nav-link scrollto" href="#cta">PARTNERSÉG</a></li>
          <li><a class="nav-link scrollto " href="#pricing">KREDIT-CSOMAGOK</a></li>
          <li><a class="nav-link scrollto" href="#contact">KONTAKT</a></li>
        </ul>

        <i class="bi bi-list mobile-nav-toggle"></i>

        <div class="card-href">
        <a href="account-002.html">
          <button id="cards" class="btn btn-outline-light cards">
            <span class="card-text">KÁRTYA</span>
            <i class="bi bi-credit-card"></i>
          </button>
        <button id="card-mobile-icon" class="card-mobile-icon"><i class="bi bi-credit-card"></i></button>
      </a>

      </div>
        

      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

--


  <main id="main">

  `;

document.querySelectorAll("[data-navbar]").forEach(function(element) {
    element.innerHTML = navbarHtml;
});
});
