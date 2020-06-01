const d = new Date();

function weekDayProperties(weekDay, messageForWeekDay) {
    this.weekDay = weekDay;
    this.messageForWeekDay = messageForWeekDay;

}

const weekDays = {
    0: new weekDayProperties(
        "Sunday",
        "Sunday morning = Laziness overload"
    ),

    1: new weekDayProperties(
        "Monday",
        "And just like that *poof* weekend is gone"
    ),

    2: new weekDayProperties(
        "Tuesday",
        "Not sure if it's Tuesday or just a second Monday"
    ),

    3: new weekDayProperties(
        "Wednesday",
        "Good grief! What do you mean by today is only Wednesday?"
    ),

    4: new weekDayProperties(
        "Thursday",
        "Worst Friday is when you realize that it's Thurday..."
    ),

    5: new weekDayProperties(
        "Friday",
        "Cheers... It's finally Friday!"
    ),

    6: new weekDayProperties(
        "Saturday",
        "It's Saturday. Life is good"
    )

};

const weekDayArray = Object.values(weekDays);



console.log(weekDayArray[d.getDay()])