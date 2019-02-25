export class Category {
    categoryID: string;
    categoryName: string;
    createdDate: string;
    createdBy: string;
    updatedDate: string;
    updatedBy: string;
    constructor(
        res: any
    ) {
        this.categoryID = res.categoryID;
        this.categoryName = res.categoryName;
        this.createdDate = res.createdDate;
        this.createdBy = res.createdBy;
        this.updatedDate = res.updatedDate;
        this.updatedBy = res.updatedBy;
    }
}
