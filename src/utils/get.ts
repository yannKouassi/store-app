
import {RecipesResponse} from "@/types/recipes-response.model";


  const getRecipes = async (): Promise<RecipesResponse> => {

    const response = await fetch('https://dummyjson.com/recipes');
    if(!response.ok){
        throw new Error(response.statusText);
    }
     const data:RecipesResponse=await response.json();
    return data ;

};
export default getRecipes;

