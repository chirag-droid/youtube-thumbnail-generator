export const svgToIcon = (svg: string) => {
    const data = Buffer.from(svg).toString('base64')
    return `data:image/svg+xml;base64,${data}`
}

export const isColor = (raw: string) => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(raw)
}
