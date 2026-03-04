/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {

  let cupPrice;
  let coffePrice;
  let extrasPrice ;
  if(size === "small"){
    cupPrice = 3;
  }else if(size === "medium"){
    cupPrice = 4;
  }else if (size === "large"){
    cupPrice = 5;
  }else{
    return -1;
  }

  if(type === "regular"){
    coffePrice = 0;
  }else if(type === "latte"){
    coffePrice = 1;
  }else if(type === "cappuccino"){
    coffePrice = 1.50;
  }else if(type === "mocha"){
    coffePrice = 2;
  }else {
    return -1;
  }
  
  if(extras.extraShot && extras.whippedCream){
    extrasPrice = 0.50 + 0.75;
  }else if(extras.extraShot){
    extrasPrice = 0.75;
  }else if(extras.whippedCream){
    extrasPrice = 0.50;
  }else{
    extrasPrice = 0;
  }

  const finalPrice = cupPrice + coffePrice + extrasPrice;
  return (Math.round(finalPrice *100)/100);


  }
