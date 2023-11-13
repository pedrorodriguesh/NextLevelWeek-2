import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// Passando as propriedades que meu componente input pode receber.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => { // rest operator coloca todas as props disponíveis no componente.
    return (
        <div className='input-wrapper'>
            <label htmlFor={name}>{label}</label>
            <input type='text' id={name} {...rest} />
        </div>
    );
};

export default Input;
