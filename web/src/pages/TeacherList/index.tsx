import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './styles.css';

function TeacherList() {
	return (
		<div id='page-teacher-list' className='container'>
			<PageHeader title='Estes são os proffys disponíveis.'>
				<form id='search-teachers'>
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

					<Input name='week_day' label='Dia da semana'/>
					<Input name='time' label='Hora' type='time'/>
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
			</main>
		</div>
	);
}

export default TeacherList;
