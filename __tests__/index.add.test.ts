import DomClass from "../src";

describe("DomClass", () => {
    let container: HTMLElement;
    let el: HTMLElement;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        el = document.createElement("div");
        container.appendChild(el);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    describe("add", () => {
        it("should add a single class to an element", () => {
            DomClass.add(el, "class1");

            expect(el.classList.contains("class1")).toBe(true);
        });

        it("should add multiple classes to an element", () => {
            DomClass.add(el, "class1", "class2", "class3");

            expect(el.classList.contains("class1")).toBe(true);
            expect(el.classList.contains("class2")).toBe(true);
            expect(el.classList.contains("class3")).toBe(true);
        });

        it("should not add duplicate classes to an element", () => {
            DomClass.add(el, "class1");
            DomClass.add(el, "class1");

            expect(el.classList.length).toBe(1);
        });
    });
});
