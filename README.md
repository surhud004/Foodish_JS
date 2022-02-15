# 🍲 Foodish.js 🍛 [![Website](https://img.shields.io/website?down_color=critical&down_message=down&up_color=success&up_message=up&url=https%3A%2F%2Ffoodish-js.netlify.app%2F)](https://foodish-js.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/e0bc1b66-eafc-42c9-b871-75c23971e015/deploy-status)](https://app.netlify.com/sites/foodish-js/deploys) [![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-green.svg?logo=github)](https://github.com/surhud004/Foodish/blob/main/CONTRIBUTING.md)

![Logo](https://github.com/surhud004/Foodish_JS/blob/main/assets/logo.ico "Samosa")

A JavaScript version of the [Foodish](https://github.com/surhud004/Foodish) API to GET a random picture of food dishes.

## Demo

Visit https://foodish-js.netlify.app/

## Installation

### Step 1

Include the JS scripts in the `<head>` tag of the HTML -

```
<script src="https://foodish-js.netlify.app/js/images.js"></script>
<script src="https://foodish-js.netlify.app/js/foodish.js"></script>
```

### Step 2

Add an `<img>` with `id='foodish'` to the HTML -

```
<img id="foodish" alt="foodish" />
```

### Step 3

Add a `<script>` in the `<body>` and get a random Foodish with `getFoodish()` -

```
<script type="text/javascript">
  getFoodish("random");
</script>
```

or get a random Foodish from `food` category -

```
<script type="text/javascript">
  getFoodish(foodCategory);
</script>
```

Please visit the [demo](https://github.com/surhud004/Foodish_JS#demo) website to view the list of available `food` categories.

### Example

To get a random `burger` -

```
<html>
  <head>
    <script src="https://foodish-js.netlify.app/js/images.js"></script>
    <script src="https://foodish-js.netlify.app/js/foodish.js"></script>
  </head>
  <body>
    <img id="foodish" alt="foodish" />
    <script type="text/javascript">
      getFoodish("burger");
    </script>
  </body>
</html>
```

## Usage

- You are designing a restaurant website and you want to add random food pictures as placeholders.
- You are creating a guess the food dish game.
- You are ordering a pizza but you just want a random choice, visit https://foodish-js.netlify.app/?foodish=pizza because that's fun! Didn't like the pizza? Just hit refresh!
- You just like to see food pictures (visual hunger) because _you eat with your eyes first._

###### Please note that I do not own any of the Foodish dataset images. All Foodish images and their ownership belong to their original creators.

## Support

Please [create a new issue](https://github.com/surhud004/Foodish_JS/issues/new) for support and issues.

## Contributing

Please read the [CONTRIBUTING](https://github.com/surhud004/Foodish/blob/main/CONTRIBUTING.md) for details on adding images to the Foodish Database.

## License

The project is licensed under [MIT](https://opensource.org/licenses/MIT). Please read the [LICENSE](https://github.com/surhud004/Foodish_JS/blob/main/LICENSE) for details.

---

###### [Foodish.js](https://github.com/surhud004/Foodish_JS) is maintained by [surhud004](https://github.com/surhud004).
