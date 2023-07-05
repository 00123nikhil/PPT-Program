# Assignment 2 | Web Development

## Q.1 What’s Box Model in CSS ?

- The box model is a fundamental concept in CSS (Cascading Style Sheets) that describes how elements on a web page are structured and rendered. It defines how an element's content, padding, border, and margin are laid out and interact with each other.

- `Content`: It represents the actual content of an element, such as text, images, or other media. The content area is surrounded by the padding, border, and margin.

- `Padding`: It is the space between the content and the element's border. It provides internal spacing within the element. Padding can be set using the padding property.

- `Border`: It is a line that surrounds the padding and content area of an element. The border can have a specific thickness, style, and color. The border is specified using the border property.

- `Margin`: It is the space outside the border of an element. It creates space between adjacent elements. The margin can be set using the margin property.

- the width and height of an element in CSS apply to the content area only. However, you can modify the box model behavior using the box-sizing property. With box-sizing: border-box, the specified width and height include the content, padding, and border, making it easier to calculate the total size of an element.

## Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?

CSS (Cascading Style Sheets) provides various types of selectors that allow you to target and apply styles to specific elements or groups of elements on a web page.

1. Type Selectors: These selectors target elements based on their HTML tag names. For example, to select all `<h1>` elements, you can use the selector `h1`. Type selectors are straightforward and can be useful for applying generic styles to specific elements throughout the document.

2. Class Selectors: Class selectors target elements based on their assigned class attribute. You can assign a class name to one or more elements in your HTML markup and then use the class selector in CSS to apply styles. Class selectors start with a period (".") followed by the class name. For example, `.my-class` selects elements with the class "my-class". Class selectors allow you to apply styles selectively to specific elements and provide a way to reuse styles across multiple elements.

3. ID Selectors: ID selectors target elements based on their unique ID attribute. An ID should be unique within a document. ID selectors start with a hash ("#") followed by the ID name. For example, `#my-id` selects the element with the ID "my-id". ID selectors have higher specificity than class selectors, and they can be useful for targeting specific elements for unique styles or JavaScript interactions.

4. Attribute Selectors: Attribute selectors target elements based on their attribute values. You can select elements based on attributes such as `href`, `src`, or custom attributes. Attribute selectors are enclosed in square brackets and follow a specific syntax. Attribute selectors provide flexibility in targeting elements based on attribute values.

5. Pseudo-Classes and Pseudo-Elements: Pseudo-classes and pseudo-elements target elements based on specific states or positions. Pseudo-classes are prefixed with a colon (":") and target elements based on various states like `:hover`, `:focus`, or `:first-child`. Pseudo-elements are also prefixed with a colon and target specific parts of an element, such as `::before` or `::after`. Pseudo-classes and pseudo-elements allow you to apply styles based on dynamic conditions or add decorative elements to elements.

Advantages:

- Specificity: Different types of selectors provide varying levels of specificity, allowing you to target elements precisely based on your requirements.
- Reusability: Class selectors enable you to define styles once and apply them to multiple elements, promoting code reuse and maintainability.
- Flexibility: Attribute selectors and pseudo-classes provide flexibility in targeting elements based on specific conditions or attributes, giving you more control over styling.
- Modularity: CSS selectors allow you to separate the structure (HTML) from the presentation (CSS), making your code more modular and easier to maintain.
- Enhancing User Experience: Selectors like pseudo-classes and pseudo-elements enable you to create interactive and visually appealing effects, enhancing the user experience of your web pages.

## Q.3 What is VW/VH ?

- VW (Viewport Width) and VH (Viewport Height) are CSS units that allow you to specify sizes relative to the dimensions of the viewport (the visible area of a web page).

- VW (Viewport Width): 1 VW is equal to 1% of the width of the viewport. For example, if the viewport width is 1000 pixels, 1 VW would be equal to 10 pixels (1% of 1000). It allows you to set sizes or lengths based on the width of the viewport.

- VH (Viewport Height): 1 VH is equal to 1% of the height of the viewport. For example, if the viewport height is 800 pixels, 1 VH would be equal to 8 pixels (1% of 800). It allows you to set sizes or lengths based on the height of the viewport.

