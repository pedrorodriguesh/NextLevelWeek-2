import React from 'react';

// Importando imagens setadas como variáveis
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => (
	<article className='teacher-item'>
		<header>
			<img src='https://github.com/pedrorodriguesh.png' alt='Pedro Henrique' />
			<div>
				<strong>Pedro Henrique</strong>
				<span>Programação</span>
			</div>
		</header>

		<p>
			Estudante e professor de Programação que adora ensinar e desenvolver novos projetos.
			<br />
			<br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Id molestiae quibusdam culpa enim neque pariatur provident eius esse ipsa!
			Quia ad iste ipsum fugiat laboriosam impedit, amet enim iure aut!
		</p>

		<footer>
			<p>
				Preço/hora:
				<strong>R$100,00</strong>
			</p>

			<button type='button'>
				<img src={whatsapp} alt='whatsapp icon' />
				Entrar em contato
			</button>
		</footer>
	</article>
);

export default TeacherItem;
