export default async function (): Promise<void> {
    const module = await import('@medusajs/medusa/dist/api/routes/store/orders/index')
// This path points to a file from the api route for the `/store/products` for example, this file contains all the differents consts that are exported and available to override

    Object.assign(module, {
        ...module,
        defaultStoreProductsFields: [...module.defaultStoreOrdersFields, 'deliveryDate'],
        allowedStoreProductsFields: [...module.allowedStoreOrdersFields, 'deliveryDate'],
    })
}