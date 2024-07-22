import { Checkout } from "./src/checkout";
import { pricingRules } from "./src/pricingRules";

console.log("--- Scenario 1 ---");
const co = new Checkout(pricingRules);
co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("vga");
co.total();

console.log("--- Scenario 2 ---");
const co2 = new Checkout(pricingRules);
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");
co2.total();
