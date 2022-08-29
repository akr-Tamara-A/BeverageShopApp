import {createSlice} from '@reduxjs/toolkit';
import {ALCOHOLCATEGORIES} from '../../dummy_data/alcoholCategoriesData';

export const shopReducer = createSlice({
  name: 'shop',
  initialState: {
    categories: ALCOHOLCATEGORIES,
    selectedCategory: null,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = state.categories.find(
        item => item.title === action.payload,
      );
    },
  },
});

export const {selectCategory} = shopReducer.actions;

export const getCategories = state => state.shop.categories;
export const getCategory = state => state.shop.selectedCategory;

export default shopReducer.reducer;
