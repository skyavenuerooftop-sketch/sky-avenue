// lib/config.ts

export const SITE_NAME = "SKY AVENUE";
export const CITY_NAME = "Kolkata";

export const PHONE_NUMBER_DISPLAY = "+91 9831710777";
export const PHONE_NUMBER_RAW = "+919831710777"; // used for tel: and WhatsApp
export const RESERVATION_EMAIL = "skyavenuerooftop@gmail.com";

export const RESTAURANT_ADDRESS = {
  street: "1,Circus Ave, Kalim Avenue Rooftop",
  city: "Kolkata",
  state: "West Bengal",
  postalCode: "700017",
  country: "India"
};

// Prefilled WhatsApp order link
export const WHATSAPP_ORDER_URL = `https://wa.me/${PHONE_NUMBER_RAW.replace(
  "+",
  ""
)}?text=Hi%20SKY%20AVENUE,%20I%27d%20like%20to%20place%20an%20order.`;

// If you use a real booking platform (OpenTable/EazyDiner/etc.), put its URL here
export const ONLINE_RESERVATION_PROVIDER_URL =
  "https://example.com/book/sky-avenue"; // replace with your real link