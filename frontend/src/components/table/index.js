import React from "react";
import styles from "./index.module.css";
import { useTable } from 'react-table';

const Table = () => {

    const data = React.useMemo(() => [
        { col1: 'mosh', col2: '123.123', col3: 'jordan', },
        { col1: 'yos', col2: '13.23', col3: 'lebanon', },
        { col1: 'dos', col2: '53.223', col3: 'iran', },
        { col1: 'ros', col2: '68.95', col3: 'syria', },
        { col1: 'mosh', col2: '45.74', col3: 'egypt', },], [])

    const columns = React.useMemo(() => [
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

    return <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'papayawhip',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
};

export default Table;
