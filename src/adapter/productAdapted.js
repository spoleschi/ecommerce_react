export const createProductAdapted = (doc) => {
    const data = doc.data();

    const productAdapted = {
        id: doc.id,
        title: data.title,
        category: data.category,
        price: data.price,
        stock: data.stock,
        galery: data.galery
    }
    return productAdapted;
}