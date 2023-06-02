import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../services/product.service";
import { setMessage } from "./message";

// const user = JSON.parse(localStorage.getItem("user"));

const initialState = {};


export const createProduct = createAsyncThunk(
  "product/create",
  async ({ data }, thunkAPI) => {
    try {
      const response = await ProductService.create(data);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


export const retrieveProducts = createAsyncThunk(
  "product/retrieveAll",

  // async () => {
  //   const res = await ProductService.getAll();
  //   console.log(res.data);
  //   return res.data;
  // }

  async (thunkAPI) => {
    try {
      const response = await ProductService.getAll();
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }

);


export const retrieveProduct = createAsyncThunk(
  "product/retrieve",
  async ({ id }, thunkAPI) => {
    try {
      const response = await ProductService.get(id);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ data }, thunkAPI) => {
    try {
      const response = await ProductService.update(data);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async ({ data }, thunkAPI) => {
    try {
      const response = await ProductService.remove(data);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [retrieveProducts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [retrieveProduct.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(tutorial => tutorial.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteProduct.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

const { reducer } = productSlice;
export default reducer;