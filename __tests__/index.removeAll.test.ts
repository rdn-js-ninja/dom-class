import DomClass from "../src";

describe("DomClass", () => {
    let parent: HTMLElement;
    let child1: HTMLElement;
    let child2: HTMLElement;
    let child3: HTMLElement;

    beforeEach(() => {
        parent = document.createElement("div");
        child1 = document.createElement("div");
        child2 = document.createElement("div");
        child3 = document.createElement("div");

        child1.classList.add("class1");
        child2.classList.add("class2");
        child3.classList.add("class3");

        parent.appendChild(child1);
        parent.appendChild(child2);
        parent.appendChild(child3);

        document.body.appendChild(parent);
    });

    afterEach(() => {
        parent.innerHTML = "";
    });

    describe("removeAll", () => {
        it("should remove all classes from the parent element", () => {
            DomClass.removeAll(parent);

            expect(parent.classList.length).toBe(0);
        });

        it("should not remove classes from other elements", () => {
            const otherElement = document.createElement("div");
            otherElement.classList.add("class4");

            document.body.appendChild(otherElement);

            DomClass.removeAll(parent);

            expect(otherElement.classList.length).toBe(1);
            expect(otherElement.classList.contains("class4")).toBe(true);

            document.body.removeChild(otherElement);
        });

        it("should not throw an error if the parent element has no children", () => {
            const emptyParent = document.createElement("div");

            expect(() => DomClass.removeAll(emptyParent)).not.toThrow();
        });
    });
});
