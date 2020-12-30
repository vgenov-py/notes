# HTML notes

- Inline elements ignore width, height and margin. The only property allowed is padding.
  - The only to way to make inline elements respect that, is with the inline-block property.

### input

- **autofocus**
- **disabled**
- **readonly** Almost like disables but with the particularity that the value will travel if had given.

### textarea

- For text

### Datalist

- Almost like the select property but with the feature that show the pre-selected options when typing.

### Relative units:

- Percentage

- em
  - In most cases they work proportionally to his parent elements but in fractions instead of percentage
  - One issue with em's property is that its grow exponencially with every ancester of the focus element
- rem
  - It's behave almost like em but the R stand for root parent element
  - The root element is the html by default size

### position property:

- Is the property that allows us to change the space ocuppied by a designed element

  - When the value of this property its set to static, the top and etc. property won't have effect on it
    - For this to happen you need to set it to relative (relative to itself)

- On the current flow of the document
  - static and relative
- Removed from the current flow of the document

  - absolute, fixed and sticky

- sticky

  - Commonly used to a navigation bar, not much as fixed, but the cool thing about this property is that, the moment that you hit it when you're scrolling down on your web site it "stick" with you like with the fixed property

- https://developer.mozilla.org/en-US/docs/Web/CSS/position

### transition property:

- This property helps us control how a element will change when is performed an action to it like hover for example

- We have to set it a delay for the effect to be appreciated

- **name** Allow us to set to what property we want to apply the effect (transtion: background-color 3s;)

- **delay** Its set the amount time that the user has to wait to see the effect

- **timing function** it control the "way" that the element is going to travel (transion-timing-funcition:ease-in;)

- https://www.easings.net

### background-image

- **background-image** after you specify the URL
  - **background-size** Allows us to change how the image is display (cover, contain)
  - **background-repeat**
  - **background-position**
- You're not limited to one background

### Flexbox:

- This property allows to move elements inside a box that will behave more fixed to your demands
- It will behave depends on the main axes that is set with **flex-direction**
- **flex-direction**: column, row;
- **justify-content** where the content will start
- **flex-wrap** wrap and wrap reverse
- **align-items** x axis
- Shorthand of **flex**

  - if three values given on flex: flex grow - flex shrink - flex basis

- https://developer.mozilla.org/en-US/docs/Glossary/Flexbox

### Media queries

- Allows us to modify our styles depending on differents parameters like width and height for instance.

- **@media (width:50px)** The width in this example is the width of your viewport, the most commonly property to use is max and min width.
  - Also, two properties can be on same line: **@media property_1 and property_2**
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media

### iframe container:

- It will let us put an entire webstite on a designed container

### input

- **autofocus**

### Resources:

- https://unsplash.com/
- https://www.d3js.org
