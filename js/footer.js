const footerContent = `
	  <div class="pt-5 w-75 m-auto pb-5">
	    <div class="row w-100 mt-5">
	      <div class="col-lg-3 col-sm-12">
	        <img src="${assets_path}" class="d-inline-block align-top" alt="MapleHeap Logo">
	      </div>
	      <div class="col-lg-3 col-sm-12">
	        <b>Our Contact</b>
	        <ul class="list-unstyled mt-4 text-black-50">
	          <li>#60-180, 94 Ave, S.E, Calgary, AB T2J 3G8</li>
	          <li>Mon-Fri: 9am-5pm</li>
	          <li>
	            Email: <a class="text-decoration-none" href="mailto:support@mapleheaptech.com">support@mapleheaptech.com</a>
	          </li>
	        </ul>
	      </div>
	      <div class="col-lg-3 col-sm-12">
	        <b>About Us</b>
	        <p class="mt-4 text-black-50">
	          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies 
	        </p>
	      </div>
	      <div class="col-lg-3 col-sm-12">
	        <b>Subscribe</b>
	        <div class="d-flex mt-4 mb-3">
	          <input type="email" class="border-right-0 border-secondary form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
	          <button class="border border-left-0 border-secondary btn rounded-0"><i class="fa fa-arrow-right"></i></button>
	        </div>
	        <b>Follow Us</b><br>
	        <span><a href="https://www.facebook.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-facebook-square"></i></a></span>
	        <span><a href="https://twitter.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-twitter-square"></i></a></span>
	        <span><a href="https://www.instagram.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-instagram"></i></a></span>
	      </div>
	    </div>
	  </div>
`;
document.getElementById('_footer').innerHTML = footerContent;