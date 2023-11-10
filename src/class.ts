import type { IDomClass, IDomClassConstructor } from "./types";

/**
 * Class for managing CSS classes of elements.
 */
const DomClass: IDomClassConstructor = class implements IDomClass {
    static add = (el, ...tokens) => {
        el.classList.add(...tokens);
    };

    static addChild = (parentEl, ...tokens) => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.add(el, ...tokens));
    };

    static addBySelector = (selector, ...tokens) => {
        if (selector.length === 0) {
            return;
        }

        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.add(el, ...tokens));
    };

    static remove = (el, ...tokens) => {
        el.classList.remove(...tokens);
    };

    static removeChild = (parentEl, ...tokens) => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.remove(el, ...tokens));
    };

    static removeBySelector = (selector, ...tokens) => {
        if (selector.length === 0) {
            return;
        }

        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.remove(el, ...tokens));
    };

    static removeAll = (el) => {
        el.className = "";
    };

    static toggle = (el, token, force) => {
        el.classList.toggle(token, force);
    };

    static toggleChild = (parentEl, token, force): void => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.toggle(el, token, force));
    };

    static toggleBySelector = (selector, token, force) => {
        if (selector.length === 0) {
            return;
        }

        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.toggle(el, token, force));
    };

    static contains = (el, token) => {
        return el.classList.contains(token);
    };

    static containsAll = (selector, token) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        return Array.from(elements).every((el) => this.contains(el, token));
    };

    static replace = (el, token, newToken) => {
        el.classList.replace(token, newToken);
    };

    static replaceBySelector = (selector, token, newToken): void => {
        if (selector.length === 0) {
            return;
        }

        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.replace(el, token, newToken));
    };
};

export default DomClass;
