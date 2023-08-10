# Paint Application README
A simple JavaScript application that allows a user to paint on a blank canvas, using a range of colours and brush sizes. The user can also download their masterpiece to their computer. 

## Screenshot:
<img width="1917" alt="Screenshot 2023-08-10 at 10 53 54" src="https://github.com/tomtenniscourt/paint/assets/127535435/5b1446ff-2fbc-4ba9-b7d4-7b18df2720fb">


## Features:
- **Draw on a Blank Canvas:** Users can draw on the canvas by clicking and dragging the mouse cursor. The drawing is done using circular brush strokes.
- **Different Brush Sizes:** Users can choose from a range of brush sizes, including Extra Small, Small, Medium, Large, and Extra Large, to create different stroke thicknesses.
- **Colour Selection:** Users can pick a color using the color input, which updates the brush color in real-time.
- **Clear Canvas:** The "Clear Canvas" button allows users to erase the entire drawing on the canvas and start over.
- **Download Image:** The "Download Image" button enables users to save their drawing as a PNG image file on their device.

<img width="1917" alt="Screenshot 2023-08-10 at 10 54 48" src="https://github.com/tomtenniscourt/paint/assets/127535435/3784c8fa-564b-4b48-a992-15a13442fe02">


## How It Works

The paint application is built using React. The main component, `Paint`, manages the state and functionality of the app. Here's a breakdown of how the code works:

1. **Initialization:** The initial state of the `Paint` component includes properties such as `isPainting` (to track if the user is drawing), `brushSize` (to store the selected brush size), and `color` (to store the selected color).

2. **Canvas Setup:** The `componentDidMount` method adds event listeners to the canvas for handling mouse interactions. `startPainting` is called when the user presses the mouse button, indicating the start of drawing. `stopPainting` is called when the user releases the mouse button, indicating the end of drawing. `paint` is continuously called as the user moves the mouse, and it draws on the canvas if `isPainting` is true.

3. **Drawing Logic:** The `paint` method calculates the mouse position relative to the canvas, retrieves the 2D drawing context of the canvas, sets the brush color and size, and draws a circular stroke at the calculated position.

4. **User Interactions:** The component provides user interaction options: changing the brush size and selecting the color. When the brush size dropdown or color input changes, corresponding state values are updated.

5. **Clear Canvas:** Clicking the "Clear Canvas" button calls the `handleClearCanvas` method, which uses the canvas context to clear the entire canvas.

6. **Download Image:** Clicking the "Download Image" button triggers the `handleDownloadImage` method. This method creates a downloadable link for the canvas image in PNG format. When clicked, the link prompts the user to save the image to their device.

## Getting Started

To run the paint application locally:

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Open a web browser and go to `http://localhost:3000` to use the paint app.
