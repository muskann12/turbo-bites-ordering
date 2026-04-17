// Centralized PKR currency formatting
export function formatPKR(amount: number): string {
  return `Rs. ${Math.round(amount).toLocaleString("en-PK")}`;
}
