const getFoodish = (pageName) => {
  let catchOfTheDay;
  // menuDB is [biryani, burger, pizza]
  const menuDB = Object.keys(images);
  console.log(`menu DB`, images)

  if (pageName === "index") {
    // random number generator within menuDB array range
    const randomCategorySelector = Math.floor(Math.random() * menuDB.length);
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
  } else if (pageName === "butter-chicken") {
    const foodDB = images.butterChicken;
    const randomSelector = Math.floor(
      Math.random() * (Object.keys(foodDB).length - 1) + 1
    );
    catchOfTheDay = foodDB[randomSelector];
  } else if (menuDB.includes(pageName)) {
    const foodDB = images[pageName];
    const randomSelector = Math.floor(
      Math.random() * (Object.keys(foodDB).length - 1) + 1
    );
    catchOfTheDay = foodDB[randomSelector];
  } else {
    catchOfTheDay = "";
  }

  document.getElementById("foodish").src = catchOfTheDay;
  document.getElementById(
    "shareLink"
  ).value = `https://foodishjs.netlify.app/${catchOfTheDay}`;
};

const imageCount = () => {
  let totalCount = 0;
  const menuDB = Object.keys(imageMetaData);
  menuDB.forEach((eachFoodDB) => {
    document.getElementById(`${eachFoodDB}Count`).textContent =
      imageMetaData[eachFoodDB];
    totalCount += imageMetaData[eachFoodDB];
  });
  document.getElementById("totalFoodishCount").textContent = totalCount;
};
