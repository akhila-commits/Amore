export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tag: 'wedding' | 'birthday' | 'anniversary' | 'christmas' | 'other' | 'chocolate' | 'gift' | 'interior' | 'exterior' | 'party';
  alt: string;
  description: string;
  src: string;
  thumb?: string;
}

export const cakeCategories = [
  { id: 'all', label: 'All Creations' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'anniversary', label: 'Anniversary' },
  { id: 'other', label: 'Baby Shower & Novelty' }
] as const;

export const cakeGalleryItems: GalleryItem[] = [
  {
    id: 'cake-hero',
    title: 'Inuka Chocolate Strawberry Drip Cake',
    category: 'Cakes',
    tag: 'birthday',
    src: './Cakes/Hero.jpg',
    alt: 'Strawberry chocolate drip birthday cake with gold Happy Birthday topper and fresh strawberries',
    description: 'Rich vanilla butter sponge coated in silky buttercream, topped with thick dark chocolate ganache drip and farm-fresh strawberries.'
  },
  {
    id: 'cake-anniversary-couple',
    title: 'Golden Hearts Anniversary Cake',
    category: 'Cakes',
    tag: 'anniversary',
    src: './Cakes/16.jpg',
    alt: 'Happy Anniversary couple figurine cake with elegant white cream, gold dragees, and gold double hearts on black base',
    description: 'Classic romantic wedding anniversary cake with two interlocking gold hearts, pearl dragees, and tuxedo & gown figurine.'
  },
  {
    id: 'cake-dulaj-tiered',
    title: 'Dulaj Two-Tier Chocolate Extravaganza',
    category: 'Cakes',
    tag: 'birthday',
    src: './Cakes/3.jpg',
    alt: 'Two-tiered Dulaj birthday cake with rich chocolate drip, golden spheres, fresh strawberries, and Revello chocolates',
    description: 'Double tier celebration cake adorned with golden decorative spheres, fresh halved strawberries, and Revello chocolate pralines.'
  },
  {
    id: 'cake-lambeth-ribbon',
    title: 'Vintage Lambeth Pearl Ribbon Cake',
    category: 'Cakes',
    tag: 'anniversary',
    src: './Cakes/8.jpg',
    alt: 'Vintage Lambeth-style soft pink and white pearl ribbon cake on natural wood slice',
    description: 'Intricate vintage Lambeth over-piping in pastel pink and ivory with pink satin ribbons and edible pearl garlands.'
  },
  {
    id: 'cake-udari-peach',
    title: 'Udari Peach Blossom Cake',
    category: 'Cakes',
    tag: 'birthday',
    src: './Cakes/5.jpg',
    alt: 'Udari floral birthday and anniversary cake with peach rosettes and pearl dragees',
    description: 'Velvety buttercream cake crowned with delicate peach rosette swirls, gold leaf accents, and custom wooden script topper.'
  },
  {
    id: 'cake-gold-butterfly',
    title: 'Pastel Floral & Butterfly Dream',
    category: 'Cakes',
    tag: 'wedding',
    src: './Cakes/9.jpg',
    alt: 'Pastel pink and white butterfly and flower blossom cake with edible gold foil boundary',
    description: 'Split-tone pastel pink and ivory cake encircled by a jagged 24k-style edible gold leaf border and sculpted sugar butterflies.'
  },
  {
    id: 'cake-senuki-garden',
    title: 'Senuki Fairy Garden Swing Cake',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/7.jpg',
    alt: 'Two-tiered Senuki swinging doll floral garden celebration cake',
    description: 'Two-tier floral wonderland cake featuring a handcrafted swinging doll figurine surrounded by edible pastel blossoms.'
  },
  {
    id: 'cake-shenoli-kuromi',
    title: 'Shenoli 12 Fuzzy Character Cake',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/17.jpg',
    alt: 'Shenoli 12 purple textured furry novelty character birthday cake',
    description: 'Custom sculpted 3D novelty character cake with purple grass-piped texture, edible ears, and custom age candles.'
  },
  {
    id: 'cake-labubu',
    title: 'Nishel 8 Labubu Rainbow Drip Cake',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/6.jpg',
    alt: 'Nishel 8 colorful Labubu character cake with yellow drip and rainbow accents',
    description: 'Vibrant pink, blue, and yellow celebration cake featuring playful Labubu character toppers, candy dragees, and pastel butterflies.'
  },
  {
    id: 'cake-kalana-football',
    title: 'Kalana Football Champion Cake',
    category: 'Cakes',
    tag: 'birthday',
    src: './Cakes/4.jpg',
    alt: 'Kalana soccer football-themed birthday cake with grass piping and crown',
    description: 'Soccer enthusiast birthday cake with realistic buttercream grass turf, player silhouette, football crown, and custom lettering.'
  },
  {
    id: 'cake-sehas-construction',
    title: 'Sehas 4 Construction Mountain Cake',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/14.jpg',
    alt: 'Sehas 4 construction bulldozer chocolate mountain cake with candy boulders',
    description: 'Sculpted chocolate mountain cake with miniature toy bulldozers, chocolate rock boulders, and candy gravel.'
  },
  {
    id: 'cake-baby-shower',
    title: 'Senuki Christening & Baby Booties Cake',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/15.jpg',
    alt: 'Senuki baby shower and christening cake with sugar pink booties and pearl rosary',
    description: 'Pure white fondant celebration cake featuring handcrafted pink sugar baby shoes, satin ribbon bow, and delicate pearl rosary.'
  },
  {
    id: 'cake-bento-cupcakes',
    title: 'Bento Cake & Floral Cupcakes Set',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/13.jpg',
    alt: 'Bento celebration cake and matching floral cupcakes gift box set',
    description: 'Korean-style bento cake paired with delicate rosette-piped cupcakes, presented in a gourmet gift hamper box.'
  },
  {
    id: 'cake-avurudu-festive',
    title: 'Traditional Sinhala & Tamil New Year Cakes',
    category: 'Cakes',
    tag: 'other',
    src: './Cakes/11.jpg',
    alt: 'Traditional Sri Lankan New Year Avurudu oil lamp and betel leaf celebration cakes',
    description: 'Festive cultural celebration cakes honoring the traditional oil lamp (Pahana) and Betel leaf (Bulath kola) with golden greetings.'
  }
];

