const shortHandler = text => {
    const splited = text.split("")
    const finalText = splited.slice(0 ,20)
    return finalText
}

export { shortHandler }