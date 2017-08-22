import styles from  './MenuDashboard.css';
// https://gorangajic.github.io/react-icons/fa.html
import Order from 'react-icons/lib/fa/cart-arrow-down';
import Product from 'react-icons/lib/fa/shopping-bag';
import Category from 'react-icons/lib/fa/contao';
import Customer from 'react-icons/lib/fa/user';
import Payment from 'react-icons/lib/fa/credit-card';
import MenuButton from './MenuAdmin/MenuButton';

export default () => (
  <div className="menu-panel">
    <style jsx>{styles}</style>
    <div className="user">
      <img src="./static/img/photo.jpg" alt="img profile" />
      <span>Admin</span>
    </div>
    <ul className="items">
      <MenuButton link="/admin/order" text="Pedidos" icon={Order} />
      <MenuButton link="/admin/product" text="Productos" icon={Product} />
      <MenuButton link="/admin/category" text="Categorías" icon={Category} />
      <MenuButton link="/admin/customer" text="Clientes" icon={Customer} />
      <MenuButton link="/admin/pay" text="Pagos" icon={Payment} />
    </ul>
  </div>
);
