README.md for "Watch Organizer App"

This one-page application allows a user to add watch brands and individual watches. Watches may be updated or deleted by the user to keep them organized.


----------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started

In the project directory, you can run:

##
--console
$ npm start
--

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

----------------------------------------------------


### React Component Hierarchy:
--------------------------------
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


The application is rendered in App.js. When the application is first started, App.js makes an API call to the Db to fetch all the brands and associated watches. The returned array of objects is set to state. 

**Unless the application is refresehed, no additional fetch calls to the API are made by the application.**

All subsequent API calls for CRUD operations update the local state with the returned API response. The app does NOT refetch the full data. 

The application uses React BrowserRouter for routing.  

Nav.js renders the navigation bar that takes the user from Home `Home.js` and Brands `Brands.js`. 


Brands.js renders all the watch brands (via BrandCard.js, which maps through brand objects) that have been added to the Db. It also allows the user to add a new brand and logo image link (BrandCard.js). Any new object that is created is posted to the Db via POST API call. Upon succesful POST, the object is added to State in App.js. 


## Site Navigation into individual Brand

To view all the associated watches for a given brand, users must click on a brand's logo (on the Brands page `Brand.js`), which takes the user to the individual brand page (Brand.js), which renders all of the watches associated with that brand (via BrandWatchCard.js). BrandWatchCard maps through the array of watch objects for the specific brand and renders the image and information regarding the individual watch. 

The Brand.js page also allows user to add a new watch for that brand (via NewWatch.js). A POST API call is made for new watch submissions. Successfully created objects will be added to State in App.js 

Each card also has an 'Edit' and 'Delete' button. 

Delete invokes a DELETE API call. Successful response triggers the app to delete the specific object from State in App.js. 

'Edit' button toggles an edit form for the watch that the user is able to use to update the individual watch's information. Submission of changes triggers a PATCH API call. Succesful patches will update State's object in App.js. 



