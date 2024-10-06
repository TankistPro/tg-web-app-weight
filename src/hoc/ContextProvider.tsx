import React, { PropsWithChildren } from 'react';
import { _ModalContextProvider } from '@/context/useModalContext';

interface IContextProvider extends PropsWithChildren {}

const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
    return <_ModalContextProvider>{children}</_ModalContextProvider>;
};

export default ContextProvider;
