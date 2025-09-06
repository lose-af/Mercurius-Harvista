//来自芒果（https://kubejs-notes.pages.dev/zh-tw/example-scripts/AlwaysEat.html)
ItemEvents.modification((event) => {
  Ingredient.all.itemIds.forEach((id) => {
    event.modify(id, (item) => {
      if (item.foodProperties != null) {
        item.foodProperties = (properties) => {
          properties.alwaysEdible();
        };
      }
    });
  });
});