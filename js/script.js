const getFoodish = (pageName) => {
  let catchOfTheDay;
  switch (pageName) {
    case "index":
      {
        // menuDB is [biryani, burger, pizza]
        const menuDB = Object.keys(images);
        // random number generator within menuDB array range
        const randomCategorySelector = Math.floor(
          Math.random() * menuDB.length
        );
        // anyRandomFood is burger
        const anyRandomFood = menuDB[randomCategorySelector];
        // foodDB is {1: ../burger1.jpg, 2: ../burger2.jpg}
        const foodDB = images[anyRandomFood];
        // random number generator within foodDB object key range
        const randomSelector = Math.floor(
          Math.random() * (Object.keys(foodDB).length - 1) + 1
        );
        // catchOfTheDay is ../burger101.jpg
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

  document.getElementById("foodish").src = catchOfTheDay;
  document.getElementById(
    "shareLink"
  ).value = `https://foodish-api.netlify.app/${catchOfTheDay}`;
};

const imageCount = () => {
  let totalCount = 0;
  const menuDB = Object.keys(images);
  menuDB.forEach((eachFoodDB) => {
    let foodDB = images[eachFoodDB];
    let foodDBCount = Object.keys(foodDB).length;
    totalCount += foodDBCount;
    document.getElementById(`${eachFoodDB}Count`).textContent = foodDBCount;
  });
  document.getElementById("totalFoodishCount").textContent = totalCount;
};
