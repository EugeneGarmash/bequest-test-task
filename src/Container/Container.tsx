import styles from "./Container.module.scss"

type ContainerProps = {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className={styles.Container}>{props.children}</div>
  )
};

export default Container;