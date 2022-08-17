import styles from './ErrorText.module.scss'

const ErrorText = (props: { error: string}) => <p className={styles.PostcodeManager__errorText}>{props.error}</p>

export default ErrorText;