# html
```html
<div class="container">
  <div class="item item--1">Modern</div>
  <div class="item item--2">CSS</div>
  <div class="item item--3">with</div>
  <div class="item item--4">Flexbox</div>
  <div class="item item--5">and</div>
  <div class="item item--6">Grid</div>
  <div class="item item--7">is</div>
  <div class="item item--8">great</div>
</div>
```

# scss

```scss
.container {
  width: 1000px;
  margin: 30px auto;
  background-color: #ddd;
  
  display: grid;
  // Using min-content and max-content
  //grid-template-rows: repeat(2, 150px);
  //grid-template-columns: max-content 1fr 1fr min-content;
  //grid-template-rows: repeat(2, min-content);
  
  // Using minmax function
  //width: 90%;
  //grid-template-rows: repeat(2, minmax(150px, min-content));
  //grid-template-columns: minmax(200px, 1fr) repeat(3, 1fr);
  
  // Using auto-fill and auto-fit
  grid-template-rows: repeat(2, minmax(150px, min-content));
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-columns: repeat(auto-fit, 100px);
  
  width: 90%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 150px;
  
  .item {
    padding: 10px;
    color: white;
    font-family: sans-serif;
    font-size: 30px;
    background-color: orangered;

    &--1 { background-color: orangered; }
    &--2 { background-color: yellowgreen; }
    &--3 { background-color: blueviolet; }
    &--4 { background-color: palevioletred; }
    &--5 { background-color: royalblue; }
    &--6 { background-color: goldenrod; }
    &--7 { background-color: crimson; }
    &--8 { background-color: darkslategray; }
  }
}
```
