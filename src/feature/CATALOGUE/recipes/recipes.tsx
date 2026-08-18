import {Recipe} from "@/types/recipe.model";
import getRecipes from "@/utils/get";
import {RecipesResponse} from "@/types/recipes-response.model";

interface Props {
    recipe: Recipe;
}

export default async function Catalogue(props: Props) {
    const data:RecipesResponse = await getRecipes();
    const recipes: Recipe[] =  data.recipes;
    const total:number = data.total;

    return (
        <div>
            <h1>
                {total} recettes disponibles
            </h1>

        </div>
    )
}