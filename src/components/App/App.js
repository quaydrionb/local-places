import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../Footer/Footer";
import business from "./BussinesData";

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
  business,
  business,
];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Local Places</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
      <Footer />
    </div>
  );
};

export default App;
