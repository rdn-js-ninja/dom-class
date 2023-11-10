/**
 * Interface for the class constructor.
 */
export interface IDomClassConstructor {
    /**
     * Adds CSS classes to an element.
     * @param el - Element to which classes are added.
     * @param tokens - List of classes to add.
     */
    add: (el: HTMLElement, ...tokens: string[]) => void;
    /**
     * Adds CSS classes to all immediate child elements of a specified parent element.
     * @param parentEl - Parent element to which child elements classes are added.
     * @param tokens - List of classes to add.
     */
    addChild: (parentEl: HTMLElement, ...tokens: string[]) => void;
    /**
     * Adds CSS classes to elements that satisfy the specified selector.
     * @param selector - Selector of elements to which classes are added.
     * @param tokens - List of classes to add.
     */
    addBySelector: (selector: string, ...tokens: string[]) => void;
    /**
     * Removes CSS classes from an element.
     * @param el - Element from which classes are removed.
     * @param tokens - List of classes to remove.
     */
    remove: (el: HTMLElement, ...tokens: string[]) => void;
    /**
     * Removes CSS classes from all immediate child elements of a specified parent element.
     * @param parentEl - Parent element from which child elements classes are removed.
     * @param tokens - List of classes to remove.
     */
    removeChild: (parentEl: HTMLElement, ...tokens: string[]) => void;
    /**
     * Removes CSS classes from elements that satisfy the specified selector.
     * @param selector - Selector of elements from which classes are removed.
     * @param tokens - List of classes to remove.
     */
    removeBySelector: (selector: string, ...tokens: string[]) => void;
    /**
     * Removes all CSS classes from an element.
     * @param el - Element from which all classes are removed.
     */
    removeAll: (el: HTMLElement) => void;
    /**
     * Toggles a CSS class on an element.
     * @param el - Element on which the class is toggled.
     * @param token - Class to toggle.
     * @param force - Flag indicating whether to explicitly set the class state (on/off).
     */
    toggle: (el: HTMLElement, token: string, force?: boolean) => void;
    /**
     * Toggles CSS classes on all immediate child elements of a specified parent element.
     * @param parentEl - Parent element on which child elements classes are toggled.
     * @param token - Class to toggle.
     * @param force - Flag indicating whether to explicitly set the class state (on/off).
     */
    toggleChild: (
        parentEl: HTMLElement,
        token: string,
        force?: boolean
    ) => void;
    /**
     * Toggles CSS classes on elements that satisfy the specified selector.
     * @param selector - Selector of elements on which classes are toggled.
     * @param token - Class to toggle.
     * @param force - Flag indicating whether to explicitly set the class state (on/off).
     */
    toggleBySelector: (
        selector: string,
        token: string,
        force?: boolean
    ) => void;
    /**
     * Checks whether an element has a CSS class.
     * @param el - Element to check.
     * @param token - Class to check for.
     * @returns Result of the class presence check.
     */
    contains: (el: HTMLElement, token: string) => boolean;
    /**
     * Checks whether all elements that satisfy the specified selector have a CSS class.
     * @param selector - Selector of elements to check.
     * @param token - Class to check for.
     * @returns Result of the class presence check for all elements.
     */
    containsAll: (selector: string, token: string) => boolean;
    /**
     * Replaces one CSS class with another on an element.
     * @param el - Element on which the class is replaced.
     * @param token - Class to replace.
     * @param newToken - New class.
     */
    replace: (el: HTMLElement, token: string, newToken: string) => void;
    /**
     * Replaces one CSS class with another on all elements that satisfy the specified selector.
     * @param selector - Selector of elements on which the class is replaced.
     * @param token - Class to replace.
     * @param newToken - New class.
     */
    replaceBySelector: (
        selector: string,
        token: string,
        newToken: string
    ) => void;
}

/**
 * Interface for the instance of the class.
 */
export interface IDomClass {}
