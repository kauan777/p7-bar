import { useState, useEffect } from "react";
import TitleSection from "../TitleSection/title-section.component";
import ItemCategory from "./parts/item-category.part";
import { GET_CATEGORIES } from "../../services/graphql/queries/get_categories";
import { client } from "../../services/graphql/api";
import { GET_PRODUCTS_BY_CATEGORY } from "../../services/graphql/queries/get_products_by_category";
import { useProduct } from "../../hooks/useProduct";

export interface Category {
  createdAt: string;
  id: string;
  isActive: boolean;
  label: string;
  image: {
    url: string;
  };
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [idSelected, setIdSelected] = useState("");
  const { setProducts } = useProduct();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data: any = await client.request(GET_CATEGORIES);
        setCategories(data.categories);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, []);

  async function getProductsByCategoryId(categoryId: string) {
    try {
      const data: any = await client.request(GET_PRODUCTS_BY_CATEGORY, {
        categoryId: categoryId,
      });
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mt-[56px]">
      <TitleSection firstWord="Menu de " secondWord="Categorias" />
      <div className="mt-6 flex flex-row h-[80px] max-w-[400px] md:max-w-none overflow-x-auto">
        {categories.map((category) => (
          <ItemCategory
            key={category.id}
            idGraph={category.id}
            onClick={() => {
              if (category.id == idSelected) {
                return;
              }
              setIdSelected(category.id);
              getProductsByCategoryId(category.id);
            }}
            title={category.label}
            active={category.id == idSelected}
            icon={category.image.url}
          />
        ))}
      </div>
    </div>
  );
}
