import SubtitleSection from "../SubtitleSection/subtitle-section.component";
import ItemOrder from "./parts/item-order.part";
import { useEffect } from "react";
import { GET_PRODUCTS } from "../../services/graphql/queries/get_products";
import { client } from "../../services/graphql/api";
import { useProduct } from "../../hooks/useProduct";

export default function Orders() {
  const { products, setProducts } = useProduct();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: any = await client.request(GET_PRODUCTS);
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="mt-8">
      <SubtitleSection firstWord="Escolha o " secondWord="Pedido" />
      <div className="mt-6 grid grid-cols-2 gap-2 md:flex md:flex-wrap justify-items-center">
        {products.map((product) => (
          <ItemOrder key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
