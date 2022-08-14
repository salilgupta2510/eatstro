
import create from 'zustand';
import { useGetItems } from '../agent';
import { FoodStoreState, Items } from './types';

const useStore = create<FoodStoreState>((set) => ({
    loading: false,
    error: false,
    items: [],
    setItems: (data: Items[]) => {
        set({items: data})
    }
}));

export default useStore

