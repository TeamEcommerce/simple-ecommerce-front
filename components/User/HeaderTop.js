import FaUser from 'react-icons/lib/fa/user';

export default () => (
  <div className="columns header-top-portal">
      <div className="column is-four-fifths"></div>
      <div className="column is-2 has-text-centered">
        <a className="button is-outlined is-dark">
          <span className="icon">
            <FaUser/>
          </span>
          <span>Login</span>
        </a>
      </div>
  </div>
);
