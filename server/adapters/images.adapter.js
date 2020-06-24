exports.toImageItem = (item) => {
	const {
		description,
		likes,
		url
	} = item;

	return {
		description,
		likes,
		url
	}
}