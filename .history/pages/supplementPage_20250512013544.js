import Search from "@/components/Button/Search";
import Link from "next/link";
import Image from "next/image";
import SupplementList from "@/components/SupplementList";
import HeaderComponent from "@/components/Button/HeaderComponent";
import styles from "@/styles/SupplementPage.module.css";

export default function SupplementPage() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <HeaderComponent pageName="Supplements" pageLink="/index" />
      </div>
      <div className={styles.searchContainer}>
        <Search label="Search Supplement" />
      </div>
      <SupplementList />
    </div>
  );
}
