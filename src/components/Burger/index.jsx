import { useDispatch, useSelector } from 'react-redux';
import { mobileMenuToggle } from '../../store/global';

const Burger = (props) => {
  const dispatch = useDispatch();
  const {className} = props

  const { mobileMenuOpen } = useSelector((store) => store.global);
  const classes = '🍔 Burger ' + (mobileMenuOpen ? 'menuMobActive ' : '') + (className || '');

  const burgerHandler = () => {
    dispatch(mobileMenuToggle({mobileMenuOpen: !mobileMenuOpen}));
  }

  return (
    <div onClick={burgerHandler} className={classes}>
      <ul className="Burger-menu">
        <li className="Burger-menu__bar"></li>
        <li className="Burger-menu__bar"></li>
        <li className="Burger-menu__bar"></li>
      </ul>
    </div>
  );
};

export default Burger;
