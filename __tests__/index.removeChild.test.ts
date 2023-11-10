import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let childEl1: HTMLElement;
    let childEl2: HTMLElement;
    let childEl3: HTMLElement;

    beforeEach(() => {
        parentEl = document.createElement("div");

        childEl1 = document.createElement("div");
        childEl1.classList.add("class1", "class2", "class3");

        childEl2 = document.createElement("div");
        childEl2.classList.add("class2", "class3", "class4");

        childEl3 = document.createElement("div");
        childEl3.classList.add("class3", "class4", "class5");

        parentEl.appendChild(childEl1);
        parentEl.appendChild(childEl2);
        parentEl.appendChild(childEl3);

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
    });

    describe("removeChild", () => {
        it("should remove classes from all immediate child elements of parent element", () => {
            DomClass.removeChild(parentEl, "class2", "class4");

            expect(childEl1.classList.contains("class1")).toBe(true);
            expect(childEl1.classList.contains("class2")).toBe(false);
            expect(childEl1.classList.contains("class3")).toBe(true);
            expect(childEl2.classList.contains("class2")).toBe(false);
            expect(childEl2.classList.contains("class3")).toBe(true);
            expect(childEl2.classList.contains("class4")).toBe(false);
            expect(childEl3.classList.contains("class3")).toBe(true);
            expect(childEl3.classList.contains("class4")).toBe(false);
            expect(childEl3.classList.contains("class5")).toBe(true);
        });

        it("should remove classes from all immediate child elements of parent element when using spread syntax", () => {
            DomClass.removeChild(parentEl, ...["class2", "class4"]);

            expect(childEl1.classList.contains("class1")).toBe(true);
            expect(childEl1.classList.contains("class2")).toBe(false);
            expect(childEl1.classList.contains("class3")).toBe(true);
            expect(childEl2.classList.contains("class2")).toBe(false);
            expect(childEl2.classList.contains("class3")).toBe(true);
            expect(childEl2.classList.contains("class4")).toBe(false);
            expect(childEl3.classList.contains("class3")).toBe(true);
            expect(childEl3.classList.contains("class4")).toBe(false);
            expect(childEl3.classList.contains("class5")).toBe(true);
        });
    });
});
