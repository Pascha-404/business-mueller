# Fliesenfachbetrieb Müller Website

This website was built for Fliesenfachbetrieb Müller, a small company from Berlin that specializes in interior design, tiling, sanitary, and drywall construction. The website was built using HTML, CSS, and JavaScript, with the React framework and SASS for styling. To enhance the user experience, the website uses the intersection observer, router, and swiper packages.

## Contact Form

To handle the contact form on the website, we used Firebase Firestore as the backend. We also used Firebase Functions to send a copy of the data to the business owner and the customer. The contact form is protected through reCAPTCHA to prevent spam submissions.

## Getting Started

To run the website locally, you'll need to have Node.js and npm installed on your machine. Clone the repository and run the following command to install the required dependencies:

```
npm install
```

Then, run the following command to start the development server:

```
npm start
```

The website should now be running at [http://localhost:3000](http://localhost:3000).

## Deployment

The website is currently deployed on [Firebase Hosting](https://firebase.google.com/products/hosting). To deploy the website, you'll need to have a Firebase account and have the Firebase CLI installed on your machine. Run the following command to deploy the website:

```
npm run build
firebase deploy
```

The website should now be deployed and accessible at your Firebase Hosting URL.

## Credits

This website was developed by Patrick Pavliuchik for Fliesenfachbetrieb Müller. If you have any questions or concerns, please contact me at https://www.linkedin.com/in/patrick-pavliuchik-b481b9200/ .
