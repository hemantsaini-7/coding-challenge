export type IProduct = {
    name: string;
    price: number;
  };
  
  export type IPricingRule = (quantity: number) => number;
  
  export type IPricingRules = {
    [sku: string]: IPricingRule;
  };
  