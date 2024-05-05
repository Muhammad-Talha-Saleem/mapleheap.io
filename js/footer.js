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
	        <b>Social Us</b>
	        <ul class="list-unstyled mt-4 text-black-50">
	          <li>
	          	<a href="https://www.facebook.com/" title="Facebook Page" class="align-items-center d-flex text-dark text-decoration-none">
	          		<i class="fa-brands fa-facebook-square pr-2 fa-2x"></i> Facebook Page
	          	</a>
	          </li>
	          <li>
	          	<a href="https://twitter.com/" title="Twitter" class="align-items-center d-flex text-dark text-decoration-none">
	          		<i class="fa-brands fa-twitter-square pr-2 fa-2x"></i> Twitter
	          	</a>
	          </li>
	          <li>
	            <a href="https://www.instagram.com/" title="Instagram Page" class="align-items-center d-flex text-dark text-decoration-none">
	            	<i class="fa-brands fa-instagram pr-2 fa-2x"></i> Instagram Page
	            </a>
	          </li>
	        </ul>
	      </div>
	      <div class="col-lg-3 col-sm-12">
	        <b>Subscribe</b>
	        <div class="d-flex mt-4 mb-3">
	          <input type="email" class="border-right-0 border-secondary form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
	          <button class="border border-left-0 border-secondary btn rounded-0"><i class="fa fa-arrow-right"></i></button>
	        </div>
	        <!-- <b>Follow Us</b><br>
	        <span><a href="https://www.facebook.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-facebook-square"></i></a></span>
	        <span><a href="https://twitter.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-twitter-square"></i></a></span>
	        <span><a href="https://www.instagram.com/" title="facebook" class="text-decoration-none text-dark"><i class="fa-brands fa-instagram"></i></a></span> -->
	      </div>
	    </div>
	  </div>
	  <p class="m-0 p-0 text-center">Copyright © 2024 MapleHeap Technologies Inc. All rights reserved.</p>
`;
document.getElementById('_footer').innerHTML = footerContent;