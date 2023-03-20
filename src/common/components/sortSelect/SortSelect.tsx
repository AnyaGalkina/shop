import React, { ChangeEvent, ReactElement } from 'react';

import { Box, FormControl, MenuItem, TextField } from '@material-ui/core';

import { setSortDirection } from '../../../features/productsPage';
import { SortDirectionType } from '../../../features/productsPage/products-reducer';
import { useAppDispatch } from '../../hooks';

export const SortSelect = (): ReactElement => {
    const dispatch = useAppDispatch();

    const onSortChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        dispatch(
            setSortDirection({ sortDirection: event.target.value as SortDirectionType }),
        );
    };

    return (
        <Box sx={{ minWidth: '180px', margin: '30px', maxHeight: '30px' }}>
            <FormControl
                fullWidth
                sx={{ minWidth: '120px', m: 1, maxHeight: '30px' }}
                size="small"
            >
                <TextField
                    size="small"
                    select
                    variant="outlined"
                    style={{ width: '100%' }}
                    onChange={onSortChange}
                >
                    <MenuItem value="desc"> Sort by price ↑ </MenuItem>
                    <MenuItem value="asc">Sort by price ↓ </MenuItem>
                </TextField>
            </FormControl>
        </Box>
    );
};
