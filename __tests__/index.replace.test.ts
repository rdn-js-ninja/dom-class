import DomClass from "../src";

describe("DomClass", () => {
    let el: HTMLElement;
    let parentEl: HTMLElement;

    beforeEach(() => {
        parentEl = document.createElement("div");

        el = document.createElement("div");
        parentEl.appendChild(el);

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        document.body.removeChild(parentEl);
    });

    describe("replace", () => {
        it("should replace a class on an element", () => {
            el.classList.add("old-class");

            DomClass.replace(el, "old-class", "new-class");

            expect(el.classList.contains("old-class")).toBeFalsy();
            expect(el.classList.contains("new-class")).toBeTruthy();
        });

        it("should not replace a class if the element does not have the class", () => {
            el.classList.add("other-class");

            DomClass.replace(el, "old-class", "new-class");

            expect(el.classList.contains("old-class")).toBeFalsy();
            expect(el.classList.contains("new-class")).toBeFalsy();
        });
    });
});
