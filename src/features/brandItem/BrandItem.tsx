import styles from "./BrandItem.module.scss";
import { IBrandItemProps } from "./IBrandItemProps";

export const BrandItem: React.FC<IBrandItemProps> = (props) => {
  return <div className={styles.brandItem}>{props.name}</div>;
};
