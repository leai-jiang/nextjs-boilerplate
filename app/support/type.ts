import { BannerType } from "../type";

export interface PageDataType {
  banner: BannerType;
  tab: { key: string; label: string }[];
  content: {
    img: string;
    title: string;
    desc: string;
    mail: string;
    reverse: boolean;
  }[];
  systemCerts: { label: string; desc: string }[];
  engineerCerts: { label: string }[];
}