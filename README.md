


README.md for "Watch Organizer App"


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


React Component Hierarchy:
---------

App.cs
App.js
    Home.js 
    Nav.js
    Brands.js 
        NewBrand.js
        BrandCard.js
            Brand.js
                BrandWatchCard.js
                    EditWatch.js
                NewWatch.js 

All the CSS is defined in App.css

organizes watches by its brand 


    Brands.js 
allows you to add a new brand and its logo (BrandCard.js)


click into the brand logo renders Brand.js, whose page renders ALL the watches of that brand ID. This page 
allows user to add a new watch from that brand 
the individual watches are rendered through the component BrandWatchCard


A fetch API is called only ONCE at mounting at App.js and state is set with the returns info from the Db. 

All subsequent api calls for CRUD operations update the local state with the returned API response. The app does NOT refetch the full data. 