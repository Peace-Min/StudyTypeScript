interface ShoppingItem{
    name : string;
    price : number;
    stock : number;
}

function getShoppingItem<T extends keyof ShoppingItem>(itemOption: T) :T {
    return itemOption;
}

getShoppingItem("name");