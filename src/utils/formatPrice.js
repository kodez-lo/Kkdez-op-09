export function formatPrice(amount){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(amount)}
export function getDiscountedPrice(price,discountPercent){if(!discountPercent)return price;return Math.round(price*(1-discountPercent/100))}
