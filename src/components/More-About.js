import './More-About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import founder1 from './LATE MR. VISWA RANJAN PATI.png';
import founder2 from './MR. NITIN SHASHI AGARWAL.png';

const MoreAbout = () => {
	return(
		<div className = "MoreAbout">

			<h2 className = "text-center">MEET OUR <span>FOUNDERS</span></h2>
            <h5>Talent wins games, but teamwork and intelligence win championships.</h5>


            <div className="Team-wrapper">
                
                <div className = "row">
                	<div className = "col-md-6">
                        <img src={founder1} className="founder1"/>		
                	</div>
                	<div className = "col-md-6">
                        <img src={founder2} className="founder2"/>		
                	</div>
                </div>
                
                
                {/* <img src={t5} />
                <img src={t6} /> */}
            </div>
            <div className="team-detail">
                
                
                <div className="team-member">
                    <h3>LATE MR. VISWA RANJAN PATI</h3>
                </div>
                
                <div className="team-member">
                    <h3>MR. NITIN SHASHI AGARWAL</h3>
                </div>               
            </div>


			<Link to="/about/">
                <div className="team-r">
                    <i class="fas fa-arrow-circle-up fa-2x"></i>
                </div>
            </Link> 
		</div>
	)
}

export default MoreAbout;
