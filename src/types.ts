export interface LocalizedString {
  es: string;
  en: string;
  it: string;
}

export interface Product {
  id: string;
  name: string;
  description: LocalizedString;
  price: number;
  imageUrl: string;
  popular?: boolean;
  category: 'pizza' | 'combo';
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  time: string;
  profilePhotoUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}
