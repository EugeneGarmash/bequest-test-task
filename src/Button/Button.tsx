import styles from './Button.module.scss';

type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
  fullHeight?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`${styles.Button} ${styles.Button_fullHeight}`} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;