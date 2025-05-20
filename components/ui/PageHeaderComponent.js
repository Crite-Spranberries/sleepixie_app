import styles from "@/components/ui/PageHeaderComponent.module.css";
import Image from "next/image";
import Link from "next/link";

const PageHeaderComponent = ({ pageName }) => {
  return (
    <div className={styles.settingHeader}>
      <div className={styles.left}></div>
      <div className={styles.center}>
        <h3>{pageName}</h3>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default PageHeaderComponent;
