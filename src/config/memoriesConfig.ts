const BUCKET_URL = import.meta.env.VITE_BUCKET_URL;

export const memoriesLandingConfig = {
  "1x": `${BUCKET_URL}memories-banner/memories-banner-image@1x.webp`,
  "2x": `${BUCKET_URL}memories-banner/memories-banner-image@2x.webp`,
  "3x": `${BUCKET_URL}memories-banner/memories-banner-image@3x.webp`,
};

export const ourAdventureConfig = [
  {
    srcSet: {
      "1x": `${BUCKET_URL}our-adventures/our-adventure-1@1x.webp`,
      "2x": `${BUCKET_URL}our-adventures/our-adventure-1@2x.webp`,
      "3x": `${BUCKET_URL}our-adventures/our-adventure-1@3x.webp`,
    },
    rotate: -6,
  },
  {
    srcSet: {
      "1x": `${BUCKET_URL}our-adventures/our-adventure-2@1x.webp`,
      "2x": `${BUCKET_URL}our-adventures/our-adventure-2@2x.webp`,
      "3x": `${BUCKET_URL}our-adventures/our-adventure-2@3x.webp`,
    },
    rotate: -3,
  },
  {
    srcSet: {
      "1x": `${BUCKET_URL}our-adventures/our-adventure-3@1x.webp`,
      "2x": `${BUCKET_URL}our-adventures/our-adventure-3@2x.webp`,
      "3x": `${BUCKET_URL}our-adventures/our-adventure-3@3x.webp`,
    },
    rotate: 6,
  },
  {
    srcSet: {
      "1x": `${BUCKET_URL}our-adventures/our-adventure-4@1x.webp`,
      "2x": `${BUCKET_URL}our-adventures/our-adventure-4@2x.webp`,
      "3x": `${BUCKET_URL}our-adventures/our-adventure-4@3x.webp`,
    },
    rotate: 12,
  },
];

export default ourAdventureConfig;
