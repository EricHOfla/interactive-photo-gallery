Interactive Photo Gallery
This project is part of a coding challenge to build an interactive photo gallery and solve two coding challenges using JavaScript. The interactive photo gallery is designed based on provided Figma designs and adheres to various requirements such as responsive design, Figma design accuracy, hover interaction, cross-browser compatibility, and code quality.

Table of Contents
Overview
Requirements
Setup Instructions
Implementation Details
Interactive Photo Gallery
Coding Challenges
Array Manipulation
String Transformation
Testing
Conclusion
Contact
Overview
The purpose of this project is to assess skills in HTML, CSS, and JavaScript, as well as problem-solving abilities. The project includes:

Building a responsive and interactive photo gallery.
Solving two coding challenges.
Requirements
Responsive Design: The photo gallery adapts seamlessly to different screen sizes and devices.
Figma Design Accuracy: The implementation matches the provided Figma designs pixel-perfectly.
Hover Interaction: Display additional details when a user hovers over a photo.
Cross-browser Compatibility: Ensure consistent performance across modern web browsers (Chrome, Firefox, Safari, Edge).
Code Quality: Write clean, readable, and well-structured code following best practices.
Setup Instructions
Clone the Repository:
sh
Copy code
git clone https://github.com/your-username/interactive-photo-gallery.git
Navigate to the Project Directory:
sh
Copy code
cd interactive-photo-gallery
Open the Project: Use your preferred code editor or IDE to open the project.
Implementation Details
Interactive Photo Gallery
The interactive photo gallery is built to be responsive and visually match the provided Figma designs. Key features include:

Image Thumbnail Navigation: Users can navigate through image thumbnails.
Full-size Image Viewing: Clicking a thumbnail displays the full-size image.
Hover Interaction: Additional details are shown on hover.
HTML Structure
The HTML file contains the necessary elements for the gallery, including a container for the thumbnails and a display area for the full-size image.

CSS Styling
CSS is used to style the gallery according to the Figma designs, ensuring responsiveness and aesthetic accuracy.

JavaScript Functionality
JavaScript is used to implement the interactivity, such as image navigation and hover interactions.

Coding Challenges
Coding Challenge 1: Array Manipulation
Problem Statement:
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Solution:
The solution uses a sliding window technique to achieve an O(n) time complexity.

File: Challenges/arrayMap.js

Coding Challenge 2: String Transformation
Problem Statement:
Given a string, transform it based on specific rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length is divisible by both 3 and 5, perform both operations.
Solution:
The solution checks the length of the string and applies the transformations accordingly.

File: Challenges/stringTransform.js

Testing
To test the implementation:

Open the index.html file in a web browser to view the interactive photo gallery.
Verify that the gallery is responsive and matches the Figma designs.
Use the browser console or a JavaScript environment to test the solutions in arrayMap.js and stringTransform.js with various inputs.
