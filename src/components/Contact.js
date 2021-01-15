import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import heartFill from './heart-fill.svg';

const Contact = () =>{
    return(
       <div className = "Contact">
           <h2 className = "text-center">CONTACT <span>US</span></h2>
           <div className = "container">
               <div className = "row">
                    <div className = "col-md-3">
                    	{/* Just for some spacing */}
                    </div>
		           	<div className = "col-md-3">
		           		<a href = "mailto: sample@gmail.com" target = "_blank">
                             <i class="fas fa-envelope fa-3x"></i>
		           		</a>
		                <h3 className = "text-center icon-text">EMAIL <span>US</span></h3>
		           	</div>
		           	<div className = "col-md-3">
		           		<a href = "tel:+91-90XXXXXXXX">
                            <i class="fas fa-mobile-alt fa-3x"></i>
		           		</a>
		           		<h3 className = "text-center icon-text">TALK TO <span>US</span></h3>
		           	</div>
		           	<div href = "col-md-3">
		           	    <a href = "https://www.facebook.com" target = "_blank">
		           	        <i class="fab fa-facebook-f fa-3x"></i>
		           	    </a>
		           		<h3 className = "text-center icon-text">FOLLOW <span>US</span></h3>
		           	</div>
	           </div><br/>

	           <p className = "designBy">Made with <svg xmlns="http://www.w3.org/2000/svg" style = { { color: 'red' } } width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> by Spectrum Web Team</p>
	        </div>
       </div>
    )
}

export default Contact;