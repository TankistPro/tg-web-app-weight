export interface IModalContext {
    isOpenPopup: boolean;
    togglePopup: (flag: boolean, popupType?: PopupTypes, payload?: any, direction?: PopupDirection) => void;
}

export enum PopupTypes {
    SelectLanguageModal = 1,
}

export enum PopupDirection {
    TopToBottom,
    BottomToTop,
}
