// Created function calculates the day and the exact date of the moment when a person could get his/her order.
(function() {
    var today;
    var deliveryDateMsg;
    var elDeliveryDateMsg;

    function deliveryDate (today) {
    
        var dayFromToday, dayNames, monthNames, date, day, month, year;
    
        dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу'];
       monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
        // Calculation of the exact day from today (in milliseconds) when the order should be delivered.
    
        dayFromToday = new Date (today.getTime() + 24 * 60 * 60 *1000);
    
        // Collect the parts of the date to show on the page.
    
        day = dayNames[dayFromToday.getDay()];
        date = dayFromToday.getDate();
        month = monthNames[dayFromToday.getMonth()];
        year = dayFromToday.getFullYear();
    
        // Create the message.
    
        deliveryDateMsg = day + ' (' + date + ' ' + month + ' ' + year + ')';
    
        if (day === 'Вторник') {
            var elAt = document.getElementById('at_2');
            elAt.innerHTML = 'во ';
        }
    
        return deliveryDateMsg;
    }

    today = new Date();
    elDeliveryDateMsg = document.getElementById('body_delivery_2_time');
    elDeliveryDateMsg.innerHTML = deliveryDate(today);
    
}());