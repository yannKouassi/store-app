import { Recipe } from "@/types/recipe.model";
import Image from "next/image";
import { Clock, Flame, Users, Utensils, Star, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({ params }: Props) {
    const { id } = await params;
    const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
        next: { revalidate: 120 }
    });
    const recipe: Recipe = await res.json();


    if (!recipe || !recipe.name) {
        return (
            <div className="max-w-md mx-auto mt-32 text-center space-y-4 p-8 bg-base-100 rounded-3xl shadow-xl border border-base-300">
                <h1 className="text-2xl font-black text-error">Recette introuvable</h1>
                <p className="text-base-content/60 text-sm">Impossible de charger cette page.</p>
                <Link href="/" className="btn btn-primary rounded-full px-6">
                    Retour à l'accueil
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
            {/* Bouton retour */}
            <div>
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 hover:text-primary transition-colors bg-base-100 px-4 py-2 rounded-full shadow-xs border border-base-200">
                    <ArrowLeft size={16} /> Retour au catalogue
                </Link>
            </div>

            {/* En-tête Immersif (Sans gros bloc blanc englobant) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image grand format léchée */}
                <div className="lg:col-span-6 relative h-[350px] md:h-[420px] w-full rounded-3xl overflow-hidden shadow-lg bg-base-200">
                    <Image
                        src={recipe.image}
                        alt={recipe.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Infos principales à côté */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="badge badge-primary font-semibold">{recipe.cuisine}</span>
                        <span className="badge badge-outline font-semibold">{recipe.difficulty}</span>
                        {(recipe.mealType || []).map((type, index) => (
                            <span key={index} className="badge badge-ghost font-semibold">{type}</span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-base-content leading-tight">
                        {recipe.name}
                    </h1>

                    {/* Note */}
                    <div className="flex items-center gap-2 w-fit bg-base-100 px-3.5 py-1.5 rounded-full shadow-xs border border-base-200">
                        <Star className="text-amber-500 fill-amber-500" size={16} />
                        <span className="font-bold text-sm">{recipe.rating}</span>
                        <span className="text-base-content/50 text-xs">({recipe.reviewCount} avis vérifiés)</span>
                    </div>

                    {/* Grille des stats rapides (Design épuré sur fond de carte) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="bg-base-100 p-4 rounded-2xl text-center shadow-xs border border-base-200">
                            <Clock className="text-primary mx-auto mb-1.5" size={20} />
                            <span className="block text-[10px] text-base-content/50 uppercase tracking-wider font-bold">Prep</span>
                            <span className="font-bold text-sm">{recipe.prepTimeMinutes}m</span>
                        </div>
                        <div className="bg-base-100 p-4 rounded-2xl text-center shadow-xs border border-base-200">
                            <Flame className="text-primary mx-auto mb-1.5" size={20} />
                            <span className="block text-[10px] text-base-content/50 uppercase tracking-wider font-bold">Cuisson</span>
                            <span className="font-bold text-sm">{recipe.cookTimeMinutes}m</span>
                        </div>
                        <div className="bg-base-100 p-4 rounded-2xl text-center shadow-xs border border-base-200">
                            <Users className="text-primary mx-auto mb-1.5" size={20} />
                            <span className="block text-[10px] text-base-content/50 uppercase tracking-wider font-bold">Portions</span>
                            <span className="font-bold text-sm">{recipe.servings} pers.</span>
                        </div>
                        <div className="bg-base-100 p-4 rounded-2xl text-center shadow-xs border border-base-200">
                            <Utensils className="text-primary mx-auto mb-1.5" size={20} />
                            <span className="block text-[10px] text-base-content/50 uppercase tracking-wider font-bold">Calories</span>
                            <span className="font-bold text-sm">{recipe.caloriesPerServing}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenu bas : Ingrédients & Instructions distincts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
                {/* Ingrédients */}
                <div className="lg:col-span-4 bg-base-100 p-6 md:p-8 rounded-3xl shadow-sm border border-base-200 space-y-6">
                    <h2 className="text-xl font-black text-base-content border-b border-base-200 pb-4">
                        Ingrédients
                    </h2>
                    <ul className="space-y-3">
                        {(recipe.ingredients || []).map((ingredient, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-base-content/80 pb-3 border-b border-base-100 last:border-0 last:pb-0">
                                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                                <span className="font-medium">{ingredient}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div className="lg:col-span-8 bg-base-100 p-6 md:p-8 rounded-3xl shadow-sm border border-base-200 space-y-6">
                    <h2 className="text-xl font-black text-base-content border-b border-base-200 pb-4">
                        Préparation étape par étape
                    </h2>
                    <div className="space-y-6">
                        {(recipe.instructions || []).map((step, index) => (
                            <div key={index} className="flex gap-4 items-start group">
                                <span className="flex items-center justify-center bg-primary text-primary-content font-black rounded-2xl h-8 w-8 shrink-0 text-sm shadow-sm">
                                    {index + 1}
                                </span>
                                <p className="text-sm md:text-base leading-relaxed text-base-content/80 pt-1">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}