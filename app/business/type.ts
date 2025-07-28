import { BannerType } from "../type";

export interface PageDataType {
  banner: BannerType;
  ict: {
    image: string;
    title: string;
    descs: string[];
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