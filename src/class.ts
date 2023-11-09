import { IDomClass, IDomClassConstructor } from "./types";

/**
 * Класс для управления CSS-классами элементов.
 */
const DomClass: IDomClassConstructor = class DomClass implements IDomClass {
    /**
     * Добавляет CSS-классы к элементу.
     * @param el - Элемент, к которому добавляются классы.
     * @param tokens - Список классов для добавления.
     */
    static add = (el: HTMLElement, ...tokens: string[]) => {
        el.classList.add(...tokens);
    };

    /**
     * Добавляет CSS-классы ко всем непосредственным дочерним элементам указанного родительского элемента.
     * @param parentEl - Родительский элемент, к дочерним элементам которого добавляются классы.
     * @param tokens - Список классов для добавления.
     */
    static addChild = (parentEl: HTMLElement, ...tokens: string[]) => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.add(el, ...tokens));
    };

    /**
     * Добавляет CSS-классы к элементам, удовлетворяющим указанному селектору.
     * @param selector - Селектор элементов, к которым добавляются классы.
     * @param tokens - Список классов для добавления.
     */
    static addBySelector = (selector: string, ...tokens: string[]) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.add(el, ...tokens));
    };

    /**
     * Удаляет CSS-классы из элемента.
     * @param el - Элемент, из которого удаляются классы.
     * @param tokens - Список классов для удаления.
     */
    static remove = (el: HTMLElement, ...tokens: string[]) => {
        el.classList.remove(...tokens);
    };

    /**
     * Удаляет CSS-классы у всех непосредственных дочерних элементов указанного родительского элемента.
     * @param parentEl - Родительский элемент, у дочерних элементов которого удаляются классы.
     * @param tokens - Список классов для удаления.
     */
    static removeChild = (parentEl: HTMLElement, ...tokens: string[]) => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.remove(el, ...tokens));
    };

    /**
     * Удаляет CSS-классы у элементов, удовлетворяющих указанному селектору.
     * @param selector - Селектор элементов, у которых удаляются классы.
     * @param tokens - Список классов для удаления.
     */
    static removeBySelector = (selector: string, ...tokens: string[]) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.remove(el, ...tokens));
    };

    /**
     * Удаляет все CSS-классы у элемента.
     * @param el - Элемент, у которого удаляются все классы.
     */
    static removeAll = (el: HTMLElement) => {
        el.className = "";
    };

    /**
     * Переключает CSS-класс у элемента.
     * @param el - Элемент, у которого происходит переключение класса.
     * @param token - Класс для переключения.
     * @param force - Флаг, указывающий на необходимость явного задания состояния класса (включено/выключено).
     */
    static toggle = (el: HTMLElement, token: string, force?: boolean) => {
        el.classList.toggle(token, force);
    };

    /**
     * Добавляет CSS-классы ко всем непосредственным дочерним элементам указанного родительского элемента.
     * @param parentEl - Родительский элемент, к дочерним элементам которого добавляются классы.
     * @param token - Класс для добавления или удаления.
     * @param force - Флаг, указывающий на необходимость явного задания состояния класса (включено/выключено).
     */
    static toggleChild = (
        parentEl: HTMLElement,
        token: string,
        force?: boolean
    ): void => {
        const elements = Array.from(parentEl.children) as Array<HTMLElement>;

        elements.forEach((el) => this.toggle(el, token, force));
    };

    /**
     * Переключает CSS-классы у элементов, удовлетворяющих указанному селектору.
     * @param selector - Селектор элементов, у которых происходит переключение классов.
     * @param token - Класс для переключения.
     * @param force - Флаг, указывающий на необходимость явного задания состояния класса (включено/выключено).
     */
    static toggleBySelector = (
        selector: string,
        token: string,
        force?: boolean
    ) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.toggle(el, token, force));
    };

    /**
     * Проверяет наличие CSS-класса у элемента.
     * @param el - Элемент, для которого выполняется проверка.
     * @param token - Класс для проверки наличия.
     * @returns Результат проверки наличия класса.
     */
    static contains = (el: HTMLElement, token: string): boolean => {
        return el.classList.contains(token);
    };

    /**
     * Проверяет наличие CSS-класса у всех элементов, соответствующих указанному селектору.
     * @param selector - Селектор элементов, для которых выполняется проверка.
     * @param token - Класс для проверки наличия.
     * @returns Результат проверки наличия класса у всех элементов.
     */
    static containsAll = (selector: string, token: string): boolean => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        return Array.from(elements).every((el) => this.contains(el, token));
    };

    /**
     * Заменяет один CSS-класс на другой у элемента.
     * @param el - Элемент, у которого происходит замена класса.
     * @param token - Класс для замены.
     * @param newToken - Новый класс.
     */
    static replace = (
        el: HTMLElement,
        token: string,
        newToken: string
    ): void => {
        el.classList.replace(token, newToken);
    };

    /**
     * Заменяет один CSS-класс на другой у всех элементов, соответствующих указанному селектору.
     * @param selector - Селектор элементов, у которых происходит замена класса.
     * @param token - Класс для замены.
     * @param newToken - Новый класс.
     */
    static replaceBySelector = (
        selector: string,
        token: string,
        newToken: string
    ): void => {
        const elements = document.querySelectorAll<HTMLElement>(selector);

        elements.forEach((el) => this.replace(el, token, newToken));
    };
};

export default DomClass;
