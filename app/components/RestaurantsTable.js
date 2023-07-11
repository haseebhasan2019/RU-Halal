import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
    MenuItem,
  } from '@mui/material';
  import { Delete, Edit } from '@mui/icons-material';

export default function RestaurantsTable ( {data, onDelete, onEdit, admin} ) {
    const costs = ["$", "$$", "$$$"];
    const campuses = ["Livingston", "College Avenue", "Busch", "Cook/Douglass"];
    const halalStatuses = ["HMS", "Hand-slaughter", "Halal", "Not Halal"];
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 100,
                enableColumnOrdering: false,
                enableEditing: false, //disable editing on this column
                enableSorting: false,
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
                muiTableBodyCellEditTextFieldProps: {
                    select: true, //change to select for a dropdown
                    children: campuses.map((campus) => (
                      <MenuItem key={campus} value={campus}>
                        {campus}
                      </MenuItem>
                    )),
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
                muiTableBodyCellEditTextFieldProps: {
                    select: true, //change to select for a dropdown
                    children: costs.map((cost) => (
                      <MenuItem key={cost} value={cost}>
                        {cost}
                      </MenuItem>
                    )),
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
                muiTableBodyCellEditTextFieldProps: {
                    select: true, //change to select for a dropdown
                    children: halalStatuses.map((halalStatus) => (
                      <MenuItem key={halalStatus} value={halalStatus}>
                        {halalStatus}
                      </MenuItem>
                    )),
                },
            },
        ],
        [],
    );
    return <MaterialReactTable  
        columns={columns} 
        data={data}
        initialState={{ columnVisibility: { id: false } }}
        enableHiding={false}
        enableEditing={admin}
        onEditingRowSave={onEdit}
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