const Product = require('./model/product')

class SampleDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                headingtext1: 'サンプル説明1',
                headingtext2: 'サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2',
                headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula p,'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A large phone with one of the best screens',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                headingtext1: 'サンプル説明1',
                headingtext2: 'サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2',
                headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula p,'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone standard',
                price: 299,
                description: '',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                headingtext1: 'サンプル説明1',
                headingtext2: 'サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2',
                headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula p,'
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heding1: 'サンプルテキスト1',
                heding2: 'サンプルテキスト2',
                heding3: 'サンプルテキスト3',
                headingtext1: 'サンプル説明1',
                headingtext2: 'サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2 サンプル説明2',
                headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula p,'
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
       await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
}

module.exports = SampleDb