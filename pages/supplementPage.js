import Search from "@/components/ui/Search";
import SupplementList from "@/components/feature/SupplementList";
import HeaderComponent from "@/components/ui/HeaderComponent";
import NavigationBar from "@/components/ui/NavigationBar";
import styles from "@/styles/SupplementPage.module.css";
import { useState } from "react";

export default function SupplementPage() {
  // State for search bar input
  const [searchQuery, setSearchQuery] = useState("");

  // Update search query as user types
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    // Main mobile container for fixed-width layout
    <div className={styles.mobileContainer}>
      {/* Scrollable main content area */}
      <div
        className="mainContainer"
        style={{
          overflowY: "auto",
          paddingBottom: 100,
          height: "100%",
        }}
      >
        {/* Header with back button and page title */}
        <div className="settingHeader">
          <HeaderComponent pageName="Supplements" pageLink="/" />
        </div>
        {/* Container for search bar and supplement list */}
        <div className="buttonContainer">
          {/* Search bar for filtering supplements */}
          <div className={styles.searchContainer}>
            <Search label="Search Supplement" onSearch={handleSearch} />
          </div>
          {/* List of supplement cards, filtered by search */}
          <SupplementList searchQuery={searchQuery} />
        </div>
      </div>
      {/* Fixed navigation bar at the bottom of the mobile container */}
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
