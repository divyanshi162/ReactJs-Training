import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img  alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;