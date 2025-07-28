import { BannerType } from "../type";

export interface ProjectCase {
  title: string;
  imageUrl: string;
  detail: {
    content: string;
  }
};

export interface PageDataType {
  banner: BannerType;
  projectCases: ProjectCase[];
}