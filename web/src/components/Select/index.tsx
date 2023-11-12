import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => { // rest operator coloca todas as props disponíveis no componente.
    return (
        <div className='select-wrapper'>
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value='' disabled selected hidden>Selecione uma opção</option>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
};

export default Select;
