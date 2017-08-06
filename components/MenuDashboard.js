import styles from  './MenuDashboard.css';

export default () => (
  <div className="menu-panel">
    <style jsx>{styles}</style>
    <div className="menu-panel__user">
      <img src="./static/img/photo.jpg" />
      <span>Admin</span>
    </div>
    <div className="menu-panel__space"></div>
    <ul className="menu-panel__items">
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin">
          <i className="fa fa-tachometer" aria-hidden="true"></i>
          Dashboard
        </a>
      </li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/order">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          Orders
        </a>
      </li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/customer">
          <i className="fa fa-users" aria-hidden="true"></i>
          Customers
        </a>
      </li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/product">
          <i className="fa fa-tags" aria-hidden="true"></i>
          Catalog
        </a>
      </li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/pay">
          <i className="fa fa-credit-card" aria-hidden="true"></i>
          Pay
        </a>
      </li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/transport">
          <i className="fa fa-truck" aria-hidden="true"></i>
          Transport
        </a>
      </li>
      <li className="menu-panel__divider"></li>
      <li className="menu-panel__item">
        <a className="menu-panel__link" href="/admin/config">
          <i className="fa fa-cog" aria-hidden="true"></i>
          Config
        </a>
      </li>
    </ul>
  </div>
);
