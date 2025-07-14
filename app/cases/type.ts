import { BannerType } from "../type";

export interface ProjectCase {
  title: string;
  imageUrl: string;
  detail: {
    background: string;
    process: string;
  }
};

export interface PageDataType {
  banner: BannerType;
  projectCases: ProjectCase[];
}