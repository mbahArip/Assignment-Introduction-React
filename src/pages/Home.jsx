import navLogo from '../assets/img/logo-ALTA@2x.png';
import profilePicture from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

export default function Home() {
	return (
		<div className='home-background'>
			<header>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-8 col-md-12 col-sm-12 col-12'>
							<div className='alterra'>
								<a href='/index.html'>
									<img src={navLogo} alt='Alterra' className='logo-atas' />
								</a>
							</div>
						</div>
						<div className='col-lg-4 col-md-12 col-sm-12 col-12'>
							<div className='row align-items-center navig'>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right'>
									<a href='/' class='aktif'>
										HOME
									</a>
								</div>
								<div class='col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center'>
									<a href='/about'>ABOUT</a>
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

			<div class='container h-100'>
				<div class='row align-items-center isi-home'>
					<div class='col-lg-4 col-md-12 col-sm-12  col-12'>
						<img id='foto-profil' src={profilePicture} alt='Anne Sullivan' />
					</div>
					<div class='col-lg-8 col-md-12 col-sm-12 col-12'>
						<div class='main-p'>
							<p class='sapaan'>Hi, my name is </p>
							<p class='nama'>Anne Sullivan</p>
							<p class='hobi'>I build things for the web</p>
							<p class='tombol'>
								<a href='about.html'>Get In Touch</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
