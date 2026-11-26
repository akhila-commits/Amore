export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // international format without +
  displayWhatsApp: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    display: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  openingHours: {
    days: string;
    hours: string;
  }[];
  socials: {
    facebook: string;
    facebookCafe: string;
    facebookDreamCakes: string;
    tiktok: string;
    instagram: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Amore",
  tagline: "Celebrating Life's Little Moments.",
  description: "Amore is Kalutara's premier boutique destination featuring Revello Speciality Chocolates, Amore Cafe, Ice Cream Corner, Sama Dream Cakes studio, and private party celebrations.",
  phone: "+94777002044",
  displayPhone: "077 700 2044",
  whatsappNumber: "94777002044",
  displayWhatsApp: "077 700 2044",
  email: "info@amorekalutara.com",
  address: {
    street: "250, Main Street",
    city: "Kalutara South",
    region: "Western Province",
    country: "Sri Lanka",
    display: "250, Main Street, Kalutara South, Sri Lanka",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.385565545229!2d79.9575822!3d6.5864197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae23769c3a067ff%3A0x6b8ddfa0c2ba58c1!2sMain%20St%2C%20Kalutara!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",
    googleMapsDirectionsUrl: "https://maps.app.goo.gl/i3GJw5g5CaHuZ89R6",
    googleMapsProfileUrl: "https://maps.app.goo.gl/i3GJw5g5CaHuZ89R6"
  },
  openingHours: [
    { days: "Monday – Thursday", hours: "09:00 AM – 09:00 PM" },
    { days: "Friday – Saturday", hours: "09:00 AM – 10:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 09:30 PM" }
  ],
  socials: {
    facebook: "https://www.facebook.com/share/1FJDSpR9XA/?mibextid=wwXIfr",
    facebookCafe: "https://www.facebook.com/share/1FJDSpR9XA/?mibextid=wwXIfr",
    facebookDreamCakes: "https://www.facebook.com/share/19pTY9JCZ1/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@samadreamcakes?_r=1&_t=ZS-9BhU23ATOir",
    tiktokDreamCakes: "https://www.tiktok.com/@samadreamcakes?_r=1&_t=ZS-9BhU23ATOir",
    instagram: "https://instagram.com/AmoreKalutara"
  }
};
