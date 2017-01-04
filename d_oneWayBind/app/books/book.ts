/**
 *
 * Created by davidgudeman on 1/4/17.
 */

export interface IBook {
    id: string;
    name: string;
    productCode:  string;
    releaseDate: Date;
    description:  string;
    author: string;
    genre:  string;
    specifications:  string;
    inStock: boolean;
    price: number;
    imageUrl:  string;

}