import Categories from "../Categories/categories.component";
import Orders from "../Orders/orders.component";

export default function Menu() {
    return <div className="w-full bg-light p-8">
            <Categories />
            <Orders />
    </div>
}