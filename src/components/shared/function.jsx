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

export { shortHandler, findQuantity }