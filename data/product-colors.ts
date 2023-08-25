type Color = {
    value: string,
    hex: string
}

type ProductColorsTypes = {
    [key: string]: Color
}


const ProductColors: ProductColorsTypes = {
    white: {
        value: 'white',
        hex: '#fff'
    },
    red: {
        value: 'red',
        hex: '#ff4e4e'
    },
    green: {
        value: 'red',
        hex: '#42cc42'
    },
    blue: {
        value: 'blue',
        hex: '#3295ec'
    },
    orange: {
        value: 'orange',
        hex: '#ffbe48'
    },
}

export default ProductColors