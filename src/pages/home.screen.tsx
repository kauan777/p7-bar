import Header from "../components/Header/header.component";
import Menu from "../components/Menu/menu.component";
import OrderSidebar from "../components/OrderSidebar/order-sidebar.component";
import Sidebar from "../components/Sidebar/sidebar.component";
import { useCart } from "../hooks/useCart";

export default function HomeScreen() {
  const { isCartVisible } = useCart();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className={`flex ${isCartVisible ? "overflow-hidden" : ""}`}>
        <Sidebar />
        <Menu />
        <OrderSidebar />
      </main>
    </div>
  );
}
