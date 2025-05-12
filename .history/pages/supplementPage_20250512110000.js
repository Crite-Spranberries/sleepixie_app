import Search from "@/components/Button/Search";
import Link from "next/link";
import Image from "next/image";
import SupplementList from "@/components/SupplementList";
import HeaderComponent from "@/components/Button/HeaderComponent";
import styles from "@/styles/SupplementPage.module.css";
import { useState } from "react";

export default function SupplementPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.mobileContainer}>
      <div className={styles.mainContainer}>
        <div>
          <HeaderComponent pageName="Supplements" pageLink="/" />
        </div>
        <div className={styles.searchContainer}>
          <Search label="Search Supplement" onSearch={handleSearch} />
        </div>
        <SupplementList searchQuery={searchQuery} />
      </div>
    </div>
  );
}
