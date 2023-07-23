const buttonStyles = {
    width: 800,
    height: 200,
    font: 'monospace'
}

const buttonInfo = {
    text: 'Buy'
}

const defaultButton = {
    ...buttonInfo,
    ...buttonStyles
}

redButton = {
    ...defaultButton,
    color: 'red'
}

console.table(redButton)

// ... разделяет объект на свойства