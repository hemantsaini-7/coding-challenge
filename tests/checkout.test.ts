import { Checkout } from "../src/checkout";
import { pricingRules } from "../src/pricingRules";

describe("Checkout", () => {
  test("It should calculate total correctly: 3 for 2 deal on Apple TV", () => {
    const co = new Checkout(pricingRules);
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).toBe("249.00");
  });

  test("It should calculate total correctly: For bulk discount on Super iPad", () => {
    const co = new Checkout(pricingRules);
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).toBe("2718.95");
  });

  test("It should calculate total correctly: If no items are scanned", () => {
    const co = new Checkout(pricingRules);
    expect(co.total()).toBe("0.00");
  });

  test("It should calculate total correctly: If only one item type is scanned", () => {
    const co = new Checkout(pricingRules);
    co.scan("mbp");
    co.scan("mbp");
    co.scan("mbp");
    expect(co.total()).toBe("4199.97");
  });

  test("It should calculate total correctly: For each Apple TV and Super iPad", () => {
    const co = new Checkout(pricingRules);
    co.scan("atv");
    co.scan("ipd");
    expect(co.total()).toBe("659.49");
  });
});
