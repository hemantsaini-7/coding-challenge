import { IPricingRules } from "./types/interface";

export class Checkout {
  private pricingRules: IPricingRules;
  private items: { [sku: string]: number };

  constructor(pricingRules: IPricingRules) {
    this.pricingRules = pricingRules;
    this.items = {};
  }

  scan(item: string): void {
    if (!this.items[item]) {
      this.items[item] = 0;
    }
    this.items[item]++;
    console.log(`Scanned: ${item}. Current quantity: ${this.items[item]}`);
  }

  total(): string {
    let total: number = 0;
    for (let sku in this.items) {
      const quantity = this.items[sku];
      const pricingRuleMethod = this.pricingRules[sku];
      const itemTotal = pricingRuleMethod(quantity);
      console.log(
        `Item: ${sku}, Quantity: ${quantity}, Item Total: $${itemTotal.toFixed(
          2
        )}`
      );
      total += itemTotal;
    }
    console.log(`\nTotal amount: $${total.toFixed(2)} \n `);
    return total.toFixed(2);
  }
}
