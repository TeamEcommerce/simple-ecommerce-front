import LayoutAdmin from 'components/LayoutAdmin';
import MenuDashboard from 'components/MenuDashboard';
import OrderTableContainer from 'containers/OrderPage/OrderTableContainer';

export default () => (
  <LayoutAdmin>
    <div className="columns">
      <div className="column is-2">
        <MenuDashboard/>
      </div>
      <div className="column is-10">
        <OrderTableContainer/>
      </div>
    </div>
  </LayoutAdmin>
)