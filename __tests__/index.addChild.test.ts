import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let childEls: HTMLElement[];

    beforeEach(() => {
        parentEl = document.createElement("div");
        childEls = [
            document.createElement("div"),
            document.createElement("div"),
            document.createElement("div"),
        ];

        childEls.forEach((el) => parentEl.appendChild(el));

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
        childEls = [];
    });

    describe("addChild", () => {
        it("should add classes to all immediate child elements", () => {
            DomClass.addChild(parentEl, "class1", "class2");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBe(true);
                expect(el.classList.contains("class2")).toBe(true);
            });
        });

        it("should not add classes to non-immediate child elements", () => {
            childEls.forEach((el) => {
                const grandchildEl = document.createElement("div");
                el.appendChild(grandchildEl);
            });

            DomClass.addChild(parentEl, "class1", "class2");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBe(true);
                expect(el.classList.contains("class2")).toBe(true);

                Array.from(el.children).forEach((grandchildEl) => {
                    expect(grandchildEl.classList.contains("class1")).toBe(
                        false
                    );
                    expect(grandchildEl.classList.contains("class2")).toBe(
                        false
                    );
                });
            });
        });

        it("should add classes to child elements with existing classes", () => {
            childEls.forEach((el, index) => {
                el.classList.add(`initial-class-${index}`);
            });

            DomClass.addChild(parentEl, "class1", "class2");

            Array.from(parentEl.children).forEach((el, index) => {
                expect(el.classList.contains("class1")).toBe(true);
                expect(el.classList.contains("class2")).toBe(true);
                expect(el.classList.contains(`initial-class-${index}`)).toBe(
                    true
                );
            });
        });

        it("should add classes to child elements with duplicate classes", () => {
            DomClass.addChild(parentEl, "class1", "class1");

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.contains("class1")).toBe(true);
                expect(el.classList.length).toBe(1);
            });
        });

        it("should not add classes if no child elements exist", () => {
            childEls.forEach((el) => el.remove());

            DomClass.addChild(parentEl, "class1", "class2");

            expect(parentEl.children.length).toBe(0);
        });

        it("should not add classes if no classes are specified", () => {
            DomClass.addChild(parentEl);

            Array.from(parentEl.children).forEach((el) => {
                expect(el.classList.length).toBe(0);
            });
        });
    });
});
