import DomClass from "../src";

describe("DomClass", () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement("div");
    });

    describe("remove", () => {
        it("should remove a single class from an element", () => {
            element.classList.add("class1", "class2");

            DomClass.remove(element, "class1");

            expect(element.classList.contains("class1")).toBe(false);
            expect(element.classList.contains("class2")).toBe(true);
        });

        it("should remove multiple classes from an element", () => {
            element.classList.add("class1", "class2", "class3");

            DomClass.remove(element, "class1", "class3");

            expect(element.classList.contains("class1")).toBe(false);
            expect(element.classList.contains("class2")).toBe(true);
            expect(element.classList.contains("class3")).toBe(false);
        });

        it("should remove a class that is not present on the element", () => {
            element.classList.add("class1");

            DomClass.remove(element, "class2");

            expect(element.classList.contains("class1")).toBe(true);
            expect(element.classList.contains("class2")).toBe(false);
        });

        it("should remove classes when element has no classes", () => {
            DomClass.remove(element, "class1", "class2");

            expect(element.classList.contains("class1")).toBe(false);
            expect(element.classList.contains("class2")).toBe(false);
        });
    });
});
