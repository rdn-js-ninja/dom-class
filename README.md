# DomClass Library

## README.md

-   ru [Русский](readme/README.ru.md)

## Description

The DomClass library provides a class for managing CSS classes of elements. With it, you can easily add, remove, and modify classes of elements on your web page.

## Installation

You can install the DomClass library using npm or yarn by executing the following command:

```bash
npm install @js-ninja/dom-class
```

or

```bash
yarn add @js-ninja/dom-class
```

## Usage

To use the DomClass library, you need to import the `DomClass` class and use its methods. Here's an example of importing and using each method of the class:

```javascript
import DomClass from "dom-class";

// Adding CSS classes to an element
DomClass.add(element, "class1", "class2");

// Adding CSS classes to all immediate child elements of a parent element
DomClass.addChild(parentElement, "class1", "class2");

// Adding CSS classes to elements matching the specified selector
DomClass.addBySelector(".selector", "class1", "class2");

// Removing CSS classes from an element
DomClass.remove(element, "class1", "class2");

// Removing CSS classes from all immediate child elements of a parent element
DomClass.removeChild(parentElement, "class1", "class2");

// Removing CSS classes from elements matching the specified selector
DomClass.removeBySelector(".selector", "class1", "class2");

// Removing all CSS classes from an element
DomClass.removeAll(element);

// Toggling a CSS class on an element
DomClass.toggle(element, "class", true);

// Toggling CSS classes on all immediate child elements of a parent element
DomClass.toggleChild(parentElement, "class", true);

// Toggling CSS classes on elements matching the specified selector
DomClass.toggleBySelector(".selector", "class", true);

// Checking if an element has a CSS class
const containsClass = DomClass.contains(element, "class");

// Checking if all elements matching the specified selector have all the CSS classes
const containsAllClasses = DomClass.containsAll(".selector", "class");

// Replacing one CSS class with another on an element
DomClass.replace(element, "oldClass", "newClass");

// Replacing one CSS class with another on all elements matching the specified selector
DomClass.replaceBySelector(".selector", "oldClass", "newClass");
```

## License

The DomClass library is licensed under the [MIT License](/LICENSE).
