import { BannerType } from "../type";

export interface PageDataType {
  banner: BannerType;
  news: {
    title: string;
    desc: string;
  }[];
  intro: string;
  culture: string;   
  develop: {
    title: string;
    desc: string;
  }[]
}