import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';

function TeacherForm() {
	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader 
			title='Que incrível que você quer dar aulas!'
			description='O primeiro passo é preencher esse formulário de inscrição' 
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>
					<Input name='name' label='Nome Completo'/>
					<Input name='avatar' label='Avatar'/>
					<Input name='whatsapp' label='Whatsapp'/>
					<Textarea name='bio' label='Biografia'/>
				</fieldset>

				<fieldset>
					<legend>Sobre a Aula</legend>
					<Input name='subject' label='Matéria'/>
					<Input name='cost' label='Custo da sua hora por aula'/>
				</fieldset>

				<fieldset>
					<legend>
						Horários Disponíveis
						<button type="button">+ Novo Horário</button>
					</legend>

					<div className="3-col">
						<Input name='subject' label='Matéria'/>
						<Input name='cost' label='Custo da sua hora por aula'/>

					</div>
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
