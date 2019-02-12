export class Category {
    categoryID:string;
    categoryName:string;
    createdDate:string;
    createdBy:string;
    constructor(
        res:any
    ){
        this.categoryID = res.categoryID;
        this.categoryName = res.categoryName;
        this.createdDate = res.createdDate;
        this.createdBy = res.createdBy;
    }
}
