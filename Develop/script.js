// Current day using moment.js
var currentDay = moment().format("ll");

// j query 
$ ("#currentDay").text (currentDay);

// setting timeblock to the daily schedule using moment.js
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);

// create an array for the hours blocks for the code
var hours = [hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15];

// storage data
var event7 = JSON.parse(localStorage.getItem('hour7'));
var event8 = JSON.parse(localStorage.getItem('hour8'));
var event9 = JSON.parse(localStorage.getItem('hour9'));
var event10 = JSON.parse(localStorage.getItem('hour10'));
var event11 = JSON.parse(localStorage.getItem('hour11'));
var event12 = JSON.parse(localStorage.getItem('hour12'));
var event13 = JSON.parse(localStorage.getItem('hour13'));
var event14 = JSON.parse(localStorage.getItem('hour14'));
var event15 = JSON.parse(localStorage.getItem('hour15'));

// inserting events to local storage
$.each(hours, function (index, value) {
    events = [event7, event8, event9, event10, event11, event12, event13, event14, event15,]
    $(".container").append("<div class='row'><div class='col-2 hour text-right' id='hour'" +
        (index + 7) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='time-block" +
        (index + 7) + "'><textarea class='events col-12' id='eventblock" + (index + 7) + "'>" + events[index] + "</textarea></div>" +
        "<div class='col-2 save-delete' id='save-delete" + (index + 7) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>");
});

// Auditing each line block to display past, current and future timeblocks
var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
    // $("#currentDay").text(currentTime);

    // Audit hour 7 and set its colour
    if (moment().isBetween(hour7, hour8)) {
        $("#time-block7").addClass("present");
    }
    else if (moment().isAfter(hour8)) {
        $("#time-block7").addClass("past");
    }
    else {
        $("#time-block7").addClass("future");
    }
        
    // Audit hour 8 and set its colour
    if (moment().isBetween(hour8, hour9)) {
        $("#time-block8").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block8").addClass("past");
    }
    else {
        $("#time-block8").addClass("future");
    }

    // Audit hour 9 and set its colour
    if (moment().isBetween(hour9, hour10)) {
        $("#time-block9").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block9").addClass("past");
    }
    else {
        $("#time-block9").addClass("future");
    }

    // Audit hour 10 and set its colour
    if (moment().isBetween(hour10, hour11)) {
        $("#time-block10").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block10").addClass("past");
    }
    else {
        $("#time-block10").addClass("future");
    }

    // Audit hour 11 and set its colour
    if (moment().isBetween(hour11, hour12)) {
        $("#time-block11").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block11").addClass("past");
    }
    else {
        $("#time-block11").addClass("future");
    }

    // Audit hour 12 and set its colour 
    if (moment().isBetween(hour12, hour13)) {
        $("#time-block12").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block12").addClass("past");
    }
    else {
        $("#time-block12").addClass("future");
    }

    // Audit hour 13 and set its colour 
    if (moment().isBetween(hour13, hour14)) {
        $("#time-block13").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block13").addClass("past");
    }
    else {
        $("#time-block13").addClass("future");
    }

    // Audit hour 14 and set its colour
    if (moment().isBetween(hour14, hour15)) {
        $("#time-block14").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block14").addClass("past");
    }
    else {
        $("#time-block14").addClass("future");
    }

    // Audit hour 15 and set its colour 
    if (moment().isBetween(hour15, hour16)) {
        $("#time-block15").addClass("present");
    }
    else if (moment().isAfter(hour9)) {
        $("#time-block15").addClass("past");
    }
    else {
        $("#time-block15").addClass("future");
    };
}
// auditing ends here


// adding delete event function for each time-bloack
$("#save-delete7").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour7");
    $("#eventblock7").val("");
})
$("#save-delete8").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour8");
    $("#eventblock8").val("");
})
$("#save-delete9").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour9");
    $("#eventblock9").val("");
})
$("#save-delete10").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour10");
    $("#eventblock10").val("");
})
$("#save-delete11").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour11");
    $("#eventblock11").val("");
})
$("#save-delete12").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour12");
    $("#eventblock12").val("");
})
$("#save-delete13").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour13");
    $("#eventblock13").val("");
})
$("#save-delete14").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour14");
    $("#eventblock14").val("");
})
$("#save-delete15").on("click", "i.fa-trash", function () {
    localStorage.removeItem("hour15");
    $("#eventblock15").val("");
})

// delete function ends here

// adding save event function for each time-block
$("#save-delete7").on("click", "i.fa-save", function () {
    var event7 = $("#eventblock7").val().trim();
    localStorage.setItem('hour7', JSON.stringify(event7));
})
$("#save-delete8").on("click", "i.fa-save", function () {
    var event8 = $("#eventblock8").val().trim();
    localStorage.setItem('hour8', JSON.stringify(event8));
})
$("#save-delete9").on("click", "i.fa-save", function () {
    var event9 = $("#eventblock9").val().trim();
    localStorage.setItem('hour9', JSON.stringify(event9));
})
$("#save-delete10").on("click", "i.fa-save", function () {
    var event10 = $("#eventblock10").val().trim();
    localStorage.setItem('hour10', JSON.stringify(event10));
})
$("#save-delete11").on("click", "i.fa-save", function () {
    var event11 = $("#eventblock11").val().trim();
    localStorage.setItem('hour11', JSON.stringify(event11));
})
$("#save-delete12").on("click", "i.fa-save", function () {
    var event12 = $("#eventblock12").val().trim();
    localStorage.setItem('hour12', JSON.stringify(event12));
})
$("#save-delete13").on("click", "i.fa-save", function () {
    var event13 = $("#eventblock13").val().trim();
    localStorage.setItem('hour13', JSON.stringify(event13));
})
$("#save-delete14").on("click", "i.fa-save", function () {
    var event14 = $("#eventblock14").val().trim();
    localStorage.setItem('hour14', JSON.stringify(event14));
})
$("#save-delete15").on("click", "i.fa-save", function () {
    var event15 = $("#eventblock15").val().trim();
    localStorage.setItem('hour15', JSON.stringify(event15));
})

// save event function ends here for time-block

// for this function time never gets refreshed
setInterval(function () {
    $(".event-group .events").each(function (index, el) {
        auditTime(el);
    });
}, (1000*6));

auditTime();