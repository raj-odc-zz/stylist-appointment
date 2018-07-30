## Steps to run the application:
Clone the app using the comment `git clone git@github.com:raj-odc/stylist-appointment.git`

`cd stylist-appointment`

`npm install`

`npm start` 
This will run the app in the port 3000, it automatically takes to browser. If anyother app is running in the 3000 port then terminal will ask to open in new port, please give `Y` in this case.

## Pages Developed
I developed 3 Screens:
  1) Home screen which is the first home screen, this will have the link to book an appointment.

  2) Calendar Screen will have two option 
    a) Book an Stylist and confirm
      I called the api for date and time and I have used the `React-Slick` library to show the Carousel.
    b) Enter comments and confirm

    After enter all the information will enable the confirm box. This will call the Post API for booking an appointment.

  3) Success Page,
    This will show the Date, Time and Stylist information.
  
  4) I just created 404 page, its not fully functional.

Also implemented progress bar in calendar and success page as it shows the progress of the appointment.

Incorporated the fonts from the outfittery S3.

I Developed only for Mobile, though its works in desktop as well only few UI bugs will be there.

## Dev Docs
I used Create-react-app to start the app, it has all the inbuild features like webpack config, hot reload, babel support etc.,

I externally installed the Scss preprocessor to use the Mixins, variables. I have added src/variables.scss to have one place for all our configurations

Code is easily understandable and also splitted based on the functionality like Header, footer, ProgressBar.

All are component based so each folder will have the JSX and SCSS files, to easily debug if anything goes wrong and also maintainable.

I have seperated the API and Utils methods JS as seperated so it can be used some other places.

## ToDo
Need to add Loader when user clicks confirm box

Need to add test for all the components

Need to add the address fields and payments options

I am thinking of writing own carousal, because avoid loading unnecessary big libraries

I didn't done the logic for calculating the progressbar

Validation not started at all


















