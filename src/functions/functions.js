



export const printFormattedDates = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const formattedDates = [];
    const currentDate = new Date();
  
    // Iterate through the next seven days
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
  
      const day = days[nextDate.getDay()];
      const month = months[nextDate.getMonth()];
      const date = nextDate.getDate().toString().padStart(2, '0');
  
      const formattedDate = `${day} ${month} ${date}`;
      formattedDates.push(formattedDate);
    }
  
    return (formattedDates);
  }
  

export const findSubString = (mainStr, subStr) => {
  if(!mainStr || !subStr) return null;
  if(!mainStr.length) return null;
  if(!subStr.length) return null;

  if(subStr.length > mainStr.length) return null;

  let p=0;

  while(p < subStr.length){
    if(mainStr[p].toLowerCase() != subStr[p].toLowerCase()) return null;
    p++;
  }

  return mainStr;
  // "abcd" "bc"
}


export const findLocations = (locationArray, str) => {
  // if(!locationArray ||str?.length) return []
  let arr = [];

  locationArray.forEach(item => {
      if(findSubString(item, str)) arr.push(item)
  })

  return arr;
}

export const findBookings = (bookings, str) => {
  let arr = [];
  // console.log(bookings)

  bookings.forEach(item => {
    if(findSubString(item.data.hospitalName, str)) arr.push(item);
  })
  
  return arr;
}