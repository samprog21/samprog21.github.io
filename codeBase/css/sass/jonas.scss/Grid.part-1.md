# html
```html
<div class="container">
  <div class="item item--1">1: Orange</div>
  <div class="item item--2">2: Green</div>
  <div class="item item--3">3: Violet</div>
  <div class="item item--4">4: Pink</div>
  <div class="item item--5">5: Blue</div>
  <div class="item item--6">6: Brown</div>
</div>
```

# scss

```scss
.container {
  background-color: #eee;
  width: 1000px;
  margin: 30px auto;
  //height: 1000px;
  
  display: grid;
  grid-template-rows: repeat(2, 150px);
  //grid-template-columns: repeat(2, 150px) 1fr;
  //grid-template-columns: 50% 1fr 2fr;
  grid-template-columns: repeat(3, 1fr);
    
  //grid-row-gap: 30px;
  //grid-column-gap: 50px;
  grid-gap: 30px;
}

.item {
  padding: 20px;
  font-size: 30px;
  font-family: sans-serif;
  color: white;
  
  &--1 {
    background-color: orangered;
    /*grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;*/
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    z-index: 10;
  }
  
  &--2 {
    background-color: yellowgreen;
    //grid-column: 2 / span 2;
    grid-column: 1 / -1;
  }
  
  &--3 {
    background-color: blueviolet;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  
  &--4 {
    background-color: palevioletred;
  }
  
  &--5 {
    background-color: royalblue;
    /*grid-row: 1 / 2;
    grid-column: 3 / 4;*/
    grid-area: 1 / 3 / 3 / 4;
  }
  
  &--6 {
    background-color: goldenrod;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}
```

