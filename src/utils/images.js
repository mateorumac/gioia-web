// HERO SECTION
// Large, wide shot suitable for full-width background
export const heroImage = new URL('../assets/images/DSC_8301.webp', import.meta.url).href;

// ABOUT SECTION
// Studio interior/atmosphere photos
export const aboutStudio1 = new URL('../assets/images/IMG_4020.webp', import.meta.url).href;
export const aboutStudio2 = new URL('../assets/images/DSC_2498.webp', import.meta.url).href;

// CLASSES SECTION
// Training/exercise photos
export const classIndividual = new URL('../assets/images/DSC_3666.webp', import.meta.url).href;
export const classGroup = new URL('../assets/images/DSC_1521.webp', import.meta.url).href;

// TEAM SECTION
// Trainer portraits - adjust these based on actual photos of Sanja & Tea
export const teamSanja = new URL('../assets/images/sanjaIMG.webp', import.meta.url).href;
export const teamTea = new URL('../assets/images/TeaIMG.webp', import.meta.url).href;

// MEMBERS PAGE
export const membersHero = new URL('../assets/images/DSC_8337.webp', import.meta.url).href;

// GALLERY SECTION
// Curated selection of best studio/training photos (12 images)
export const galleryImages = [
  new URL('../assets/images/DSC_2500.webp', import.meta.url).href,
  new URL('../assets/images/DSC_2486.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3695.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3722.webp', import.meta.url).href,
  new URL('../assets/images/DSC_1535.webp', import.meta.url).href,
  new URL('../assets/images/DSC_1536.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3683.webp', import.meta.url).href,
  new URL('../assets/images/DSC_8287.webp', import.meta.url).href,
  new URL('../assets/images/DSC_8337.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3667.webp', import.meta.url).href,
  new URL('../assets/images/DSC_8382.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3707.webp', import.meta.url).href,
];

// CONTACT SECTION (optional - mini gallery)
export const contactGallery = [
  new URL('../assets/images/DSC_8238.webp', import.meta.url).href,
  new URL('../assets/images/DSC_8301.webp', import.meta.url).href,
  new URL('../assets/images/DSC_3690.webp', import.meta.url).href,
];

// Alternative hero options (if you want to change later)
export const heroAlternatives = [
  new URL('../assets/images/DSC_2518 2.webp', import.meta.url).href,
  new URL('../assets/images/DSC_1481.webp', import.meta.url).href,
  new URL('../assets/images/GIOIA 3.5.2025-11.webp', import.meta.url).href,
];

// MEMBER INFO PAGE — specific images used by MemberInfoPage sections
export const memberIntroImage = new URL('../assets/images/DSC_8338.webp', import.meta.url).href;
export const memberHelpImage = new URL('../assets/images/DSC_8159.webp', import.meta.url).href;

// ALL GALLERY IMAGES - dynamically includes every .webp in /images folder
const GALLERY_EXCLUDE = [
  "DSC_8160.webp",
  "DSC_8325.webp",
  "DSC_2489.webp",
  "DSC_3667.webp",
  "DSC_1536.webp",
  "5360ba76-aaf7-45f7-a796-5a529e367ea9.webp",
  "DSC_5550.webp",
  "DSC_5566.webp",
  "sanjaIMG.webp",
  "DSC_3662.webp",
  "DSC_2518 2.webp",
  "DSC_2498.webp",
  "DSC_8258.webp",
  "DSC_1394.webp",
  "DSC_8337.webp",
  "DSC_6024.webp",
  "DSC_8423.webp",
];
const _galleryModules = import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' });
const GALLERY_FIRST = "DSC_8445.webp";
export const allGalleryImages = Object.entries(_galleryModules)
  .filter(([path]) => !GALLERY_EXCLUDE.some((name) => path.endsWith(name)))
  .sort(([a], [b]) => {
    if (a.endsWith(GALLERY_FIRST)) return -1;
    if (b.endsWith(GALLERY_FIRST)) return 1;
    return 0;
  })
  .map(([, url]) => url);
