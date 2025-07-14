import { BannerType } from "../type";

export interface PageDataType {
  banner: BannerType;
  ict: {
    category: string;
    subCategories: string[];
  }[];
  infoSecurity: {
    title: string;
    subtitles: string[];
    solutions: string[];
    categories: {
      category: string;
      subCategories: string[];
    }[];
    services: string[];
  },
  inteQualification: {
    title: string;
    desc: string;
  }[];
}