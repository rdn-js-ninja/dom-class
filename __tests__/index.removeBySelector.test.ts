import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let childEl1: HTMLElement;
    let childEl2: HTMLElement;

    beforeEach(() => {
        parentEl = document.createElement("div");
        parentEl.id = "parentEl";

        childEl1 = document.createElement("div");
        childEl1.classList.add("childEl1");

        parentEl.appendChild(childEl1);

        childEl2 = document.createElement("div");
        childEl2.classList.add("childEl2");
        parentEl.appendChild(childEl2);

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
    });

    describe("removeBySelector", () => {
        it("should remove a single class from all elements that match the selector", () => {
            DomClass.add(childEl1, "test-class");
            DomClass.add(childEl2, "test-class");
            DomClass.removeBySelector(".childEl1", "test-class");

            expect(childEl1.classList.contains("test-class")).toBe(false);
            expect(childEl2.classList.contains("test-class")).toBe(true);
        });

        it("should remove multiple classes from all elements that match the selector", () => {
            DomClass.add(childEl1, "class1", "class2", "class3");
            DomClass.add(childEl2, "class1", "class2", "class3");

            DomClass.removeBySelector(".childEl1", "class1", "class3");

            expect(childEl1.classList.contains("class1")).toBe(false);
            expect(childEl1.classList.contains("class3")).toBe(false);
            expect(childEl2.classList.contains("class1")).toBe(true);
            expect(childEl2.classList.contains("class3")).toBe(true);
        });

        it("should not remove classes from elements that do not match the selector", () => {
            DomClass.add(childEl1, "test-class");
            DomClass.add(childEl2, "test-class");

            DomClass.removeBySelector(".non-existing-class", "test-class");

            expect(childEl1.classList.contains("test-class")).toBe(true);
            expect(childEl2.classList.contains("test-class")).toBe(true);
        });

        it("should not remove any classes if selector is an empty string", () => {
            DomClass.add(childEl1, "test-class");
            DomClass.add(childEl2, "test-class");

            DomClass.removeBySelector("", "test-class");

            expect(childEl1.classList.contains("test-class")).toBe(true);
            expect(childEl2.classList.contains("test-class")).toBe(true);
        });
    });
});
