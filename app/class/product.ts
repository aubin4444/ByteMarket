export class Product {

    constructor(
        public id : number,
        public name : string,
        public description : string,
        public price : number,
        public company : string,
        public quantity : number,
        public image : string,
        public category : string

    ){
        this.id = id
        this.description = description
        this.name = name
        this.price = price
        this.company = company
        this.quantity = quantity
        this.image = image
        this.category = category
    }
}