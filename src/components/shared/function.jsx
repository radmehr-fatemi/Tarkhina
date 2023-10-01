const shortHandler = text => {
    const splited = text.split("")
    const finalText = splited.slice(0, 18)
    return finalText
}

const findQuantity = (id, data) => {
    const findItem = data.find(item => item.id === id)
    if (!!findItem) {
        const quantity = findItem.quantity
        return quantity
    } else {
        return 0
    }
}

const discountCounter = ( price ,discount ) => {
    const counter1 = price * discount;
    const counter2 = counter1 / 100;
    const finalCounter = price - counter2
    return finalCounter
}

const totalCounter = data => {
    const itemsCounter = data.selectedItems.reduce(( acc ,cur ) => acc + cur.quantity ,0 )
    const total = data.selectedItems.reduce(( acc ,cur ) => acc + (cur.price * cur.quantity) * itemsCounter ,0 )
    const totalDiscount = data.selectedItems.reduce(( acc ,cur ) => acc + cur.discount ,0 )
    const totalPriceDiscount = data.selectedItems.reduce(( acc ,cur ) => acc + (total * totalDiscount) / 100 ,0 )
    return {itemsCounter ,total ,totalDiscount ,totalPriceDiscount}
}

const checkIsLiked = ( id ,data ) => {
    if( data.likedItems.find( item => item.id === id ) ) {
        return true
    } else {
        return false
    }
    
}

export { shortHandler, findQuantity ,discountCounter ,totalCounter ,checkIsLiked }