import Search from "@/components/Button/Search";
import SupplementList from "@/components/SupplementList";
import HeaderComponent from "@/components/Button/HeaderComponent";
import NavigationBar from "@/components/Button/NavigationBar";
import styles from "@/styles/SupplementPage.module.css";
import { useState } from "react";

export default function SupplementPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.mobileContainer}>
      <div
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        <div className="settingHeader">
          <HeaderComponent pageName="Supplements" pageLink="/" />
        </div>
        <div className="buttonContainer">
          <div className={styles.searchContainer}>
            <Search label="Search Supplement" onSearch={handleSearch} />
          </div>
          <SupplementList searchQuery={searchQuery} />
        </div>
      </div>
      <div className={styles.navigationBarGlobal}>
        <NavigationBar
          pageName="Sleep"
          pageName2="Achievement"
          pageName3="Profile"
        />
      </div>
    </div>
  );
}
