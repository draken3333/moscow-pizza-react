import { createSlice } from "@reduxjs/toolkit";

const pizzasSlicer = createSlice({
  name: "pizzas",
  initialState: { pizza: [] },
  reducers: {
    addPizzas: (state, { payload }) => {
      if (payload !== null) {
        if (
          state.pizza.some(
            (el) => el.id === payload.id && el.size === payload.size
          )
        ) {
          return;
        } else {
          state.pizza.push(payload);
        }
      }
    },
  },
});

export const { addPizzas } = pizzasSlicer.actions;
export default pizzasSlicer.reducer;
