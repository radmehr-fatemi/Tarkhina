const shortHandler = text => {
    const splited = text.split("")
    const finalText = splited.slice(0 ,18)
    return finalText
}

export { shortHandler }