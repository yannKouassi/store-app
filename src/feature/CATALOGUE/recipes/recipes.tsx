import { RecipesResponse } from "@/types/recipes-response.model";
import RecipeCard from "@/components/recipe-card";
import getRecipes from "@/utils/get";
import {Search, Utensils,} from "lucide-react";

export default async function Catalogue() {
    const data: RecipesResponse = await getRecipes();

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">

            {/* Header */}
            <div className="hero bg-base-200 rounded-3xl mb-12">
                <div className="hero-content w-full flex-col lg:flex-row lg:justify-between">

                    <div>
                        <h1 className="text-5xl font-extrabold">
                            <Utensils className="text-primary" size={20} /> Catalogue des recettes
                        </h1>

                        <p className="mt-3 text-base-content/70">
                            Découvrez {data.total} recettes délicieuses pour toutes les envies.
                        </p>
                    </div>

                    <label className="input input-bordered flex items-center gap-2 w-full lg:w-96 mt-6 lg:mt-0">
                        <Search size={18} />
                        <input
                            type="text"
                            className="grow"
                            placeholder="Rechercher une recette..."
                        />
                    </label>

                </div>
            </div>

            {/* Statistiques */}
            <div className="stats shadow w-full mb-10">

                <div className="stat">
                    <div className="stat-title">
                        Nombre de recettes
                    </div>

                    <div className="stat-value text-primary">
                        {data.total}
                    </div>

                    <div className="stat-desc">
                        Disponibles dans le catalogue
                    </div>
                </div>

            </div>

            {/* Grille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">

                {data.recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                    />
                ))}

            </div>

        </section>
    );
}