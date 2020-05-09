export class Supermarket {

    supermarketId: number;
    dimensionX: number;
    dimensionY: number;
    map: string;
    supermarketName: string;

    constructor(supermarketId?: number, dimensionX?: number, dimensionY?: number, map?: string, supermarketName?: string) {
        this.supermarketId = supermarketId;
        this.dimensionX = dimensionX;
        this.dimensionY = dimensionY;
        this.map = map;
        this.supermarketName = supermarketName;
    }

}
