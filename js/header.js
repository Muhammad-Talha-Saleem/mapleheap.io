const dir = ['home', 'templates', 'blogs'];
let url = null;
let assets_path = 'assets/img/logo.png';
let temp_path = 'templates/about-us.html';
let index_path = './index.html';
dir.forEach(element => {
    if (location.pathname.includes(element)) {
        url = element;
        return;
    }
});
switch(url) {
  case 'templates':
    assets_path = '../assets/img/logo.png';
    temp_path = '../templates/about-us.html';
    index_path = '../index.html';
    break;
  case 'blogs':
    assets_path = '../../assets/img/logo.png';
    temp_path = '../../templates/about-us.html';
    index_path = '../../index.html';
    break;
  default:
    assets_path = 'assets/img/logo.png';
    temp_path = 'templates/about-us.html';
    index_path = './index.html';
}

const headerContent = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-lg-5 offset-lg-1 col-lg-10" style="z-index: 10;">
        <a class="navbar-brand" href="${index_path}">
            <img src="${assets_path}" class="d-inline-block align-top" alt="MapleHeap Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" title="Home" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" title="About Us" href="${temp_path}">About Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" title="action" href="#">Action</a>
                        <a class="dropdown-item" title="action" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" title="action" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" title="Blogs" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" title="Contact Us" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" title="Store" href="#">MapleHeap Store</a>
                </li>
            </ul>
        </div>
    </nav>
`;
document.getElementById('_header').innerHTML = headerContent;