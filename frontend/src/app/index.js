import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import styles from "./index.module.css";
import EditableTable from "../components/table";

export default function App() {
  return (
    <div className={styles.app}>
      <EditableTable/>
    </div>
  );
}