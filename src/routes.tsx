import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' Component={Landing} />
				<Route path='/teachers' Component={TeacherList}/>
				<Route path='/give-classes' Component={TeacherForm}/>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
