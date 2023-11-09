/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/object-curly-spacing */
import { Link } from 'react-router-dom';

// Imagens setadas como variáveis
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

// Tipando as propriedades do componente
type PageHeaderProps = {
	title: string;
	children?: React.ReactNode;
};

const PageHeader: React.FC<PageHeaderProps> = props => (
	<header className='page-header'>
		<div className='top-bar-container'>
			<Link to='/'>
				<img src={backIcon} alt='voltar' />
			</Link>

			<img src={logoImg} alt='logo-proffy' />
		</div>

		<div className='header-content'>
			<strong>{props.title}</strong>
			{props.children}
		</div>

	</header>
);

export default PageHeader;
