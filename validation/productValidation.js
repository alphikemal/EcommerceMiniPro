const productValidation={
	product: {
		productname: {required: true,message: 'Product Name field required'},
		price: {required: true,message: 'Price field Required.'},
		quantity: {required: true,message: 'Input valid Quantity.'},
		details: {required: true,message: 'Write some Details about the product.'}
	}
}
export default productValidation;