import {Recipe} from "@/types/recipe.model";

export type RecipesResponse = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
};
