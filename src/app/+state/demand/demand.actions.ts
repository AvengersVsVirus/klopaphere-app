import { createAction, props } from "@ngrx/store";
import { ActionPayload, ErrorPayload } from "src/app/shared/store/action.model";
import { Products, Product } from "./demand.model";

const loadProdcuts = createAction("[Demand] Load Products");

const productsLoaded = createAction(
  "[Demand] Products Loaded",
  props<ActionPayload<Products>>()
);

const loadProdcutsFailed = createAction(
  "[Demand] Load Products Failed",
  props<ErrorPayload>()
);

const selectProduct = createAction(
  "[Demand] Select Product",
  props<ActionPayload<Product>>()
);

export const DemandActions = {
  loadProdcuts,
  productsLoaded,
  loadProdcutsFailed,
  selectProduct
};
