
const { expect } = require('chai');
const { toImageItem } = require('../adapters/images.adapter');

describe('Images Web Server', () => {

	it('Validate Json Schema - pass', () => {

		const dummyData = {
			url: 'https://dummy.com',
			description: 'some description',
			likes: 100
		};
		const imageItem = toImageItem(dummyData);

		expect(imageItem).to.be.an('object');
		expect(imageItem).to.include.all.keys('url', 'likes', 'description');

		expect(imageItem.url).to.be.a('string')
		expect(imageItem.description).to.be.a('string')
		expect(imageItem.likes).to.be.a('number')

	});

	it('Validate Json Schema - failed', () => {

		const dummyData = {
			url: 'https://dummy.com',
			description: 'some description',
			likes: "number of likes"
		};
		const imageItem = toImageItem(dummyData);

		expect(imageItem).to.be.an('object');
		expect(imageItem).to.include.all.keys('url', 'likes', 'description');

		expect(imageItem.url).to.be.a('string')
		expect(imageItem.description).to.be.a('string')
		expect(imageItem.likes).to.be.a('number')

	});
});