```css
.container {
  width: 50vw;
  height: 80vh;
  font-size: 3vw;
  margin: 2vh 1vw;
}
```

- In the above example, the .container class is styled using VW and VH units. The width and height are set relative to the viewport dimensions, allowing the container to adjust dynamically based on the viewport size. The font size is also specified in VW units, ensuring it scales proportionally with the viewport width. The margin values are set using a combination of VW and VH units to create spacing relative to the viewport dimensions.

## Q.4 Whats difference between Inline, Inline Block and block ?

1. Inline Elements:

   - Inline elements do not start on a new line and only take up the space they need to display their content.
   - They cannot have width and height properties set explicitly.
   - Margins and paddings on inline elements only affect the horizontal space around the content, not the vertical space.
   - Examples of inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, and `<input>`.

2. Block Elements:

   - Block elements start on a new line and occupy the full width available.
   - They can have width and height properties set explicitly.
   - Margins, paddings, and borders on block elements affect both the horizontal and vertical space.
   - Examples of block elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>`, `<section>`, and `<article>`.

3. Inline-Block Elements:
   - Inline-block elements are displayed inline like text but can have width, height, margins, paddings, and borders set explicitly.
   - They occupy only the necessary space based on their content width and height and can coexist with other elements on the same line.
   - Inline-block elements allow for more flexibility in terms of layout compared to inline elements.
   - Examples of inline-block elements include `<button>`, `<label>`, and `<div>` with specific CSS properties.

Example :

```html
<span>This is an inline element.</span>
<div>This is a block element.</div>
<span style="display: inline-block;">This is an inline-block element.</span>
```

## Q.5 How is Border-box different from Content Box?

Border-box and Content-box are two different values for the `box-sizing` property in CSS, which determines how an element's width and height are calculated and how the content, padding, border, and margin interact with each other.

1. Content-box:

   - In the content-box model, the specified width and height of an element apply only to the content area.
   - Padding, border, and margin are added to the specified width and height, resulting in the total outer dimensions of the element.
   - This means that the content area's size is reduced by the width of the padding and border, and the margin adds space outside the element.
   - This is the traditional box model used in CSS before the introduction of the `box-sizing` property.

2. Border-box:
   - In the border-box model, the specified width and height of an element include the content, padding, and border.
   - The padding and border are included in the specified width and height, and the margin remains outside the element.
   - This means that the content area's size is preserved, and any additional width or height is added to the padding and border areas.
   - The margin still occupies space outside the element, just as in the content-box model.

The key difference between border-box and content-box is how the width and height are calculated. With border-box, you have control over the total size of the element, including the padding and border, while content-box calculates the size separately for the content area and adds padding and border on top of that.

## Q.6 What’s z-index and How does it Function ?

The `z-index` property in CSS is used to control the stacking order of positioned elements on a web page. It determines which elements should appear on top of others in the vertical axis, allowing you to layer elements and create overlapping effects.

The `z-index` property accepts a numeric value, where higher values represent elements that appear on top of elements with lower values. Elements with a higher `z-index` value will visually overlap elements with a lower `z-index` value.

1. Stacking Context:

   - Each positioned element (elements with a position value other than `static`) forms a stacking context.
   - The stacking context creates a local coordinate system for the element and its descendants.

2. Default `z-index`:

   - By default, elements have a `z-index` value of `auto`.
   - Elements with `auto` `z-index` are stacked in the order they appear in the HTML markup.

3. Higher `z-index`:

   - To bring an element to the front and make it appear on top of other elements within the same stacking context, you can give it a higher `z-index` value.
   - Elements with a higher `z-index` value will visually overlap elements with lower `z-index` values within the same stacking context.

4. Negative `z-index`:

   - A negative `z-index` value can be used to position elements behind the default stacking order.
   - Elements with negative `z-index` values are positioned below elements with `z-index` values of `auto`.

5. Stacking Order:

   - Within a stacking context, the stacking order is determined by the combination of `z-index` values and the order of the elements in the HTML markup.
   - Elements with a higher `z-index` value are stacked in front of elements with lower `z-index` values.

6. Stacking Context Nesting:
   - Stacking contexts can be nested within each other.
   - When an element establishes a new stacking context, its children are stacked relative to that element, and the stacking order is separate from the outer stacking context.

It's important to note that `z-index` only works on positioned elements (`position: relative`, `position: absolute`, or `position: fixed`) and does not have any effect on non-positioned elements (`position: static`).

```css
.container {
  position: relative;
  z-index: 1;
}

