import React from 'react';

import './radioButton.scss';
import classNames from 'classnames';

interface IRadioButton {
    value: string | number;
    id: string;
    name: string;
    text: string;
    disabled?: boolean;
    checked?: boolean;
    onChange: (value: any) => void;
}

const RadioButton: React.FC<IRadioButton> = ({
    value,
    id,
    name,
    text,
    onChange,
    disabled = false,
    checked = false,
}) => {
    return (
        <div
            className={classNames('radio-button', {
                'radio-button_disabled': disabled,
            })}
        >
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                defaultChecked={checked}
                onChange={(event) => onChange(event.target.value)}
            />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default RadioButton;