export const chocolateItems: GalleryItem[] = [
  {
    id: 'choc-almond-charm',
    title: 'Almond Charm Praline',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Almond Charm.jpg',
    alt: 'Handcrafted Revello Almond Charm chocolate cup with swirled filling and white chocolate drizzle',
    description: 'Finely roasted almonds crushed into silky hazelnut milk ganache, nestled in a fluted cocoa cup.'
  },
  {
    id: 'choc-cashew-cluster',
    title: 'Cashew Cluster Truffle',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Cashew Cluster.jpg',
    alt: 'Revello Cashew Cluster rich milk chocolate truffle loaded with roasted cashew pieces',
    description: 'Rich Sri Lankan cashew nuts folded into slow-tempered milk chocolate, creating a delightful crunchy texture.'
  },
  {
    id: 'choc-rose-praline',
    title: 'Rose Infused Praline',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Rose.jpg',
    alt: 'Artisan molded rose-shaped chocolate with delicate floral ganache',
    description: 'Delicately molded chocolate flower infused with fragrant rose essence and velvety white ganache.'
  },
  {
    id: 'choc-plain-milk-heart',
    title: 'Pure Milk Chocolate Heart',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Plain Milk Chocolate Heart.jpg',
    alt: 'Revello handcrafted heart-shaped milk chocolate with white chocolate drizzle',
    description: 'Signature heart-shaped solid milk chocolate tempered to glossy perfection with artisan striping.'
  },
  {
    id: 'choc-apricot-marzipan',
    title: 'Apricot & Marzipan Bonbon',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Apricot & Marzipan.jpg',
    alt: 'Gourmet apricot puree and almond marzipan coated in premium dark chocolate',
    description: 'Traditional almond marzipan combined with tangy dried apricot compote, enrobed in dark chocolate.'
  },
  {
    id: 'choc-coffee-delight',
    title: 'Coffee Delight Espresso Bonbon',
    category: 'Chocolates',
    tag: 'chocolate',
    src: './Handmade chocolates/Coffee Delight.jpg',
    alt: 'Rich roasted espresso ganache praline topped with chocolate coffee bean',
    description: 'Intense freshly roasted Arabica coffee ganache coated in smooth tempered milk chocolate.'
  }
];

