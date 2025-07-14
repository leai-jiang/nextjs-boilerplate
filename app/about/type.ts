import { BannerType } from "../type";

export interface PageDataType {
  banner: BannerType;
  intro: string;
  culture: string;   
  develop: {
    title: string;
    desc: string;
  }[]
}