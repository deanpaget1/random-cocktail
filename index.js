import express from "express";
import axios from "axios";
import { stringify } from "querystring";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    const ingredResult = [
      result.data.drinks[0].strIngredient1,
      result.data.drinks[0].strIngredient2,
      result.data.drinks[0].strIngredient3,
      result.data.drinks[0].strIngredient4,
      result.data.drinks[0].strIngredient5,
      result.data.drinks[0].strIngredient6,
      result.data.drinks[0].strIngredient7,
      result.data.drinks[0].strIngredient8,
      result.data.drinks[0].strIngredient9,
      result.data.drinks[0].strIngredient10,
      result.data.drinks[0].strIngredient11,
      result.data.drinks[0].strIngredient12,
      result.data.drinks[0].strIngredient13,
      result.data.drinks[0].strIngredient14,
      result.data.drinks[0].strIngredient15
    ];
    const measureResult = [
      result.data.drinks[0].strMeasure1,
      result.data.drinks[0].strMeasure2,
      result.data.drinks[0].strMeasure3,
      result.data.drinks[0].strMeasure4,
      result.data.drinks[0].strMeasure5,
      result.data.drinks[0].strMeasure6,
      result.data.drinks[0].strMeasure7,
      result.data.drinks[0].strMeasure8,
      result.data.drinks[0].strMeasure9,
      result.data.drinks[0].strMeasure10,
      result.data.drinks[0].strMeasure11,
      result.data.drinks[0].strMeasure12,
      result.data.drinks[0].strMeasure13,
      result.data.drinks[0].strMeasure14,
      result.data.drinks[0].strMeasure15,
    ];
    res.render("index.ejs", {
      drink: result.data.drinks[0].strDrink,
      instructions: result.data.drinks[0].strInstructions,
      ingredients: ingredResult,
      measure: measureResult,
      image: `<img src=${JSON.stringify(result.data.drinks[0].strDrinkThumb)} width="400">`,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
