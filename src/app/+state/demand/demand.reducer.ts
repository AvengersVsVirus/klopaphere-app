import { Action, createReducer, on } from "@ngrx/store";
import { Products } from "./demand.model";
import { DemandActions } from "./demand.actions";

export interface DemandState {
  products: Products;
}

export const initialState: DemandState = {
  products: []
};

export const reducer = createReducer(
  initialState,
  on(DemandActions.productsLoaded, (state, action) => ({
    ...state,
    products: action.payload
  })),
  on(DemandActions.selectProduct, (state, action) => {
    return {
      ...state,
      products: [
        ...state.products.map(product =>
          action.payload.name === product.name
            ? {
                ...product,
                isSelected: !product.isSelected
              }
            : product
        )
      ]
    };
  })
);

export function demandReducer(state: DemandState, action: Action) {
  return reducer(state, action);
}
