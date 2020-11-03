/*function Category(name) {
  this.name = name;
  this.description = "";
  this.items = [];
}

function Item(name) {
  this.name = name;
  this.description = "";
  this.quantity = 0;
}

let waterBottle = new Item("Water Bottle");
waterBottle.description = "This is a bottle of water.";
waterBottle.quantity = 12;

let groceryList = new Category("My Grocery List");
groceryList.description = "This is my list.";
groceryList.items = [waterBottle];
groceryList.items.push(waterBottle);

Category.prototype.addItem(item) {
  this.items.push(item);
}

// If you console.log the groceryList object:
Object {
  [ name: "My Grocery List",
  description: "This is my list.",
  items: Object {
    [ name: "Water Bottle",
    description: "This is a bottle of water.",
    quantity: 12 ]
  } ]
}
groceryList.addItem(......); */
