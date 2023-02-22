import React, { useMemo } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { DefaultColumnFilter } from './DefaultColumnFilter';

const Table = ({ data, columns }) => {
  const defaultColumn = useMemo(() => ({
    Filter: DefaultColumnFilter, // agrega un filtro por defecto
  }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters, // habilita la funcionalidad de filtros
    useSortBy // habilita la funcionalidad de ordenamiento de columnas
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <div>{column.canFilter ? column.render('Filter') : null}</div> {/* agrega un campo de búsqueda si el filtrado está habilitado */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table
