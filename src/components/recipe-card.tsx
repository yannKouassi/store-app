"use client";

import { Recipe } from "@/types/recipe.model";
import Image from "next/image";
import { Clock, Flame, Star, Eye, ChefHat } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
    const router = useRouter();

    return (
        <div className="card bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl border border-base-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 group">

            {/* Image */}
            <figure className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
          <span className="badge badge-primary">
            {recipe.cuisine}
          </span>

                    <span className="badge badge-success">
            {recipe.difficulty}
          </span>
                </div>

                {/* Note */}
                <div className="absolute bottom-4 right-4">
                    <div className="badge badge-warning gap-1 font-semibold">
                        <Star size={14} className="fill-current" />
                        {recipe.rating}
                    </div>
                </div>
            </figure>

            {/* Corps */}
            <div className="card-body p-5">

                <h2 className="card-title text-lg font-bold line-clamp-1">
                    {recipe.name}
                </h2>

                <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <ChefHat size={16} />
                    <span>{recipe.reviewCount} avis</span>
                </div>

                {/* Infos */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                    <div className="bg-base-200 rounded-xl p-3 flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        <div>
                            <p className="text-xs text-base-content/60">
                                Préparation
                            </p>
                            <p className="font-semibold">
                                {recipe.prepTimeMinutes} min
                            </p>
                        </div>
                    </div>

                    <div className="bg-base-200 rounded-xl p-3 flex items-center gap-2">
                        <Flame size={18} className="text-orange-500" />
                        <div>
                            <p className="text-xs text-base-content/60">
                                Cuisson
                            </p>
                            <p className="font-semibold">
                                {recipe.cookTimeMinutes} min
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bouton */}
                <div className="card-actions mt-6">
                    <button
                        onClick={() => router.push(`/catalogue/${recipe.id}`)}
                        className="btn btn-primary w-full rounded-xl"
                    >
                        <Eye size={18} />
                        Voir la recette
                    </button>
                </div>

            </div>
        </div>
    );
}