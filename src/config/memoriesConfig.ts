import MEMORIES_BANNER_1x from "../assets/memories-banner-image@1x.webp";
import MEMORIES_BANNER_2x from "../assets/memories-banner-image@2x.webp";
import MEMORIES_BANNER_3x from "../assets/memories-banner-image@3x.webp";

import IMAGE_ONE_1X from "../assets/our-adventure/our-adventure-1@1x.webp";
import IMAGE_ONE_2X from "../assets/our-adventure/our-adventure-1@2x.webp";
import IMAGE_ONE_3X from "../assets/our-adventure/our-adventure-1@3x.webp";

import IMAGE_TWO_1X from "../assets/our-adventure/our-adventure-2@1x.webp";
import IMAGE_TWO_2X from "../assets/our-adventure/our-adventure-2@2x.webp";
import IMAGE_TWO_3X from "../assets/our-adventure/our-adventure-2@3x.webp";

import IMAGE_THREE_1X from "../assets/our-adventure/our-adventure-3@1x.webp";
import IMAGE_THREE_2X from "../assets/our-adventure/our-adventure-3@2x.webp";
import IMAGE_THREE_3X from "../assets/our-adventure/our-adventure-3@3x.webp";

import IMAGE_FOUR_1X from "../assets/our-adventure/our-adventure-4@1x.webp";
import IMAGE_FOUR_2X from "../assets/our-adventure/our-adventure-4@2x.webp";
import IMAGE_FOUR_3X from "../assets/our-adventure/our-adventure-4@3x.webp";

export const memoriesLandingConfig = {
  "1x": MEMORIES_BANNER_1x,
  "2x": MEMORIES_BANNER_2x,
  "3x": MEMORIES_BANNER_3x,
};

export const ourAdventureConfig = [
  {
    srcSet: {
      "1x": IMAGE_ONE_1X,
      "2x": IMAGE_ONE_2X,
      "3x": IMAGE_ONE_3X,
    },
    rotate: -6,
  },
  {
    srcSet: {
      "1x": IMAGE_TWO_1X,
      "2x": IMAGE_TWO_2X,
      "3x": IMAGE_TWO_3X,
    },
    rotate: -3,
  },
  {
    srcSet: {
      "1x": IMAGE_THREE_1X,
      "2x": IMAGE_THREE_2X,
      "3x": IMAGE_THREE_3X,
    },
    rotate: 6,
  },
  {
    srcSet: {
      "1x": IMAGE_FOUR_1X,
      "2x": IMAGE_FOUR_2X,
      "3x": IMAGE_FOUR_3X,
    },
    rotate: 12,
  },
];

export default ourAdventureConfig;
