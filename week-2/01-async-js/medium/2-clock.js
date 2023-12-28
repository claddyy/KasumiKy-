/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function padZero(num) {
    return num.toString().padStart(2, '0');
  }
  
  function updateTime() {
    const now = new Date();
  
    // Format 1: HH:MM::SS
    const formattedTime1 = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
  
    // Format 2: HH:MM::SS AM/PM
    const formattedTime2 = `${padZero(now.getHours() % 12 || 12)}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() < 12 ? 'AM' : 'PM'}`;
  
    console.log('Current Time (Format 1):', formattedTime1);
    console.log('Current Time (Format 2):', formattedTime2);
  }
  
  // Call updateTime every second
  setInterval(updateTime, 1000);
  
// Copied from ChatGPT, I'm not very much interested in this, very standard.