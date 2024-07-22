import { productCatalog } from "../src/productCatalog";

describe("Product Catalog", () => {
  test("should contain all required products", () => {
    expect(productCatalog).toHaveProperty("ipd");
    expect(productCatalog).toHaveProperty("mbp");
    expect(productCatalog).toHaveProperty("atv");
    expect(productCatalog).toHaveProperty("vga");
  });

  test("should have correct prices for products", () => {
    expect(productCatalog.ipd.price).toBe(549.99);
    expect(productCatalog.mbp.price).toBe(1399.99);
    expect(productCatalog.atv.price).toBe(109.5);
    expect(productCatalog.vga.price).toBe(30.0);
  });
});
