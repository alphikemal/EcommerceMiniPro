const merchantValidation={
	merchant: {
		name: {required: true,message: 'Name field required'},
		addres: {required: true,message: 'addres field Required.'},
		phone_number: {required: true,message: 'Input valid Number.'},
		details: {required: true,message: 'Write some Details about the Merchant.'}
	}
}
export default merchantValidation;