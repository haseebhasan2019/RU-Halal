import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
  } from '@mui/material';
  import { Delete, Edit } from '@mui/icons-material';

export default function RestaurantsTable ( {data, onDelete} ) {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'cuisine',
                header: 'Cuisine',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'campus',
                header: 'Campus',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'cost',
                header: 'Cost',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
            {
                accessorKey: 'halal',
                header: 'Halal Status',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
                },
            },
        ],
        [],
    );
    return <MaterialReactTable 
        enableEditing 
        columns={columns} 
        data={data}
        renderRowActions={({ row, table }) => (
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton color="error" onClick={() => onDelete(row.getValue('id'), row.getValue('name'))}>
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />;
};