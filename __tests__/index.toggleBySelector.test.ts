import DomClass from "../src";

describe("DomClass", () => {
    let el1: HTMLElement;
    let el2: HTMLElement;
    let el3: HTMLElement;
    let parentEl: HTMLElement;
    let selector: string;

    beforeEach(() => {
        parentEl = document.createElement("div");

        el1 = document.createElement("div");
        el2 = document.createElement("div");
        el3 = document.createElement("div");

        parentEl.appendChild(el1);
        parentEl.appendChild(el2);
        parentEl.appendChild(el3);

        selector = ".test-class";

        el1.classList.add("test-class");
        el2.classList.add("test-class");

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
    });

    describe("toggleBySelector", () => {
        it("should toggle the class on all elements that match the selector", () => {
            DomClass.toggleBySelector(selector, "active");

            expect(el1.classList.contains("active")).toBe(true);
            expect(el2.classList.contains("active")).toBe(true);
            expect(el3.classList.contains("active")).toBe(false);
        });

        it("should toggle multiple classes on all elements that match the selector", () => {
            DomClass.toggleBySelector(selector, "active", true);

            expect(el1.classList.contains("active")).toBe(true);
            expect(el2.classList.contains("active")).toBe(true);
            expect(el3.classList.contains("active")).toBe(false);

            DomClass.toggleBySelector(selector, "highlight");

            expect(el1.classList.contains("highlight")).toBe(true);
            expect(el2.classList.contains("highlight")).toBe(true);
            expect(el3.classList.contains("highlight")).toBe(false);
        });

        it("should toggle the class on all elements that match the selector when force is false", () => {
            DomClass.toggleBySelector(selector, "active", true);

            expect(el1.classList.contains("active")).toBe(true);
            expect(el2.classList.contains("active")).toBe(true);
            expect(el3.classList.contains("active")).toBe(false);

            DomClass.toggleBySelector(selector, "active", false);

            expect(el1.classList.contains("active")).toBe(false);
            expect(el2.classList.contains("active")).toBe(false);
            expect(el3.classList.contains("active")).toBe(false);
        });

        it("should not toggle the class on elements that do not match the selector", () => {
            DomClass.toggleBySelector(selector, "active");

            expect(el1.classList.contains("active")).toBe(true);
            expect(el2.classList.contains("active")).toBe(true);
            expect(el3.classList.contains("active")).toBe(false);

            DomClass.toggleBySelector(".other-class", "active");

            expect(el1.classList.contains("active")).toBe(true);
            expect(el2.classList.contains("active")).toBe(true);
            expect(el3.classList.contains("active")).toBe(false);
        });

        it("should not throw an error when there are no elements that match the selector", () => {
            DomClass.toggleBySelector(".other-class", "active");
        });

        it("should not toggle any classes if selector is an empty string", () => {
            DomClass.toggleBySelector("", "active");

            expect(el1.classList.contains("active")).toBe(false);
            expect(el2.classList.contains("active")).toBe(false);
            expect(el3.classList.contains("active")).toBe(false);
        });
    });
});
