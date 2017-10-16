import LayoutAdmin from 'components/LayoutAdmin';
import MenuDashboard from 'components/MenuDashboard';
import Dashboard from 'components/Dashboard';

export default () => (
  <LayoutAdmin>
    <div className="columns">
      <div className="column is-2">
        <MenuDashboard/>
      </div>
      <div className="column is-10">
        <Dashboard/>
      </div>
    </div>
  </LayoutAdmin>
)
