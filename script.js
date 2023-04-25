    // Global scope variables //
    let displayDateTime = document.getElementById('currentDay');
    let thisMoment = dayjs().format('dddd, MMMM D, YYYY');
    let storeBtn = document.getElementsByClassName("saveBtn");
    let workHours = ['9','10','11','12','1','2','3','4','5']

    // sets the moment in the header //
    function headerShowTime() {
    displayDateTime.innerHTML = thisMoment;
    };

 