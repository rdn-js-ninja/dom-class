# Библиотека DomClass

## Описание

Библиотека DomClass предоставляет класс для управления CSS-классами элементов. С её помощью вы можете легко добавлять, удалять и изменять классы у элементов на вашей веб-странице.

## Установка

Вы можете установить библиотеку DomClass с помощью npm или yarn, выполнив следующую команду:

```bash
npm install @js-ninja/dom-class
```

или

```bash
yarn add @js-ninja/dom-class
```

## Использование

Чтобы использовать библиотеку DomClass, вам необходимо импортировать класс `DomClass` и использовать его методы. Вот пример импорта и использования каждого метода класса:

```javascript
import DomClass from "@js-ninja/dom-class";

// Добавление CSS-классов к элементу
DomClass.add(element, "class1", "class2");

// Добавление CSS-классов ко всем непосредственным дочерним элементам родительского элемента
DomClass.addChild(parentElement, "class1", "class2");

// Добавление CSS-классов к элементам, удовлетворяющим указанному селектору
DomClass.addBySelector(".selector", "class1", "class2");

// Удаление CSS-классов из элемента
DomClass.remove(element, "class1", "class2");

// Удаление CSS-классов у всех непосредственных дочерних элементов родительского элемента
DomClass.removeChild(parentElement, "class1", "class2");

// Удаление CSS-классов у элементов, удовлетворяющих указанному селектору
DomClass.removeBySelector(".selector", "class1", "class2");

// Удаление всех CSS-классов у элемента
DomClass.removeAll(element);

// Переключение CSS-класса у элемента
DomClass.toggle(element, "class", true);

// Переключение CSS-классов у всех непосредственных дочерних элементов родительского элемента
DomClass.toggleChild(parentElement, "class", true);

// Переключение CSS-классов у элементов, удовлетворяющих указанному селектору
DomClass.toggleBySelector(".selector", "class", true);

// Проверка наличия CSS-класса у элемента
const containsClass = DomClass.contains(element, "class");

// Проверка наличия CSS-класса у всех элементов, соответствующих указанному селектору
const containsAllClasses = DomClass.containsAll(".selector", "class");

// Замена одного CSS-класса другим у элемента
DomClass.replace(element, "oldClass", "newClass");

// Замена одного CSS-класса другим у всех элементов, соответствующих указанному селектору
DomClass.replaceBySelector(".selector", "oldClass", "newClass");
```

## Лицензия

Библиотека DomClass распространяется под лицензией [MIT License](/LICENSE).
