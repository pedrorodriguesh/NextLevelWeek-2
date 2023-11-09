import PageHeader from '../../components/PageHeader';
import './styles.css';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers'>
					<div className='input-block'>
						<label htmlFor='subject'>Matéria</label>
						<input type='text' id='subject' />
					</div>

					<div className='input-block'>
						<label htmlFor='week_day'>Dia da semana</label>
						<input type='text' id='week_day' />
					</div>

					<div className='input-block'>
						<label htmlFor='time'>Hora</label>
						<input type='text' id='time' />
					</div>
				</form>
			</PageHeader>

			<main>
				<article className='teacher-item'>
					<header>
						<img src='https://github.com/pedrorodriguesh.png' alt='Pedro Henrique' />
						<div>
							<strong>Pedro Henrique</strong>
							<span>Programação</span>
						</div>
					</header>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptatibus.
					</p>

					<footer>
						<p>
							Preço/hora
							<strong>R$100,00</strong>
						</p>
						<button type='button'>
							<img src={whatsapp} alt='whatsapp icon' />
							Whatsapp
						</button>
					</footer>
				</article>
			</main>
		</div>
	);
}

export default TeacherList;
