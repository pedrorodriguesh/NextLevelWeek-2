import React from 'react';

// Importando imagens setadas como variáveis
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
	id: number;
	avatar: string;
	bio: string;
	cost: number;
	name: string;
	subject: string;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	function createNewConnection() {
		api.post('connections', {
			user_id: teacher.id,
		});
	}

	return (
		<article className='teacher-item'>
			<header>
				<img src={teacher.avatar} alt={teacher.name} />
					<div>
						<strong>{teacher.name}</strong>
						<span>{teacher.subject}</span>
					</div>
			</header>

			<p>{teacher.bio}</p>

			<footer>
				<p>
					Preço/hora:
					<strong>R$ {teacher.cost},00</strong>
				</p>

				<a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target='_blank' rel='noreferrer'>
					<img src={whatsapp} alt='whatsapp icon' />
					Entrar em contato
				</a>
				</footer>
			</article>
	)
	
};

export default TeacherItem;
