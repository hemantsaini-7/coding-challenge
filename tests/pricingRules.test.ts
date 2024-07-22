import { pricingRules } from "../src/pricingRules";
import { productCatalog } from "../src/productCatalog";

describe("Pricing Rules", () => {
  test("It should apply Pricing Rules correctly: 3 for 2 deal for Apple TV", () => {
    expect(pricingRules.atv(3)).toBe(2 * productCatalog.atv.price);
    expect(pricingRules.atv(6)).toBe(4 * productCatalog.atv.price);
  });

  test("It should apply Pricing Rules correctly:: For bulk discount on Super iPad", () => {
    expect(pricingRules.ipd(5)).toBe(5 * 499.99);
    expect(pricingRules.ipd(4)).toBe(4 * productCatalog.ipd.price);
  });

  test("It should apply Pricing Rules correctly:: For both Apple TV and Super iPad", () => {
    expect(pricingRules.atv(1)).toBe(1 * productCatalog.atv.price);
    expect(pricingRules.ipd(1)).toBe(1 * productCatalog.ipd.price);
  });
});
