![[KBaR.jpg]]

# html
```html
<div class="containter">
  <div class="item i1">1</div>
  <div class="item i2">2</div>
  <div class="item i3">3</div>
  <div class="item i4">4</div>
  <div class="item i5">5</div>
</div>
```

# scss

```scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.containter {
  background-color: #ccc;
  padding: 10px;
  
  display: flex; //or inline-flex
  flex-direction: row; // row-reverse / column / column-reverse
  
  // ALONG MAIN AXIS
  justify-content: center; //space-between / space-around / space-evenly flex-end
  
  // ALONG CROSS-AXIS
  //First, set i2 height to 250px
  align-items: center; // center / stretch / flex-end / flex-start / basleine (set size to 60px)
  
  // Copy 5 more items
  //flex-wrap: wrap;
  
  //height: 100vh;
  align-content: space-between;
}

.item {
  //flex: 1;
  
  background-color: #F1425D;
  margin: 30px;
  color: #fff;
  font-size: 40px;
  padding: 50px;
}


.i2 {
  height: 250px;
  //font-size: 60px;
}

.i4 {
  //order: -1; //Default is 0, so -1 is first, and 1 is last
  align-self: flex-end; //For this, set i2 back to 250px;
}

.i1 {
  //flex: 1;
  flex: 0 1 20%; //flex-basis is defualt size before the rest of the space is divided
}

.i5 {
  flex: 1; //try higher values
}
```