# WebCodeChallenge

Web Code Challenge for Microsoft 2.26.22
Created By: Rob Kiesler 

## Technologies Used

For this project I chose to do it using CSS, JavaScript (JS), and HTML. I also leveraged bootstrap. This was done as a browser based project utilizing Visual Studio Code for my IDE of choice.

I have some experience using Android Studio, and debated whether to do this in that platform or use the technologies listed above. I think it would be really neat to carry this into Android Studio!

## Project Description and How-to-Run

Description: This project involves creating a sign-up form for a new user and subsequently, a confirmation page that will follow provided the user inputs pass the validation checks.

How-to-Run: The project contains six files: 1) README.MD 2) index.html 3) styles.css 4) success.html 5) script.js and 6) successScript.js

Step 1) Download and/or extract all files to a directory
Step 2) Right-click index.html file -> open with Chrome browser
Step 3) Enter a First Name, Email Address, and Password -> click "Sign Up"
Step 4) Read confirmation page -> "Sign In" button is displayed but without functionality 

## Methodology

My project evolved over several iterations. I started by trying to do everything in a few files, and even thought about doing a PHP file but didn't have ample time to setup a server. My final approach was:

1) Create an index.html file that contained all the appropriate elements to gather the users' inputs
2) Execute a script.js file to kick off a series of validation checks and upon successful execution, trigger the success.html file, which contains the 2nd view of the challenge with the welcome message
3) Next, the success.html file will call a separate script in the file successScript.js, which contains the stored user first name as well as their password, which is ultimately combined with the welcome message structured within the success.html file
4) Most of the formatting for colors and sizing is contained in the styles.css file - a few from Bootstrap and a few embedded

Note: My initial approach to handle validation was within the HTML code itself, for example, for First Name, I started by just adding "required", which works well, but is quite limited in its validation measures. So later I pulled this out into the script.js file to expand the checks it does

## Source Citing

Bootstrap: https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css; CDN Via JSDelivr

