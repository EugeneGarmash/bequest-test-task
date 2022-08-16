import styles from './Header.module.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';
import BurgerButton from './BurderButton';

const links = [
  {
    text: 'Life insurance',
    href: "https://bequest.com/life-insurance/"
  },
  {
    text: 'Wills',
    href: "https://bequest.com/wills"
  },
  {
    text: 'About',
    href: "https://bequest.com/about-us"
  },
  {
    text: 'Claims',
    href: "https://bequest.com/claims"
  },
  {
    text: 'Insights',
    href: "https://bequest.com/insights"
  },
  {
    text: 'Partnerships',
    href: "https://bequest.com/ourpartners"
  },
  {
    text: 'Contact',
    href: "https://bequest.com/contact-us",
  },
]

const Header = () => {

  const handleApply = () => {
  }

  return (
      <div className={styles.Header}>
        <Container>
          <div className={styles.Header__content}>
            <a className={styles.Hader__logo} href="https://bequest.com/">
              <img src="https://bequest.com/wp-content/themes/bequestwp/assets/img/logo.svg" alt="Bequest" />
            </a>

            <nav className={styles.Header__navigation}>
              <ul className={styles.Header__list}>
                {links.map(link => 
                  <li
                    key={link.href}
                    className={styles.Header__navigation_item}
                  >
                    <a
                      href={link.href}
                      className={styles.Header__navigationLink}
                      title={link.text}
                    >
                      <span>{link.text}</span>
                    </a>
                  </li>
                )}
              </ul>

              <Button onClick={handleApply}>APPLY NOW</Button>
            </nav>

            <BurgerButton />
          </div>
        </Container>
      </div>
  );
}

export default Header;