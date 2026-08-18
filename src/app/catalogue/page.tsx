import Image from "next/image";
import Header from "@/feature/HOME/header/header";
import Hero from "@/feature/HOME/HERO/hero";
import Link from "next/link";
import Catalogue from "@/feature/CATALOGUE/recipes/recipes";


export default function CataloguePage() {
  return (
      <div>
         <h1>
             Bienvenue sur la page catalogue
         </h1>

          <p>
              <Link className={"btn-link"} href={"/"}>Retourner</Link>
          </p>
          <Catalogue/>
      </div>
  );
}
