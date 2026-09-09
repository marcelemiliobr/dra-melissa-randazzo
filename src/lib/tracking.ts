export type EventName = 'whatsapp_click' | 'form_submit' | 'phone_click' | 'map_click' | 'instagram_click';
declare global { interface Window { dataLayer?: Record<string, unknown>[]; } }
export function track(event: EventName, placement: string) {
  try { if (localStorage.getItem('analytics-consent') !== 'granted') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event, placement});
  } catch { /* Tracking must never prevent navigation. */ }
}
