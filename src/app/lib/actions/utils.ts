export function extractPrice(...elements: any) {
    for (const element of elements) {
        const priceText = element.text().trim()

        if (priceText) {
            let price = priceText.replace(/[^\d.]/g, '')

            if (price.endsWith('.')) {
                price += '00';
            }
            return price;
        }
    }

    return ''
}

export function extractCurrency(element: any) {
    const currencyText = element.text().trim().slice(-1)
    return currencyText ? currencyText : ''

}