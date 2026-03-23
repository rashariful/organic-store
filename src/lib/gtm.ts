// src/lib/gtm.ts
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const GTM_ID = "GTM-PPPMF5X5";

// Initialize GTM 
export const initGTM = () => {
  if (typeof window === "undefined") return;

  if (document.getElementById("gtm-script")) return; // prevent duplicates

  // console.log("✅ GTM initialized with ID:", GTM_ID);

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  script.async = true;
  document.head.appendChild(script);
};

// Push event to dataLayer
export const pushToDataLayer = (event: string, data?: Record<string, any>) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];

  const payload = { event, ...data };
  // console.log("🟡 GTM Event Pushed:", payload);
  window.dataLayer.push(payload);
};
