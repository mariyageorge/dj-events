// NEXT_PUBLIC should be appended because otherwise the env variable will not be available
// client side(on the browser)
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
