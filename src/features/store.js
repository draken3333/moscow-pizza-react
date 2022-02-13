import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './pizzas/pizzasSlicer';

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  }
});

export default store;