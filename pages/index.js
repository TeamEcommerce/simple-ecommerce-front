import LayoutUser from 'components/User/LayoutUser';
import LatestOffers from 'components/User/LatestOffers';
import Header from 'components/User/Header';

export default () => (
  <LayoutUser>
    <div className="container user-portal">
      <Header/>
      <LatestOffers/>
    </div>
  </LayoutUser>
)
