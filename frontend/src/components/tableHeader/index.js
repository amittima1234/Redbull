import React from "react";
import styles from "./index.module.css";

const TableHeader = ({ data }) => {
    return <div className={styles["table-header"]}>
        {data.map((header) => {
            return <div className={styles["table-header-cell"]} key={header}>{header}</div>;
        })}
    </div>

};

export default TableHeader;
