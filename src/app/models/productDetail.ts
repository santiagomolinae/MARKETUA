import { Seller } from './seller';
import { Category } from './category';

export interface ProductDetail {
    id: string;
    name: string;
    price: number;
    brand: string;
    thumbnail: string;
    images: Array<any>;
    category: Category;
    rating: number;
    description: string;
    sold_units: number;
    seller: Seller;
    related_items: any;
}
