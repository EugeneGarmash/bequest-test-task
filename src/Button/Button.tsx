import styles from './Button.module.scss';

type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={styles.Button}onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;