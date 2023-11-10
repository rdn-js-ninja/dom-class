import DomClass from "../src";

describe("DomClass", () => {
    let el: HTMLElement;

    beforeEach(() => {
        el = document.createElement("div");
    });

    afterEach(() => {
        el = document.createElement("div");
    });

    describe("toggle", () => {
        it("should toggle the class on the element if it is not present", () => {
            DomClass.toggle(el, "my-class");

            expect(el.classList.contains("my-class")).toBe(true);
        });

        it("should remove the class from the element if it is already present", () => {
            el.classList.add("my-class");

            DomClass.toggle(el, "my-class");

            expect(el.classList.contains("my-class")).toBe(false);
        });

        it("should add the class to the element if the force flag is true", () => {
            DomClass.toggle(el, "my-class", true);

            expect(el.classList.contains("my-class")).toBe(true);
        });

        it("should remove the class from the element if the force flag is false", () => {
            el.classList.add("my-class");

            DomClass.toggle(el, "my-class", false);

            expect(el.classList.contains("my-class")).toBe(false);
        });
    });
});
