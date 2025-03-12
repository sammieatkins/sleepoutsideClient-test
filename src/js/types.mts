export interface Color {
  ColorCode: string;
  ColorName: string;
}

export interface Brand {
  Id: string;
  LogoSrc: string;
  Name: string;
}

export interface Product {
  Id: string;
  NameWithoutBrand: string;
  Name: string;
  Image: string;
  SizesAvailable: Record<string, unknown>; 
  Colors: Color[];
  DescriptionHtmlSimple: string;
  SuggestedRetailPrice: number;
  Brand: Brand;
  ListPrice: number;
  FinalPrice: number;
}
