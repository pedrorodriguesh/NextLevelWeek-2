import { useState } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import './styles.css';

function TeacherForm() {
	// Professor =>
	const [name, setName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [bio, setBio] = useState('')

	// Aula =>
	const [subject, setSubject] = useState('')
	const [cost, setCost] = useState('')

	console.log(name, avatar, whatsapp, bio)
	
	// Lógica para inserir novo horário => useState
	const [schedulesItems, setSchedulesItems] = useState([
		{ week_day: 0, from: '', to: '' }
	]);

	function addScheduleItem() {
		setSchedulesItems([
			...schedulesItems,
			{ week_day: 0, from: '', to: '' }
		]);
		}

	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader 
			title='Que incrível que você quer dar aulas!'
			description='O primeiro passo é preencher esse formulário de inscrição' 
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>
					<Input name='name' label='Nome Completo' onChange={(e) => setName(e.target.value)}/>
					<Input name='avatar' label='Avatar' onChange={(e) => setAvatar(e.target.value)}/>
					<Input name='whatsapp' label='Whatsapp' onChange={(e) => setWhatsapp(e.target.value)}/>
					<Textarea name='bio' label='Biografia' onChange={(e) => setBio(e.target.value)}/>
				</fieldset>

				<fieldset>
					<legend>Sobre a Aula</legend>

					<Select 
						name='subject' 
						label='Matéria'
						options={[
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Ciências', label: 'Ciências' },
							{ value: 'Física', label: 'Física' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'História', label: 'História' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Português', label: 'Português' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Inglês', label: 'Inglês' },
							{ value: 'Programação', label: 'Programação'},
							{ value: 'Direito', label: 'Direito'},
						]}
					/>

					<Input name='cost' label='Custo da sua hora por aula'/>
				</fieldset>

				<fieldset>
					<legend>
						Horários Disponíveis
						<button type="button" onClick={addScheduleItem}>+ Novo Horário</button>
					</legend>

					{ schedulesItems.map(scheduleItem => { // para cada item dentro do array schedulesItems, renderize outro. 
						return (
							<div key={scheduleItem.week_day} className="schedule-item">
								<Select
									name='week_day' 
									label='Dia da semana'
									options={[
										{ value: '0', label: 'Domingo' },
										{ value: '1', label: 'Segunda-Feira' },
										{ value: '2', label: 'Terça-Feira' },
										{ value: '3', label: 'Quarta-Feira' },
										{ value: '4', label: 'Quinta-Feira' },
										{ value: '5', label: 'Sexta-Feira' },
										{ value: '6', label: 'Sábado' },
									]}
								/>
									<Input name='from' label='Das' type='time'/>
									<Input name='to' label='Até' type='time'/>
								</div>
						)
					})}
				</fieldset>

				<footer>
					<p>
						<img src={warningIcon} alt="aviso importante" />
						Importante! <br />
						Preencha todos os dados
					</p>
					<button type="button">
						Salvar cadastro
					</button>
				</footer>
			</main>
		</div>
	);
}

export default TeacherForm;
