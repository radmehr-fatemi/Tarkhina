const shortHandler = (text, number) => {
    const splited = text.split("")
    const finalText = splited.slice(0, number)
    return finalText
}

const findQuantity = (id, data) => {
    const findItem = data.find(item => item.id == id)
    if (!!findItem) {
        const quantity = findItem.quantity
        return quantity
    } else {
        return 0
    }
}

const discountCounter = (price, discount) => {
    const counter1 = price * discount;
    const counter2 = counter1 / 100;
    const finalCounter = price - counter2
    return finalCounter
}

const totalCounter = data => {
    const itemsCounter = data.selectedItems.reduce((acc, cur) => acc + cur.quantity, 0)
    const totalDiscount = data.selectedItems.reduce((acc, cur) => acc + ((cur.price -  discountCounter(cur.price, cur.discount)) * cur.quantity ), 0)
    const total = (data.selectedItems.reduce((acc, cur) => acc + (cur.price * cur.quantity) , 0)) - totalDiscount

    return { itemsCounter, total, totalDiscount }
}

const checkIsLiked = (id, data) => {
    if (data.likedItems.find(item => item.id == id)) {
        return true
    } else {
        return false
    }

}

const setStars = (stars, src1, src2) => {
    const image = []
    for (let i = stars; i > 0; i--) {
        image.push(<img src={src1} alt="star photo" />)
    }

    for (let i = stars; i < 5; i++) {
        image.push(<img src={src2} alt="star photo" />)
    }

    return [...image]
}

export { shortHandler, findQuantity, discountCounter, totalCounter, checkIsLiked, setStars }