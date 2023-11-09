/**
 * Интерфейс класса для управления CSS-классами элементов.
 */
export interface IDomClassConstructor {
    add: (el: HTMLElement, ...tokens: string[]) => void;
    addChild: (parentEl: HTMLElement, ...tokens: string[]) => void;
    addBySelector: (selector: string, ...tokens: string[]) => void;
    remove: (el: HTMLElement, ...tokens: string[]) => void;
    removeChild: (parentEl: HTMLElement, ...tokens: string[]) => void;
    removeBySelector: (selector: string, ...tokens: string[]) => void;
    removeAll: (el: HTMLElement) => void;
    toggle: (el: HTMLElement, token: string, force?: boolean) => void;
    toggleChild: (
        parentEl: HTMLElement,
        token: string,
        force?: boolean
    ) => void;
    toggleBySelector: (
        selector: string,
        token: string,
        force?: boolean
    ) => void;
    contains: (el: HTMLElement, token: string) => boolean;
    containsAll: (selector: string, token: string) => boolean;
    replace: (el: HTMLElement, token: string, newToken: string) => void;
    replaceBySelector: (
        selector: string,
        token: string,
        newToken: string
    ) => void;
}

/**
 * Интерфейс экземпляра класса для управления CSS-классами элементов.
 */
export interface IDomClass {}
