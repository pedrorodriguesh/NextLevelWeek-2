/* eslint-disable @typescript-eslint/object-curly-spacing */
// Import de imagens no React é por meio de "variáveis"
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';

// Import para fazer o roteamento de pages.
import { Link } from 'react-router-dom';

import './styles.css';

function Landing() {
	return (
		<div id='page-landing'>
			<div id='page-landing-content' className='container'>

				<div className='logo-container'>
					<img src={logoImg} alt='Proffy' />
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img src={landingImg} alt='imagem-plataforma-de-estudos' className='hero-image' />

				<div className='buttons-container'>
					<Link to='/teachers' className='study'>
						<img src={studyIcon} alt='estudar' />
                        Estudar
					</Link>

					<Link to='/give-classes' className='give-classes'>
						<img src={giveClassesIcon} alt='dar aula' />
                        Dar aula
					</Link>
				</div>

				<span className='total-connections'>
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt='coração roxo'/>
				</span>
			</div>
		</div>
	);
}

export default Landing;
