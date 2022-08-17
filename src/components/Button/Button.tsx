import styles from './Button.module.scss';

type ButtonProps = {
  onClick(): void;
  children: React.ReactNode;
  fullHeight?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        `${styles.Button} ${props.fullHeight ? styles.Button_fullHeight : ''} ${props.disabled ? styles.Button_disabled : ''}`
      }
      {...props}
    />
  )
}

export default Button;