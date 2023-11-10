import DomClass from "../src";

describe("DomClass", () => {
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement("div");
        document.body.appendChild(element);
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    describe("contains", () => {
        it("should return true if element contains the specified class", () => {
            element.classList.add("class1", "class2");

            expect(DomClass.contains(element, "class1")).toBe(true);
        });

        it("should return false if element does not contain the specified class", () => {
            element.classList.add("class1", "class2");

            expect(DomClass.contains(element, "class3")).toBe(false);
        });

        it("should return false if element does not have any classes", () => {
            expect(DomClass.contains(element, "class1")).toBe(false);
        });
    });
});
