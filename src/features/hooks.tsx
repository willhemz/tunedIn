import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, DispatchFunc } from '../store';

export type AppDispatch = () => DispatchFunc;

export const useAppDispatch: AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
