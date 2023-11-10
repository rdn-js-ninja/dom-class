import DomClass from "../src";

describe("DomClass", () => {
    let parentEl: HTMLElement;
    let childEls: HTMLElement[];

    beforeEach(() => {
        parentEl = document.createElement("div");
        parentEl.id = "parent";

        childEls = [];

        for (let i = 1; i <= 3; i++) {
            const childEl = document.createElement("div");
            childEl.classList.add("child");
            childEls.push(childEl);
            parentEl.appendChild(childEl);
        }

        document.body.appendChild(parentEl);
    });

    afterEach(() => {
        parentEl.remove();
    });

    describe("toggleChild", () => {
        it("should toggle the class on all child elements when force is not provided", () => {
            DomClass.toggleChild(parentEl, "active");

            childEls.forEach((el) => {
                expect(el.classList.contains("active")).toBe(true);
            });
        });

        it("should toggle the class on all child elements when force is true", () => {
            DomClass.toggleChild(parentEl, "active", true);

            childEls.forEach((el) => {
                expect(el.classList.contains("active")).toBe(true);
            });
        });

        it("should remove the class from all child elements when force is false", () => {
            childEls.forEach((el) => {
                el.classList.add("active");
            });

            DomClass.toggleChild(parentEl, "active", false);

            childEls.forEach((el) => {
                expect(el.classList.contains("active")).toBe(false);
            });
        });
    });
});
