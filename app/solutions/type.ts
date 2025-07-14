import { BannerType } from "../type";

export type SolutionDetail = {
  title: string;
  intro: string;
  img: string;
  detail: string;
}

export type SolutionType = {
  key: string;
  category: string;
  desc: string;
  cases: SolutionDetail[];
};

export interface PageDataType {
  banner: BannerType;
  solutions: SolutionType[]
}
