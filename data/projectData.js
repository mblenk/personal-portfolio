export const projectData = [{
    index: 4,
    project: "full",
    title:"Golf Handicap Calculator",
    stack: ["HTML", "CSS", "Javascript"],
    useage:"An online tool for calculating your golf handicap based on up to 20 scores.",
    desc: "This was my first project accessing the DOM to create a fully functioning web application. Having learned HTML, CSS and Javascript in isolation from each other, this project allowed me to understand how they work together to create a website and add Javascript functionality to it. Calculating a golf handicap involves a lot of formulas and manipulating a dataset so it was the perfect challenge to test my ability with Javascript in receiving data from a form and processing it through multiple functions to produce the handicap index.",
    challenges: "This was my first attempt using CSS on a full website and using a hero image with a ::before was an ambitious challenge which took a lot of trial and error with scaling and maintining position of both elements on scrolling. The Javascript functionality took a lot of work to create various functions to process the form data and my first attempt was a bit messy with different scripts importing data from various sources. Eventually I managed to make it more modular with one script per form that actually output data to the page with other scripts just exporting functions that this main script could use to process the data.",
    learned: "Creating and styling a webpage as well as accessing and working with the DOM to add Javascript functionality.",
    githubLink: "https://github.com/mblenk/golf-handicap-calculator",
    videoLink:"https://youtu.be/Yc_YanZIl4U",
    imageLink:"/golf-hcap-calc.png",
    url: "https://golf-handicap-calculator.vercel.app",
    host: "Vercel"
},
{
    index: 3,
    project: "full",
    title:"Overtime Tracker",
    stack: ["HTML", "CSS", "Javascript", "React", "Firebase"],
    useage:"This is an app that allows the user to track their hours and see how much overtime/TOIL they have accrued.",
    desc: "For my first time creating a full-stack application I decided to work with Firebase rather than MERN due to the easier interfaces and reduced backend set-up it offers. This allowed me to understand the best way to link a frontend page to a backend server and handle/display the data exchanged between the two. It was a good foundation to then start working with the MERN stack on a later project. ",
    challenges: "Working with Firebase is very intuitive but it showed me the importance of defining how I want to store data as I had to change the structure of my data a number of times before settling on the final solution. Thankfully the MongoDB model makes this much simpler in MERN but I was much more focussed on correctly setting up that model when I moved onto using Mongo. Implementing a date filter when displaying the user's historical data was difficult but I managed to achieve this by separating the data rendering into a separate component. This meant that the filter options were a level higher than the rendering and I could pass filtered data into the rendering component dependent on which filter options had been selected.",
    learned: "How to work with Firebase but more importantly how to develop a full-stack application rather than just a front-end with static data.",
    githubLink: "https://github.com/mblenk/toil-tracker",
    videoLink:"https://youtu.be/B__7JjfMpk8",
    imageLink: "/toiltracker.png",
    url: "https://toil-tracker.web.app/",
    host: "Firebase"
},
{
    index: 2,
    project: "full",
    title:"Golf Handicap Tracker",
    stack: ["HTML", "CSS", "Javascript", "React", "NodeJS", "Express", "MongoDB", "JWT Auth"],
    useage:"This app is an extension of my Golf Handicap Calculator that allows users to store their scores and update their handicap every time they play.",
    desc: "This was my first MERN stack application using JWT Auth. I took advantage of my earlier golf handicap calculator project because I thought that all the data calculation code would be transferable which would allow me to focus on actually learning on the MERN stack rather than spending lots of time on using Javascript to manipulate data. To some extent this was true but I had to do some reconfiguring to make it compatible with a React application, as well as fit the slightly different purpose of this more advanced concept.",
    challenges: "Setting up the JWT Auth was a complicated process for my first time as I wanted to protect my routes with the JWT Token rather than just using the React Context API with a user object to move between pages. Using middleware to protect routes as well as checking whether there was a valid token each time the page refreshed solved the problem, giving the page full JWT Auth functionality. Having thought that I would be able to take the code from my earlier project to calculate the handicap I quickly discovered that it needed a lot of changes to work with ever-changing data coming from a database rather than a single static dataset from a <form> element. The most difficult issue I found was when a user entered a score with an out of sequence date (i.e. they already had more recent rounds in the system). In this scenario I needed to update their handicap history to reflect the change as it was at the time and discount any later rounds in the calculation. To do this, I had to split the dataset that came from the database into rounds earlier and rounds later than the submitted date. I then had to update the handicap changes for the new round and then again for every round with a more recent date so that it was a true reflection of the user's handicap index history.",
    learned: "How to work with the MERN stack and JWT Auth.",
    githubLink: "https://github.com/mblenk/golf-handicap-store",
    videoLink:"https://youtu.be/BalHbmQYI5w",
    imageLink:"/golf-hcap-store.png",
    url: null,
    host: "Not currently hosted"
},
{
    index: 5,
    project: "full",
    title:"Portfolio Page",
    stack: ["HTML", "CSS", "Javascript", "NextJS", "Tailwind"],
    useage:"This is my personal website to showcase myself as a developer.",
    desc: "This was the first time I had used NextJS having previously focussed on React for other projects. It was also the first project that I really concentrated on styling with more animated content. As a result my skill with CSS vastly improved and allowed me to go back to my earlier projects and make substantial improvements.",
    challenges: " This was also my first time trialling GSAP for animations and effects so I had to experiment with different options to get the stlying right.",
    learned: "How to adapt to NextJS from React along with a much greater understanding of CSS and styling/animation.",
    githubLink: "#",
    videoLink:null,
    imageLink: "/portfolio.png",
    url: "/",
    host: "Vercel"
},
{
    index: 15,
    project: "mini",
    title:"Sudoku Game",
    stack: ["HTML", "CSS", "Javascript"],
    useage:"This is a sudoku puzzle app with 4 levels of difficulty for users to attempt.",
    desc: "This was a project intended to test my ability to solve complex problems with Javascript by being able to check a sudoku solution.",
    challenges: "Checking a sudoku solution involves checking 9 rows, 9 columns and 9 cells, all made up of 9 numbers. This means a huge number of possibilities to check. I also wanted to include a timer function that would stop as soon as the last digit was entered rather than a submit button which meant keeping track of each cell as it was entered. This caused issues when it came to using the undo and clear buttons as I had to adjust that count accordingly. Tracking the time elapsed also raised some challenges in recording the final time elapsed at the end of the puzzle as well as being able to pause and unpause the game without the timer continuing.",
    learned: "This was a real test of being able to work with arrays and work through the data they contain. This was also my first time working with the Date object which was a valuable learning experience.",
    githubLink: "https://github.com/mblenk/sudoku-puzzle-game",
    videoLink:"https://youtu.be/2KC9GHn3Qds",
    imageLink:"/sudoku.png",
    url:"https://sudoku-puzzle-game.vercel.app",
    host: "Vercel"
},
{
    index: 16,
    project: "mini",
    title:"Calculator",
    stack: ["HTML", "CSS", "Javascript"],
    useage:"This is a clone of the Apple Calculator app",
    desc: "This was a project to learn about working with multiple DOM elements and combining their inputs using Javascript to produce a result.",
    challenges: "Differentiating between the different types of buttons was tricky as I needed to add Event Listeners according to whether the button was a number or symbol. I then needed the screen to reflect what was being input and update each time a stage of the calculation was input. I managed this by separating the button types into arrays with querySelectorAll to assign the Event Listeners and then keeping track of what the previous button to be pressed was. That allowed me to check whether another number/digit was being entered or a symbol meaning the next stage of the calculation was in progress.",
    learned: "Interacting with multiple DOM elements and receiving the values from these to a Javascript function in order to calculate a value.",
    githubLink: "https://github.com/mblenk/calculator-app",
    videoLink:"https://youtu.be/G97Dqs3yP0A",
    imageLink:"/calculator.png",
    url:"https://calculator-app-eight-gamma.vercel.app",
    host: "Vercel"
},
{
    index: 17,
    project: "mini",
    title:"Wordle",
    stack: ["HTML", "CSS", "Javascript", "React"],
    useage:"This is a clone of the Wordle game.",
    desc: "This was a project to learn about using React and understanding Components and State.",
    challenges: "In hindsight, React was probably not the best way to create a clone of this game as it involved a lot of state passing between components. Vanilla JS would probably be much simpler to use for this but it was a valuable learning experience to use React for this sort of functionality. It took me a lot of trial and error to understand implementing custom classes depending on whether the letters were correct but in the wrong place or correct and in the right place but I was able to solve this with conditional classes based on an array containing that cell's reference.",
    learned: "Using React and creating state within components before passing this as props to other components.",
    githubLink: "https://github.com/mblenk/wordle-clone",
    videoLink:"https://youtu.be/siZ-paJ-DDc",
    imageLink:"/wordle-clone.png"
},
{
    index: 1,
    project: "full",
    title:"Fantasy Football Statistics",
    stack: ["HTML", "CSS", "Javascript", "React", "NodeJS", "Express", "MongoDB", "JWT Auth", "Tailwind", "AWS Lambda"],
    useage:"A web application for calculating and displaying statistics for a Fantasy Football Draft League",
    desc: "This is a MERN stack app designed to interact with the third-party Fantasy Premier League API to extract data and then use this to calculate statistics for a Fantasy Football Draft league. The backend is hosted with DigitalOcean and the frontend with Vercel. There is also a Lambda function running on AWS to update the data daily. Initially this a bespoke version that uses the data for just one league that I take part in. I am working on expanding this to be applicable to any league so that anyone can track their league's stats in the same way.",
    challenges: "Having already created a MERN stack app with JWT auth I was able to re-use a lot of the functionality for logging in/logging out. The main challenges were in creating backend functionality that would receive requests from my Frontend and then send the applicable requests to the third-party API before then handling that data. There are multiple endpoints offered by the FPL API and the data is not in a format that could be easily displayed in a Front End. I had to create multiple functions to handle this data and reconfigure it to a format that could be posted to by database and also sent to the React app to display. The biggest challenge came in hosting the application. Initially I hosted the backend through AWS Elastic Beanstalk. I created an instance with a working code pipeline and had the required certificates attached to my Load Balancer to enable HTTPS connections. Unfortunately, the FPL API kept blocking requests from my server (403 Forbidden). It seemed that their rate-limiting software was rejecting my backend once hosted, even though the local version worked perfectly. I couldn't seem to work out why this was happening so I eventually decided to try another hosting platform to see if it was an issue with the way it was hosted on AWS. I tried DigitalOcean and it worked perfectly, receiving requests from the frontend and communicating perfectly with the FPL API with no 403 errors. ",
    learned: "How to host with AWS, DigitalOcean and how to integrate a third-party API into an application.",
    githubLink: "https://github.com/mblenk/fantasy-draft-backend/",
    videoLink:"https://youtu.be/q4cP1ln39fo",
    imageLink:"/ff-draft.png",
    url: "https://www.solschfantasydraft.co.uk",
    host: "DigitalOcean and Vercel"
},
{
    index: 19,
    project: "mini",
    title:"Parallax",
    stack: ["HTML", "CSS", "Javascript", "React"],
    useage:"This is a parallax scrolling effect using 5 layers of images",
    desc: "This was a project to further my CSS and design skills. I had seen some interesting parallax concepts and wanted to try and replicate my own effect. I layered 4 images over a div tag which transitioned from light blue (for the sky) to dark blue (for the water). I then set the z-indexes to create the parallax effect as well as adding an intersection observer to turn the background div black once the content began to appear and to hide the images as well.",
    challenges: "Developing the parallax effect was very difficult as there were 5 layers to align in both 2D and 3D. I had decided that when transitioning from the parallax to the site content I didn't just want to match the site content scroll speed to the slowest parallax layer. Although this would have made for a much smoother transition, the scroll speed of the content would've been very slow and I wanted the page to be slick once into the main content. This was tricky to achieve but through learning more about transitions and Intersection Observers I could achieve the desired effect.",
    learned: "Using more advanced CSS concepts such as the Parallax effect.",
    githubLink: "https://github.com/mblenk/parallax",
    videoLink:"https://youtu.be/M-0Ks1J0Ya4",
    imageLink:"/parallax.png",
    url: "https://parallax-pb5b.vercel.app/",
    host: "Vercel"
}]