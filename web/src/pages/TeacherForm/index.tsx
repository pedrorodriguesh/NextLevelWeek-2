import PageHeader from '../../components/PageHeader';

import './styles.css';

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
					<div className="input-wrapper">
						<label htmlFor="name">Nome Completo</label>
						<input type="text" id="name" />
					</div>

					<div className="input-wrapper">
						<label htmlFor="avatar">Avatar <span>(comece com //http)</span></label>
						<input type="text" id="avatar" />
					</div>

					<div className="input-wrapper">
						<label htmlFor="whatsapp">WhatsApp <span>(somente números)</span></label>
						<input type="text" id="whatsapp" />
					</div>
				</fieldset>



			</main>
		</div>
	);
}

export default TeacherForm;
