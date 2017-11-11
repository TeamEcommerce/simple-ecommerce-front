import FaProduct from 'react-icons/lib/fa/shopping-bag';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import FaClose from 'react-icons/lib/fa/close';

export default () => (
  <div className="columns header-portal-container">
    <div className="column header-portal">

      <div className="columns">
        <div className="column is-5 company-name has-text-centered">
          <h1 className="title is-1">Simple Ecommerce</h1>
        </div>
        <div className="column is-5">
          <div className="control has-icons-left has-icons-right">
            <input className="input is-large" type="text" placeholder="Product" />
            <span className="icon is-medium is-left">
              <FaProduct/>
            </span>
            <span className="icon is-small is-right">
              <FaClose/>
            </span>
          </div>
        </div>
        <div className="column is-2 has-text-centered">
          <a className="button is-large is-outlined is-dark">
            <span className="icon">
              <FaShoppingCart/>
            </span>
            <span>0</span>
          </a>
        </div>

      </div>

    </div>
  </div>
);
