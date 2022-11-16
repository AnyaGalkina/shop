import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppStatusType = 'idle' | 'loading';

export const initialState = {
    appStatus: 'idle' as AppStatusType,
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<{ appStatus: AppStatusType }>) {
            state.appStatus = action.payload.appStatus;
        },
    },
});

export const appReducer = slice.reducer;
export const { setAppStatus } = slice.actions;
