import button from './MenuButton.css';

export default ({text, link, icon: Icon}) => (
  <li>
    <style jsx>{button}</style>
    <a href={link} >
      <Icon />
      <span>{text}</span>
    </a>
  </li>
  );
