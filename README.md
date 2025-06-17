# The Odin Project - A Mock Shopping Cart.
This project follows the specifications within the curriculum of The Odin Project 
https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart


ReactJs API Data Fetching. Handling routing and navigation
----------------------------------------------------------

This React application, fetchs data from a third-party API. And uses React Router that provides a better user experience.
The url view is: https://shopping-cart-manelly67.netlify.app

Functionality
-------------

### CSS styles ###
Responsive design for screens of different sizes.<br>
Toggle theme light/dark<br>
Use of CSS modules, who generates custom classnames for each style and therefore prevents conflicts within components.

### Fetching data from an API ###
The useEffect hook is used to perform side effects in functional components when fetching data from an API.<br>
Is used the fetch() method with a try and catch syntax to handle any errors that may occur during the network request.

### Carousel ###
The homepage shows a carousel with its standard functionality. 
- displays items one at a time, allowing users to navigate between them.
- includes auto-rotation.
- includes navigation controls such as previous and next buttons.
- includes pagination dots to indicate the current slide.
- In this case the items are only text, but they can be easily adapted to display images.

### Navigation ###
- use of a routes file containing the path of the main components.
- use of the useOutlet hook for the rendering of child components.
- use of the useNavigate hook for navigate for each specific product.

### Store content and functions ###
The useState hook is used for update the components view based on user interaction.
- Has individual card elements for each product.
- Has the Add to Cart section with buttons for increment and decrement number of items.
- Adjusts the total amount to be paid based on the items added.
- Because is a mock shopping cart is not implementend the logic for purpose of payment.

### Scalable Display with Array Storage ###
The items for display were stored in an array, this allows for efficient storage and retrieval of data, making it simple to manage and scale the number of items displayed. This scalability is further enhanced by the ability to dynamically expand arrays as needed.

### Credits ###
- The third-party API url is fakestoreapi.com
- The app is deployed in Netlify





