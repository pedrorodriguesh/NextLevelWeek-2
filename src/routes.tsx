// Rotas da aplicação
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Landing from './pages/Landing';

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
