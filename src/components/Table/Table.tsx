import React from "react";
import './Table.css';
import { useState } from "react";

export interface Column<T> {
    title: string;
    render: (w: T) => string;
    compare: Comparator<T>;


}

type Comparator<T> = (a: T, b: T) => number


interface PropsType<T> {
    data: T[];
    columns: Column<T>[];
}

interface State<T> {
    fn: Comparator<T>,
    stateKey: boolean
}


export function Table<T>(props: PropsType<T>) {

    const [value, setValue] = useState<State<T> | null>(null);

    function sortColumn(compare:Comparator<T>) {

        setValue((prev) => {
            if (prev !== null && prev.fn === compare) {
                return {
                    fn: compare,
                    stateKey: !prev.stateKey
                }
            } else {
                return {
                    fn: compare,
                    stateKey: true

                }
            }
        })
    }

    const cloneData = props.data.concat();
    if (value !== null) {
        if (value.stateKey) {
            cloneData.sort(value.fn)
        } else {
            cloneData.sort(value.fn).reverse()
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    {props.columns.map((column) => {
                        return <th key={column.title} onClick={() => sortColumn(column.compare)}> {column.title}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {cloneData.map((word, i) => {
                    return (
                        <tr key={i}>
                            {props.columns.map((column) => {
                                return <td key={column.title}>{column.render(word)}</td>;
                            })}
                        </tr>

                    );
                })}
            </tbody>
        </table>
    );
}


export default Table;
