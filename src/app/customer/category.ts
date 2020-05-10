import { Item } from './item';

export class Category {

    categoryId: number;
    categoryName: string;

    items: Item[] = [];

    constructor(categoryId?: number, categoryName?: string) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }

}
