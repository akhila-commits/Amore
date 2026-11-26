import { siteConfig } from '../data/site';

export interface CakeInquiryData {
  fullName: string;
  phone: string;
  email?: string;
  occasion: string;
  dateNeeded: string;
  flavorPreference?: string;
  servings?: string;
  designNotes?: string;
}

export interface PartyBookingData {
  fullName: string;
  phone: string;
  email?: string;
  eventType: string;
  preferredDate: string;
  preferredTime?: string;
  guestCount: number;
  addCustomCake?: boolean;
  specialRequests?: string;
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildCakeInquiryWhatsApp(data: CakeInquiryData): string {
  const lines = [
    `*🎂 NEW CAKE ORDER INQUIRY — AMORE*`,
    `----------------------------------------`,
    `*Customer:* ${data.fullName}`,
    `*Phone/WhatsApp:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Occasion:* ${data.occasion}`,
    `*Date Needed:* ${data.dateNeeded}`,
    data.flavorPreference ? `*Flavor / Filling:* ${data.flavorPreference}` : null,
    data.servings ? `*Estimated Servings / Size:* ${data.servings}` : null,
    data.designNotes ? `*Design Ideas / Cake Text:* ${data.designNotes}` : null,
    `----------------------------------------`,
    `_Sent via Amore Website inquiry form._`
  ].filter(Boolean);

  return buildWhatsAppLink(lines.join('\n'));
}

export function buildPartyBookingWhatsApp(data: PartyBookingData): string {
  const lines = [
    `*🎉 PRIVATE PARTY AREA INQUIRY — AMORE*`,
    `----------------------------------------`,
    `*Customer:* ${data.fullName}`,
    `*Phone/WhatsApp:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Event Type:* ${data.eventType}`,
    `*Preferred Date:* ${data.preferredDate}`,
    data.preferredTime ? `*Preferred Time:* ${data.preferredTime}` : null,
    `*Approx. Number of Guests:* ${data.guestCount}`,
    `*Include Custom Cake:* ${data.addCustomCake ? 'Yes, please!' : 'No / Undecided'}`,
    data.specialRequests ? `*Special Requests / Theme:* ${data.specialRequests}` : null,
    `----------------------------------------`,
    `_Note: This is an inquiry request awaiting confirmation._`
  ].filter(Boolean);

  return buildWhatsAppLink(lines.join('\n'));
}

export function buildGiftPackWhatsApp(): string {
  const message = `Hello Amore & Revello team! 🍫\n\nI am interested in your *Revello Chocolate Gift Packs* and custom gift boxes. Could you please share options, availability, and pricing with me? Thank you!`;
  return buildWhatsAppLink(message);
}

export function buildIceCreamWhatsApp(): string {
  const message = `Hello Amore! 🍦\n\nI would love to learn more about your *Customized Ice Cream creations* (flavors, toppings, and options available today). Thank you!`;
  return buildWhatsAppLink(message);
}
