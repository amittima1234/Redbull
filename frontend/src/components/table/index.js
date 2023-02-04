import React from "react";
import styles from "./index.module.css";
import TableRow from "../tableRow"
import TableHeader from "../tableHeader";


const data = [{ id: "1", component: "mosh", ip: "123.123", network: "jordan" },
{ id: "2", component: "yos", ip: "13.23", network: "lebanon" },
{ id: "3", component: "dos", ip: "53.223", network: "iran" },
{ id: "4", component: "ros", ip: "68.95", network: "syria" },
{ id: "5", component: "mos", ip: "45.74", network: "egypt" }];

const headers = ["component", "ip", "network"]


const Table = () => {

    return <div className={styles.table}>
        <div className={styles["table-header"]}>
            <TableHeader data={headers} />
        </div>
        <div className={styles["table-data"]}>
            {data.map(
                (rowData) => {
                    return <TableRow key={rowData.id} data={rowData} />
                })}
        </div>
    </div>

};

export default Table;
