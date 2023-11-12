import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => { // rest operator coloca todas as props disponíveis no componente.
    return (
        <div className='textarea-wrapper'>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
};

export default Textarea;
