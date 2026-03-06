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
export const memberIntroImage = new URL('../assets/images/DSC_3667.webp', import.meta.url).href;
export const memberHelpImage = new URL('../assets/images/DSC_8159.webp', import.meta.url).href;

// ALL GALLERY IMAGES - dynamically includes every .webp in /images folder
const _galleryModules = import.meta.glob('../assets/images/*.webp', { eager: true, import: 'default' });
export const allGalleryImages = Object.values(_galleryModules);
