import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let childEl1: HTMLElement;
    let childEl2: HTMLElement;

    beforeEach(() => {
        parentEl = document.createElement("div");
        childEl1 = document.createElement("div");
        childEl2 = document.createElement("div");

        parentEl.appendChild(childEl1);
        parentEl.appendChild(childEl2);

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
    });

    describe("addBySelector", () => {
        it("should add classes to elements that satisfy the specified selector", () => {
            const selector = "div";

            DomClass.addBySelector(selector, "class1", "class2");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeTruthy();
                expect(el.classList.contains("class2")).toBeTruthy();
            });
        });

        it("should not add classes to elements that do not satisfy the specified selector", () => {
            const selector = "span";

            DomClass.addBySelector(selector, "class1", "class2");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeFalsy();
                expect(el.classList.contains("class2")).toBeFalsy();
            });
        });

        it("should add classes to multiple elements that satisfy the specified selector", () => {
            const selector = "div";

            DomClass.addBySelector(selector, "class1");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeTruthy();
            });
        });

        it("should add classes to elements that satisfy the specified selector when multiple selectors are specified", () => {
            const selector = "div, span";

            DomClass.addBySelector(selector, "class1");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeTruthy();
            });
        });

        it("should not add classes to elements that do not satisfy any of the specified selectors", () => {
            const selector = "span, p";

            DomClass.addBySelector(selector, "class1");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeFalsy();
            });
        });

        it("should not add any classes if selector is an empty string", () => {
            DomClass.addBySelector("", "class1", "class2");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBeFalsy();
                expect(el.classList.contains("class2")).toBeFalsy();
            });
        });
    });
});
