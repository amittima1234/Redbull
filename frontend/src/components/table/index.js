import { useMemo, useState, useEffect } from "react";
import styles from "./index.module.css";
import { useTable } from 'react-table';
import { read, utils, writeFile } from 'xlsx';


const Table = () => {

    const [sheet, setSheet] = useState(null);

    useEffect(()  => {
        async function fetchData() {
            await fetch("http://localhost:5000/sheet")
        .then(result => {
            setSheet(result.data)
        })

    };
    fetchData();
    }, [sheet])

    const data = useMemo(() => [
        { col1: 'mosh', col2: '123.123', col3: 'jordan', },
        { col1: 'yos', col2: '13.23', col3: 'lebanon', },
        { col1: 'dos', col2: '53.223', col3: 'iran', },
        { col1: 'ros', col2: '68.95', col3: 'syria', },
        { col1: 'mosh', col2: '45.74', col3: 'egypt', },], [])

    const columns = useMemo(() => [
        { Header: 'Component', accessor: 'col1', },
        { Header: 'IP', accessor: 'col2', },
        { Header: 'Network', accessor: 'col3', },], [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    const headerGroup = headerGroups[0];

    return (
        <div>
            <div>
                { console.log(sheet) }
            </div>
            <table {...getTableProps()} className={styles.table}>
                <thead className={styles["table-header"]}>
                    <tr  {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                className={styles["table-header-cell"]}
                            >
                                {column.render('Header')}
                            </th>
                        ))}

                    </tr>
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (<tr className={styles["table-data-row"]} {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (<td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>)
                            })}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;
