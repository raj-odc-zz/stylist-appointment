export default {
  dateParser: (date) => {
    const weekday = new Array('Sunday', 'Monday', 'Tuesday', 
                                'Wednesday', 'Thursday', 'Friday', 'Saturday'); 
    const months = new Array('Jan', 'Feb', 'Mar',
                              'Apr', 'May', 'June', 'July', 'Aug',
                              'Sep', 'Oct', 'Nov', 'Dec');
                      
    const parsedDate = new Date(date)
    const dayName = weekday[parsedDate.getDay()]
    const monthName = months[parsedDate.getMonth()]
    const dateNumber = parsedDate.getDate()
    return { dayName, monthName, dateNumber }
  },
  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}