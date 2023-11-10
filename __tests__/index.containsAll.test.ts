import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let child1: HTMLElement;
    let child2: HTMLElement;
    let child3: HTMLElement;

    beforeEach(() => {
        parentEl = document.createElement("div");

        child1 = document.createElement("div");
        child1.classList.add("child1");
        parentEl.appendChild(child1);

        child2 = document.createElement("div");
        child2.classList.add("child2");
        parentEl.appendChild(child2);

        child3 = document.createElement("div");
        child3.classList.add("child3");
        parentEl.appendChild(child3);

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        document.body.removeChild(parentEl);
    });

    describe("containsAll", () => {
        it("should return true if all elements have the specified class", () => {
            const selector = ".child1, .child2, .child3";
            const token = "test-class";

            DomClass.addBySelector(selector, token);

            expect(DomClass.containsAll(selector, token)).toBe(true);
        });

        it("should return false if at least one element does not have the specified class", () => {
            const selector = ".child1, .child2, .child3";
            const token = "test-class";

            Array.from(parentEl.children).forEach((el, index) => {
                if (index !== 0) {
                    DomClass.add(el as HTMLElement, token);
                }
            });

            expect(DomClass.containsAll(selector, token)).toBe(false);
        });

        it("should return false if no elements have the specified class", () => {
            const selector = ".child1, .child2, .child3";
            const token = "test-class";

            expect(DomClass.containsAll(selector, token)).toBe(false);
        });
    });
});
