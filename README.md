## Images Web Server

1. npm install
2. npm run build
3. npm run start
4. npm run test

## Assumptions:

1. All images are in the same size or we will create a image croppoer for fitting the image to the div size for saving the aspect ratio of the image.
2. Infinite scroller - I have used inifinite scroller with pagination - if we want really infinite scroller i can always show the same images on the list, if that's was the meaning of the bonus point - i can quickly change it.

## Things to improve:

1. Responsive grid - when you resize the page, the items are getting smaller instead of keeping their size - need to modify and fix the css styles.
2. Probrarly I will changed the description area.
3. Move the pagination logic to the backend - create a cache that fetch once the images and than serve it to the client instead of making the pagination logic on the client.


## Project Structure

1. server
	* adapters - holds the adapters of the API's
	* controllers - holds the controllers of the API's
	* routes - define the API's end points
	* services - business logic
	* stores - holds the classes that make use in HTTP requests.

2. client
	* assets - holds the public assets: images, css, etc..
	* components
		* organisms - define our components.
		* pages - define the app pages.
	* stores - holds the classes that make use in HTTP requests.
	* utils
