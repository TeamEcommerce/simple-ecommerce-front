import LayoutUser from 'components/User/LayoutUser';
import LatestOffers from 'components/User/LatestOffers';
import HeaderTop from 'components/User/HeaderTop';
import Header from 'components/User/Header';

export default () => (
  <LayoutUser>
    <div className="container user-portal">
      <HeaderTop/>
      <Header/>
      <LatestOffers/>
    </div>
  </LayoutUser>
)
