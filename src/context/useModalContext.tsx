'use client';

import React, { NamedExoticComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { IModalContext, PopupDirection, PopupTypes } from '@/lib/types/ModalContext.type';
import SelectLanguageModal from '@/components/Modals/SelectLanguage/SelectLanguageMOdal';
// import UpRating from '@/components/PopupModals/UpRating/UpRating';
// import RejectParticipant from '@/components/PopupModals/RejectParticipant/RejectParticipant';

export const ModalContext = React.createContext<IModalContext>({
    isOpenPopup: false,
    togglePopup: () => {},
});

let { Provider } = ModalContext;

interface IModalContextProvider {
    children: React.ReactNode;
}

export const _ModalContextProvider: NamedExoticComponent<IModalContextProvider> = React.memo(({ children }) => {
    const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false);
    const [popupType, setPopupType] = React.useState<PopupTypes>();
    const [popupPayload, setPopupPayload] = React.useState<any | null>();
    const [direction, setDirection] = React.useState<PopupDirection>(PopupDirection.BottomToTop);

    const closeHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLElement;

        if (!target.closest('.popup-modal')) {
            togglePopup(false);
        }
    };

    const togglePopup = (
        flag: boolean,
        popupType: PopupTypes | null = null,
        payload: any = null,
        direction: PopupDirection = PopupDirection.BottomToTop
    ) => {
        setIsOpenPopup(flag);
        if (!flag) {
            const $popupWrapper = document.querySelector('.popup-wrapper');

            const timerId = setTimeout(() => {
                $popupWrapper?.classList.remove('popup-wrapper__active');
                clearTimeout(timerId);
            }, 500);
        } else {
            const $popupWrapper = document.querySelector('.popup-wrapper');
            $popupWrapper?.classList.add('popup-wrapper__active');

            setDirection(direction);
        }

        if (popupType) setPopupType(popupType);
        if (!flag) setPopupPayload(null);
        if (payload) setPopupPayload(payload);
    };

    const renderPopup = () => {
        switch (popupType) {
            case PopupTypes.SelectLanguageModal:
                return <SelectLanguageModal />;
        }
    };

    return (
        <Provider
            value={{
                isOpenPopup,
                togglePopup,
            }}
        >
            <div className={`popup-wrapper`} onClick={(event) => closeHandler(event)}>
                <CSSTransition
                    in={isOpenPopup}
                    timeout={{
                        enter: 500,
                        exit: 500,
                    }}
                    classNames={`${
                        direction === PopupDirection.BottomToTop ? 'popupTransitionBotTop' : 'popupTransitionTopBot'
                    }`}
                    unmountOnExit
                >
                    <div
                        className={`popup-modal ${
                            direction === PopupDirection.BottomToTop ? 'popup-bt-top' : 'popup-top-bt'
                        }`}
                    >
                        <div className={`popup-modal__content`}>{renderPopup()}</div>
                    </div>
                </CSSTransition>
            </div>
            {children}
        </Provider>
    );
});

export const useModal = () => React.useContext(ModalContext);
