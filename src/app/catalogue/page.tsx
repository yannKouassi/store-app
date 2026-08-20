import Link from "next/link";
import Catalogue from "@/feature/CATALOGUE/recipes/recipes";


export default function CataloguePage() {
  return (
      <div>

          <p>
              <Link className={"btn-link"} href={"/"}>Retourner</Link>
          </p>
          <Catalogue/>
      </div>
  );
}
