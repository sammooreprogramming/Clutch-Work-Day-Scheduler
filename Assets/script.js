        // Global scope variables //
        let displayDateTime = document.getElementById('currentDay');
        let thisMoment = dayjs().format('dddd, MMMM D, YYYY');
        let storeBtn = document.getElementsByClassName("saveBtn");
        let workHours = ['9','10','11','12','1','2','3','4','5']

        // sets the moment in the header //
        function headerShowTime() {
        displayDateTime.innerHTML = thisMoment;
        };

        // calls the moment into the header upon clicking the button //
        document.addEventListener("DOMContentLoaded", function() {

        headerShowTime();
    
        // displays current hour data //
        let hourNow = parseInt(dayjs().format('H'));
    
        // iterates through the work hours //
        for (let i = 0; i < workHours.length; i++) {
    
        // loop scope variables //
        let hourVar = parseInt(workHours[i]);
        let localData = JSON.parse(localStorage.getItem("Workday-" + hourVar));
        let showItemData = document.getElementById('item-' + hourVar);
        
        // this specifies the tens & in turn the color //
        if (hourNow < hourVar) {
          showItemData.classList.remove("past", "present", "future");
          showItemData.classList.add("future");
          }
        else if (hourNow == hourVar) {
          showItemData.classList.remove("past", "present", "future");
          showItemData.classList.add("present");
          }
        else {
          showItemData.classList.remove("past", "present", "future");
          showItemData.classList.add("past");
          }
    
        // If there is data in the local storage, display it //
            if (localData) {
            showItemData.textContent = localData;
            } else {
                console.log("No data yet!");
            }
          }
        });
    