.element {
  position: absolute;
  z-index: 2;
}
```

## Q.7 What’s Grid & Flex and difference between them?

1. Grid Layout:

   - CSS Grid Layout (often referred to as just Grid) is a two-dimensional layout system that allows you to create grid-based layouts.
   - Grid divides a webpage into columns and rows, forming a grid-like structure.
   - It allows you to control the placement and alignment of elements within the grid using properties like `grid-template-columns`, `grid-template-rows`, `grid-column`, `grid-row`, etc.

   - It supports both horizontal and vertical alignment, making it suitable for complex layouts with multiple sections and content areas.

2. Flexbox:
   - CSS Flexbox (Flexible Box Layout) is a one-dimensional layout system designed for creating flexible and dynamic layouts.
   - Flexbox works along a single axis, either horizontally or vertically.
   - It allows you to arrange elements within a container and control their alignment, order, and spacing.
   - Flexbox provides properties like `display: flex`, `flex-direction`, `justify-content`, `align-items`, etc., to control the layout and positioning of flex items.

Differences between Grid and Flex:

1. Dimension:

   - Grid is a two-dimensional layout system, providing control over both columns and rows.
   - Flexbox is a one-dimensional layout system, operating along either the horizontal or vertical axis.

2. Layout Control:

   - Grid provides precise control over both item placement and alignment within the grid structure, allowing you to specify exact positions and sizes.
   - Flexbox focuses on distributing and aligning items along a single axis, making it ideal for flexible layouts and centering content.

3. Complexity:

   - Grid is well-suited for complex layouts with multiple sections, content areas, and overlapping elements.
   - Flexbox is best for simpler layouts with a linear flow and flexible content positioning.

4. Support for Multiple Containers:

   - Grid allows for multiple grid containers within a webpage, each with its own layout.
   - Flexbox typically works within a single flex container, controlling the alignment and order of its child items.

5. Browser Support:
   - Flexbox has better browser support, including older versions of major browsers.
   - Grid has good support but may require additional vendor prefixes and has limited support in older browsers.

## Q.8 Difference between absolute and relative and sticky and fixed position explain with example.

1. Absolute Position:

   - With `position: absolute`, an element is positioned relative to its nearest positioned ancestor (an ancestor with a position value other than `static`) or the initial containing block if no positioned ancestor is found.
   - The element is completely removed from the normal flow of the document.
   - You can use properties like `top`, `right`, `bottom`, and `left` to specify the exact position of the element relative to its containing block or ancestor.
   - Other elements are not affected by the positioned element's space in the layout.

   ```css
   .container {
     position: relative;
     height: 200px;
   }

   .absolute-element {
     position: absolute;
     top: 50px;
     left: 50px;
   }
   ```

2. Relative Position:

   - With `position: relative`, an element is positioned relative to its normal position in the document flow.
   - The element retains its space in the layout, and other elements are not affected by it.
   - You can use properties like `top`, `right`, `bottom`, and `left` to offset the element from its normal position.

   ```css
   .relative-element {
     position: relative;
     top: 20px;
     left: 20px;
   }
   ```

3. Sticky Position:

   - With `position: sticky`, an element behaves like `position: relative` within its containing block until a specified offset threshold is reached. At that point, it becomes "stuck" and remains fixed in that position.
   - Sticky positioning is relative to the viewport or the nearest scrolling ancestor.
   - It allows an element to stay in a specific position as the user scrolls.
   - The element transitions from relative positioning to fixed positioning once the threshold is passed, and then back to relative positioning when scrolling back up.

   ```css
   .sticky-element {
     position: sticky;
     top: 50px;
   }
   ```

4. Fixed Position:
   - With `position: fixed`, an element is positioned relative to the viewport and remains fixed in that position, even when the page is scrolled.
   - The element is completely removed from the normal document flow and does not affect the layout of other elements.
   - It stays in a fixed position even if the viewport is scrolled.
   ```css
   .fixed-element {
     position: fixed;
     top: 20px;
     right: 20px;
   }
   ```
