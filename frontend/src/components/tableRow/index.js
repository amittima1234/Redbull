import React from "react";
import TableCell from "../tableCell"

const TableRow = ({ data }) => {
    return <div>
        {Object.entries(data).map(([cellKey, cellValue]) => {
            return <TableCell key={cellKey} data={cellValue} />
        })}
    </div>

};

export default TableRow;
