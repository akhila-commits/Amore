export interface MenuItem {
  id: string;
  name: string;
  category: 'bakery' | 'beverages';
  description: string;
  price?: string; // Optional: user can easily edit prices here
  tags?: string[];
  isPopular?: boolean;
  image?: string;
}

export const menuCategories = [
  { id: 'bakery', label: 'Savory & Bakery', icon: 'croissant' },
  { id: 'beverages', label: 'Artisan Beverages', icon: 'coffee' }
] as const;

export const cafeMenuItems: MenuItem[] = [
  // Savory & Bakery (as specified in the guide)
  {
    id: 'rolls',
    name: 'Artisan Rolls',
    category: 'bakery',
    description: 'Freshly baked golden rolls with rich, seasoned savory fillings and a light crisp crust.',
    price: '',
    tags: ['Freshly Baked', 'Savory'],
    isPopular: true,
    image: './Cafe/Rolls.jpg'
  },
  {
    id: 'patties',
    name: 'Flaky Puff Patties',
    category: 'bakery',
    description: 'Golden, butter-laminated pastry parcels stuffed with aromatic spiced fillings.',
    price: '',
    tags: ['Crispy Crust', 'Savory'],
    isPopular: true,
    image: './Cafe/Patties.jpg'
  },
  {
    id: 'pastries',
    name: 'Assorted Gourmet Pastries',
    category: 'bakery',
    description: 'Delicate puff pastry turnovers and savory twists baked fresh every morning.',
    price: '',
    tags: ['Chef Special'],
    isPopular: false
  },
  {
    id: 'choco-cake-slice',
    name: 'Decadent Chocolate Cake Slice',
    category: 'bakery',
    description: 'Rich layers of moist dark cocoa sponge frosted with velvety Revello chocolate fudge.',
    price: '',
    tags: ['Signature', 'Revello Chocolate'],
    isPopular: true
  },
  {
    id: 'pineapple-cake-slice',
    name: 'Tropical Pineapple Cake Slice',
    category: 'bakery',
    description: 'Tender vanilla sponge layered with caramelized tropical pineapple compote and airy cream.',
    price: '',
    tags: ['Fruit Sensation'],
    isPopular: false
  },
  {
    id: 'coffee-cake',
    name: 'Espresso Infused Coffee Cake',
    category: 'bakery',
    description: 'Aromatic coffee-infused sponge finished with a delicate cinnamon streusel swirl.',
    price: '',
    tags: ['Barista Pick'],
    isPopular: true,
    image: './Cafe/Coffee cake.webp'
  },

  // Beverages
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    category: 'beverages',
    description: 'Freshly pulled double espresso topped with rich micro-foam and a dusting of Revello cocoa.',
    price: '',
    tags: ['Hot', 'Espresso'],
    isPopular: true,
    image: './Cafe/Cappuccino.jpg'
  },
  {
    id: 'latte',
    name: 'Velvet Cafe Latte',
    category: 'beverages',
    description: 'Smooth steamed milk layered with a delicate shot of gourmet roast espresso.',
    price: '',
    tags: ['Hot', 'Smooth'],
    isPopular: false,
    image: './Cafe/Latte.jpg'
  },
  {
    id: 'hot-chocolate',
    name: 'Revello Rich Hot Chocolate',
    category: 'beverages',
    description: 'Signature thick, melted artisan Revello chocolate drink blended into velvety steamed cream.',
    price: '',
    tags: ['House Specialty', 'Pure Cocoa'],
    isPopular: true,
    image: './Cafe/Hot Chocolate.webp'
  }
];
