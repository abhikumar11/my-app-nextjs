"use client";

import { Table } from "react-bootstrap";

export interface Column<T> {
     header: string;
     key: T | string;
     render?: (item: T) => React.ReactNode;
}
interface TableProps<T> {
     columns: Column<T>[];
     data: T[];
     className?: string;
}
const DataTable = <T extends { id: string | number }>({
     columns,
     data,
     className,
}: TableProps<T>) => {
    return(
    <div>
        <Table className={className}>
            <thead>
                <tr>
                  {columns.map((item,index)=>(
                    <th key={index}>{item.header}</th>
                  ))}
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row)=>(
                        <tr key={row.id}>
                            {
                                columns.map((col,idx)=>(
                                    <td key={idx}>{col.render?col.render(row):row[col.key as keyof T]as React.ReactNode}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </div>
    )
};
export default DataTable;
