import React from 'react';

import './selectLanguageButton.scss';

import SelectLanguageIcon from '../../../public/img/select-language-icon.svg';

interface ISelectLanguageButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const SelectLanguageButton: React.FC<ISelectLanguageButton> = (props) => {
    return (
        <button className="select-language-button" {...props}>
            <SelectLanguageIcon />
            Select language
        </button>
    );
};

export default SelectLanguageButton;
