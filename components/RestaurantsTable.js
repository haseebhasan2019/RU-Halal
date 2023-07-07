import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

export default function RestaurantsTable ( {data} ) {
    const columns = useMemo(
        () => [
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
    return <MaterialReactTable columns={columns} data={data}/>;
};