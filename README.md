## Images Web Server

1. npm install
2. npm run build
3. npm run start
4. npm run test

## Assumptions:

1. All images are in the same size or we will create a image croppoer for fitting the image to the div size for saving the aspect ratio of the image.
2. Server side is giving the images in pagination (for the infinite loader), as for now it is implemented at the cient side.

## Things to improve:

1. Infinite scroller is not good - for some reason its get stuck on the second page.
2. Responsive grid - because i havn't used any library for the UI, it is responsive but i don't think in the way you want it.
3. Probrarly I will changed the description area.

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