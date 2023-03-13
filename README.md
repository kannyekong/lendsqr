# lendsqr
# PROJECT TITLE:  LendSqr Frontend Engineer Test 

 

# PROJECT DESCRIPTION: 

A responsive project with 4 pages namely; Login, Dashboard, User page, User details page, Not found. 
The user page gets data from a mock api with 500 records. 
I used local storage to store and retrieve userid from user’s page and queried the local storage to get the stored userid on the user details page. 
I used the id from local storage to query the API to get the user details respectively. 

 

# RESOURCE LOCATIONS 

Pages are stored in the lendsqr/src/pages directory 
Components are stored in lendsqr/src/assets directory 
Images are stored in lendsqr/src/assets/images directory 
Functions and constants are stored at lendsqr/src/assets/store directory 

# DEPENDENCIES 

"react": "^18.2.0", 
"react-datepicker": "^4.10.0", 
"react-dom": "^18.2.0", 
"react-router-dom": "^5.3.4", 
"v5": "^0.1.2" 
“@szhsin/react-menu”: “^3.5.2” 

 

# DEV DEPENDENCIES  

“@types/react": "^18.0.27", 
"@types/react-dom": "^18.0.10", 
"@vitejs/plugin-react": "^3.1.0", 
"autoprefixer": "^10.4.13", 
"postcss": "^8.4.21", 
"tailwindcss": "^3.2.7", 
"vite": "^4.1.0" 

 

# HOW TO INSTALL AND RUN THE PROJECT

Clone Repo 
Npm i to install all dependencies 
Npm run dev to start at local server 

# HOW TO USE PROJECT 

From the login page, clicking on the login button takes you to the dashboard 
All users will load into the table automatically 
Click on the three ellipse button on table to reveal flyout menu to take you to the user details page 
Click on available page numbers you see to access the table pagination 

# LIVE PREVIEW
Hosted on vercel: 
 

# IMPROVEMENTS (To Fix) 

Integrate TypeScript 
Previous and Next buttons on table not working.  
Clean JSX of tailwind utility classes by writing them into layer, base, components directives on the app.css file
Write tests for modules 
