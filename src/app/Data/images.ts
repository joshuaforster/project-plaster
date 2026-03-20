export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/jack1.webp",
    alt: "Freshly plastered wall with smooth finish in Norwich home",
  },
  {
    src: "/images/jack2.webp",
    alt: "Plastering preparation and masking before skim coat",
  },
  {
    src: "/images/jack3.webp",
    alt: "Ceiling plaster repair with clean edges and even finish",
  },
  {
    src: "/images/jack4.webp",
    alt: "Finished re-skim on interior wall ready for painting",
  },
  {
    src: "/images/jack5.webp",
    alt: "Close-up of smooth plaster finish on renovated room wall",
  },
  {
    src: "/images/jack6.webp",
    alt: "Professional plastering work in progress on residential property",
  },
  {
    src: "/images/jack7.webp",
    alt: "Plastered room corner with sharp lines and tidy finish",
  },
  {
    src: "/images/jack8.webp",
    alt: "Before-and-after style plastering outcome on damaged wall",
  },
  {
    src: "/images/jack9.webp",
    alt: "Completed plastering project showcasing smooth, paint-ready surface",
  },
];

export const images = galleryImages.map((image) => image.src);
