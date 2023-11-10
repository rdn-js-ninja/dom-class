import DomClass from "../src";

describe("DomClass", () => {
    let containerEl: HTMLElement;
    let elementEls: HTMLElement[];

    beforeEach(() => {
        containerEl = document.createElement("div");
        containerEl.classList.add("container");

        elementEls = [];

        for (let i = 1; i <= 3; i++) {
            const elementEl = document.createElement("div");
            elementEl.classList.add("element");
            elementEl.textContent = `Element ${i}`;
            elementEls.push(elementEl);
            containerEl.appendChild(elementEl);
        }

        document.body.appendChild(containerEl);
    });

    afterEach(() => {
        containerEl.remove();
    });

    describe("replaceBySelector", () => {
        it("should replace class on all elements that satisfy the selector", () => {
            elementEls.forEach((el) => {
                el.classList.add("old-class");
            });

            DomClass.replaceBySelector(".element", "old-class", "new-class");

            elementEls.forEach((el) => {
                expect(el.classList.contains("old-class")).toBe(false);
                expect(el.classList.contains("new-class")).toBe(true);
            });
        });

        it("should not replace class on elements that do not satisfy the selector", () => {
            elementEls.forEach((el) => {
                el.classList.add("old-class");
            });

            DomClass.replaceBySelector(
                ".non-existent-class",
                "old-class",
                "new-class"
            );

            elementEls.forEach((el) => {
                expect(el.classList.contains("old-class")).toBe(true);
                expect(el.classList.contains("new-class")).toBe(false);
            });
        });

        it("should not replace class if selector is empty", () => {
            elementEls.forEach((el) => {
                el.classList.add("old-class");
            });

            DomClass.replaceBySelector("", "old-class", "new-class");

            elementEls.forEach((el) => {
                expect(el.classList.contains("old-class")).toBe(true);
                expect(el.classList.contains("new-class")).toBe(false);
            });
        });
    });
});
