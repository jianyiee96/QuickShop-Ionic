import { Category } from './category';

export class Item {

    category: Category;
    imagePath: string;
    itemDescription: string;
    itemId: number;
    itemName: string;
    itemPrice: number;
    itemQuantity: number;
    posX: number;
    posY: number

    checked: boolean;

    constructor(category?: Category, imagePath?: string, itemDescription?: string, itemId?: number, itemName?: string, itemPrice?: number, itemQuantity?: number, posX?: number, posY?: number) {
        this.category = category;
        this.imagePath = imagePath;
        this, itemDescription = itemDescription;
        this.itemId = itemId;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
        this.posX = posX;
        this.posY = posY;
    }

}
