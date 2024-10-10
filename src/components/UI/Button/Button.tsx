import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import './button.scss';
import classNames from 'classnames';

interface IButton extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'active' | 'disabled' | 'orange-in' | 'orange-out';
}

const Button: React.FC<IButton> = ({ id, variant, disabled, onClick, children, ...props }) => {
    return (
        <div className={classNames(`button ${variant}`, { disabled: disabled })} id={id}>
            <button onClick={onClick} disabled={disabled} {...props}>
                {children}
            </button>
        </div>
    );
};

export default Button;
