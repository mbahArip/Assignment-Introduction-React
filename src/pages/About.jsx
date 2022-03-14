import profilePicture from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import navLogo from '../assets/img/logo-ALTA@2x.png';
import altaLogo from '../assets/img/logo-ALTA-v2.png';
import fbLogo from '../assets/img/ic_fb@2x.png';
import twLogo from '../assets/img/ic-twitter@2x.png';
import igLogo from '../assets/img/ic-instagram@2x.png';
import liLogo from '../assets/img/ic-linkedin@2x.png';

export default function About() {
	return (
		<>
			<header>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-8 col-md-12 col-sm-12 col-12'>
							<div className='alterra'>
								<a href='/'>
									<img src={navLogo} alt='Alterra' className='logo-atas' />
								</a>
							</div>
						</div>
						<div className='col-lg-4 col-md-12 col-sm-12 col-12'>
							<div className='row align-items-center navig'>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right'>
									<a href='/'>HOME</a>
								</div>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center'>
									<a href='/about' class='aktif'>
										ABOUT
									</a>
								</div>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left'>
									<a href='/#'>EXPERIENCE</a>
								</div>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right'>
									<a href='/contact'>CONTACT</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div class='container-fluid about-me'>
				<h1 class='container pl-2 pt-5 pb-5'>ABOUT ME.</h1>
			</div>

			<div class='container'>
				<div class='row pt-5 pb-5 '>
					<div class='col-lg-7 col-md-12 col-sm-12 col-12 pl-5'>
						<div class='about-anne'>
							<p>
								Hello! I’m Anne Sullivan, a full-stack engineer based in Malang, IDN who enjoys building things that live on the
								internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with
								efficient and modern backends. <br />
								<br />
								Shortly after graduating from Alterra Academy, I joined the engineering team at Alterra where I work on a wide variety
								of interesting and meaningful projects on a daily basis. <br />
								<br />
								Here’s few technologies I’ve been working with recently :
							</p>
						</div>
						<div>
							<table class='tabel-anne'>
								<tr>
									<td>HTML & CSS</td>
									<td>Serverless</td>
									<td>Scrum</td>
								</tr>
								<tr>
									<td>Programming</td>
									<td>Restful API</td>
									<td>Test-Driven Dev</td>
								</tr>
								<tr>
									<td>Database</td>
									<td>Javascript</td>
									<td>Software Testing</td>
								</tr>
								<tr>
									<td>Git & Github</td>
									<td>Sigle Page App</td>
									<td>UX/UI Designer</td>
								</tr>
							</table>
						</div>
					</div>
					<div class='col-lg-5 col-md-12 col-sm-12 col-12 pr-5'>
						<div class='foto-id text-lg-right text-md-center text-sm-center'>
							<img src={profilePicture} alt='Anna Sullivean' />
						</div>
					</div>
				</div>
			</div>

			<footer>
				<div class='container'>
					<div class='row pt-5 pb-5'>
						<div class='pl-5 col-lg-5 col-md-4 col-sm-12 col-12 text-lg-left text-md-left text-sm-center'>
							<a href='index.html'>
								<img class='logo-bawah' src={altaLogo} alt='Alterra' />
							</a>
						</div>
						<div class='col-lg-3 col-md-3 col-sm-12 col-12 text-lr-left text-md-center text-sm-center'>
							<h6>Social Media:</h6>
							<a href='https://www.facebook.com/AlterraAcademy'>
								<img class='logo-sosmed' src={fbLogo} alt='Facebook' />
							</a>

							<a href='https://twitter.com/'>
								<img class='logo-sosmed' src={twLogo} alt='Twitter' />
							</a>

							<a href='https://www.instagram.com/alterra.academy/'>
								<img class='logo-sosmed' src={igLogo} alt='Instagram' />
							</a>

							<a href='https://id.linkedin.com/'>
								<img class='logo-sosmed' src={liLogo} alt='LinkedIn' />
							</a>
						</div>
						<div class='col-lg-4 col-md-5 col-sm-12 col-12 pt-3'>
							<h6 class='text-lg-right text-md-center text-sm-center kopi'>Copyleft © 2019 - Unjelas Team</h6>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
