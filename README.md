# Pokemon_challenge

##  Features
-  *Random Image Generator*: Each refresh loads two random Pikachu images from the images_pika folder.  
-  *Dynamic Winner Display*: The app compares the two random images and updates the heading to show:
  - *Cute Pika_1* if the first image wins  
  - *Cute Pika_2* if the second image wins  
  - *Both are cute* if it’s a tie  
-  *Custom Styling*:  
  - Background color: dark theme (#222831)  
  - Fonts: Lobster for headings and Indie Flower for text  
  - Playful text shadows and vibrant colors for a cheerful look  
-  *Responsive Layout*: Images are displayed side by side with flexible sizing.  

##  Project Structure

├── index.html        # Main HTML file
├── index_1.js        # JavaScript logic for randomization
├── styles_1.css      # Styling for layout and design
└── images_pika/      # Folder containing Pikachu images (pika1.jpeg ... pika6.jpeg)


##  How It Works
1. On page load, JavaScript generates two random numbers between 1 and 6.  
2. Each number corresponds to a Pikachu image (pika1.jpeg to pika6.jpeg).  
3. The images are displayed in the browser.  
4. The heading updates dynamically to declare the winner.  

##  Demo Screenshot (example)
(Add a screenshot of your app here once hosted or running locally)  

##  Technologies Used
- *HTML5* for structure  
- *CSS3* for styling and fonts  
- *JavaScript (DOM manipulation)* for randomization and dynamic content
