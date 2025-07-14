export interface BannerType {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export interface PageDataType {
  banner: BannerType;
  coreBusinesses: {
    icon: string;
    title: string;
    description: string;
  }[];
  coreCompetencies: {
    title: string;
    description: string;
  }[];
  clientBlocks: {
    value: string;
    label: string;
    img: string;
  }[];
}