import { createSlice } from "@reduxjs/toolkit";

const pizzasSlicer = createSlice({
  name: "pizzas",
  initialState: { pizza: [] },
  reducers: {
    addPizzas: (state, { payload }) => {
      // payload !== null ? state.pizza.push(payload) : (payload = []);


      if (payload !== null) {
        state.pizza.push(payload);
      }


    },
  },
});

export const { addPizzas } = pizzasSlicer.actions;
export default pizzasSlicer.reducer;
