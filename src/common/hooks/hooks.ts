import { ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { AppStateType } from '../../app/store';

export type AppDispatch = ThunkDispatch<AppStateType, unknown, any>;
export const useAppDispatch: () => AppDispatch = useDispatch;