export const giftBoxItems: GalleryItem[] = [
  {
    id: 'gift-assorted-gold',
    title: 'Assorted Gold Gift Pack (15 Chocolates)',
    category: 'Gift Boxes',
    tag: 'gift',
    src: './Gift boxes/Assorted Gold Gift Pack.jpg',
    alt: 'Revello Speciality Assorted Gold Gift Pack containing 15 finest handcrafted chocolates',
    description: 'A luxurious 216g gift box containing an assortment of Revello milk, dark, and white chocolate pralines.'
  },
  {
    id: 'gift-celebration',
    title: 'Celebration Gift Pack (15 Chocolates)',
    category: 'Gift Boxes',
    tag: 'gift',
    src: './Gift boxes/Celebration Gift Pack.jpg',
    alt: 'Revello Speciality Celebration chocolate box with gold hot-stamped branding',
    description: 'Classic chocolate-brown presentation box of 15 handcrafted confections, perfect for party favors and milestones.'
  },
  {
    id: 'gift-roses',
    title: 'Handcrafted Roses Chocolate Pack',
    category: 'Gift Boxes',
    tag: 'gift',
    src: './Gift boxes/Roses Pack.jpg',
    alt: 'Revello Speciality Roses Pack with floral vintage botanical illustration',
    description: 'Artistic 192g vintage gift box filled with 16 sculpted dark and white chocolate roses.'
  },
  {
    id: 'gift-signature',
    title: 'The Signature Collection (27 Chocolates)',
    category: 'Gift Boxes',
    tag: 'gift',
    src: './Gift boxes/Signature Gift Pack.jpg',
    alt: 'The Signature Collection luxury gift box featuring 27 gourmet handcrafted chocolates',
    description: 'A generous 416g master selection featuring 27 artisan chocolates, ideal for weddings, VIP gifts, and corporate celebrations.'
  },
  {
    id: 'gift-stories',
    title: 'Revello Stories Gift Box',
    category: 'Gift Boxes',
    tag: 'gift',
    src: './Gift boxes/Stories Pack.jpg',
    alt: 'Revello Stories illustrated gift box featuring cocoa tree artwork and gourmet bonbons',
    description: 'An illustrated keepsake box telling the origin story of pure chocolate craftsmanship.'
  }
];

export const venueGalleryItems: GalleryItem[] = [
  {
    id: 'venue-counter-patrons',
    title: 'Revello Chocolate Boutique Counter',
    category: 'Interior',
    tag: 'interior',
    src: './Interior photos/796808901_1080041781662207_2717720871074186448_n.jpg',
    alt: 'Patrons browsing the illuminated Revello display cases and boutique interior at Amore',
    description: 'Our welcoming storefront and display counter with wall-mounted Revello Speciality seal.'
  },
  {
    id: 'venue-party-seating',
    title: 'Private Party & Cafe Seating Lounge',
    category: 'Party',
    tag: 'party',
    src: './Interior photos/eb7de7a6-ea25-49ea-8c63-c5cd400a93b0.jpg',
    alt: 'Private party celebration seating area with patrons, ambient warm lighting, and illuminated Amore crest on wall',
    description: 'Dedicated air-conditioned bookable celebration area for family get-togethers and birthdays.'
  },
  {
    id: 'venue-chocolate-display',
    title: 'Artisan Chocolate Showcase',
    category: 'Interior',
    tag: 'interior',
    src: './Interior photos/796276087_1080041264995592_806912621322252294_n.jpg',
    alt: 'Illuminated multi-tier refrigerated glass display case packed with handcrafted Revello bonbons',
    description: 'A dazzling multi-tier display of freshly handcrafted pralines, bonbons, and gift packs.'
  },
  {
    id: 'venue-glass-entrance',
    title: 'Amore Glass Entrance Doors',
    category: 'Interior',
    tag: 'interior',
    src: './Interior photos/818813388_1080041121662273_807392801882615553_n.jpg',
    alt: 'Modern glass entrance doors with Revello Speciality gold logo lettering',
    description: 'Step into a world of chocolate and celebration on Main Street Kalutara South.'
  },
  {
    id: 'venue-counter-staff',
    title: 'Warm Hospitality & Service',
    category: 'Interior',
    tag: 'interior',
    src: './Interior photos/f258064c-241b-493b-b852-534d8b318cb3.jpg',
    alt: 'Amore friendly staff serving guests and packaging gift boxes at the main counter',
    description: 'Attentive, friendly service ready to help you select confections and plan cake orders.'
  },
  {
    id: 'venue-storefront-exterior',
    title: 'Amore Kalutara Storefront Signage',
    category: 'Exterior',
    tag: 'exterior',
    src: './Exterior photos/Location photo.jpg',
    alt: '250 Main Street Kalutara South storefront featuring the illuminated chef billboard and Amore sign',
    description: 'Our iconic storefront facade located at 250, Main Street, Kalutara South.'
  }
];
