# Star Rating Component - README

This is a simple star rating component that allows users to provide a rating by clicking on stars. The component consists of HTML, CSS, and JavaScript files. Below is a detailed explanation of each component and its functions.

### live-url: https://654f70058de2e128f5ae6c29--musical-nougat-49b915.netlify.app/

## Files

### 1. HTML (index.html)

The HTML file defines the structure of the document and includes the necessary meta tags, title, and references to external CSS and JavaScript files. It creates a container for the rating component, a heading, the star wrapper, and a paragraph displaying the current rating.

### 2. CSS (style.css)

The CSS file contains the styling for the star rating component:

- **`.star-wrapper`:** Styles the star container, making it a flexbox with space between stars, a border, and a specific height.
- **`.star-wrapper span`:** Styles each star, setting the font size and cursor.
- **`.rating-container`:** Styles the overall container using a grid layout.
- **`.heading` and `.current-rating`:** Styles the heading and current rating display, centering them.
- **`.yellow`:** Defines the color for the selected stars.

### 3. JavaScript (index.js)

The JavaScript file contains the logic for handling user interactions with the star rating:

- **`stars` and `currentRating`:** Selectors for the star container and the element displaying the current rating.
- **`filled`:** A variable to track the number of filled stars.

#### Functions

1. **`handleRatings(e)`**

   - **Purpose:** Updates the displayed rating when a user clicks on a star.
   - **Steps:**
     - Removes the "yellow" class from previously selected stars.
     - Adds the "yellow" class to the clicked star and stars before it.
     - Updates the `filled` variable and the displayed rating.

2. **`handleMouseEnter(e)`**

   - **Purpose:** Highlights stars when the mouse hovers over them.
   - **Steps:**
     - Removes the "yellow" class from previously highlighted stars.
     - Adds the "yellow" class to stars up to the one being hovered over.

3. **`handleMouseLeave()`**

   - **Purpose:** Resets the highlighted stars when the mouse leaves the star area.
   - **Steps:**
     - Removes the "yellow" class from all stars.
     - Adds the "yellow" class to stars up to the current rating.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone [repository_url]
   ```

2. **Include Files in Your Project:**
   - Copy the `index.html`, `style.css`, and `index.js` files into your project directory.

3. **Customize as Needed:**
   - Modify the HTML structure and styles in `style.css` to match your project's design.

4. **Integrate the Component:**
   - Include the `index.html` file in your project, and ensure correct references to CSS and JavaScript files.

5. **Test the Component:**
   - Open the HTML file in a web browser and test the star rating component by clicking on stars.

## License

This star rating component is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the need for a simple and customizable star rating solution.
- Thanks to the open-source community for valuable contributions.

Feel free to customize, share, and contribute to this star rating component! If you encounter issues or have suggestions for improvement, please open an issue or submit a pull request.