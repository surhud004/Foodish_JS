const getFoodish = (categoryName) => {
  let catchOfTheDay;
  switch (categoryName) {
    case "random":
      {
        const menuDB = Object.keys(images);
        const randomCategorySelector = Math.floor(
          Math.random() * menuDB.length
        );
        const anyRandomFood = menuDB[randomCategorySelector];
        const foodDB = images[anyRandomFood];
        const randomSelector = Math.floor(
          Math.random() * (Object.keys(foodDB).length - 1) + 1
        );
        catchOfTheDay = foodDB[randomSelector];
      }
      break;
    case "biryani":
      {
        const foodDB = images.biryani;
        const randomSelector = Math.floor(
          Math.random() * (Object.keys(foodDB).length - 1) + 1
        );
        catchOfTheDay = foodDB[randomSelector];
      }
      break;
  }

  document.getElementById("foodish").src = `../${catchOfTheDay}`;
};
