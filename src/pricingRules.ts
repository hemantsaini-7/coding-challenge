import { productCatalog } from "./productCatalog";
import { IPricingRules } from "./types/interface";

export const pricingRules: IPricingRules = {
  ipd: (quantity) =>
    quantity > 4 ? quantity * 499.99 : quantity * productCatalog.ipd.price,
  atv: (quantity) => {
    const freeItems = Math.floor(quantity / 3);
    return (quantity - freeItems) * productCatalog.atv.price;
  },
  mbp: (quantity) => quantity * productCatalog.mbp.price,
  vga: (quantity) => quantity * productCatalog.vga.price,
};
