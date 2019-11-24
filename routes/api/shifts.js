const express = require("express");
const router = express.Router();
const User = require("../../models/User");

const isLoggedIn = (req, res, next) => {
    // checks if user is logged in
    if (req.user) {
        next();
    } else {
        res.sendStatus(403);
    }
}

const isValidDate = dateString => {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}
const isValidTime = timeString => {
    var regEx = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeString.match(regEx)) return false;  // Invalid format
    return true
}
const hmsToSeconds = timeString => {
    var b = timeString.split(':');
    return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
}
const sameDay = (d1, d2) => {
    console.log(d1.getMonth(), d2.getMonth());
    console.log(d1.getDate(), d2.getDate());
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}
// @route   POST api/shifts/
// @desc    adds a new shift
// @access  Private
router.post("/", isLoggedIn, async (req, res) => {
    try {
        let { date, startTime, endTime } = req.body;
        if (!date || !startTime || !endTime) return res.status(400).send("Please fill out all the fields.");
        if (!isValidDate(date)) return res.status(400).send("Please provide a valid date.");
        if (!isValidTime(startTime)) return res.status(400).send("Please provide a valid start time.");
        if (!isValidTime(endTime)) return res.status(400).send("Please provide a valid end time.");
        if (hmsToSeconds(endTime) - hmsToSeconds(startTime) < 0) return res.status(400).send("End time must be after start time.");

        // Get the date in the PST time zone (Vancouver)
        var d = new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc - (3600000 * 8));

        // Parse the user's date input
        var dateArr = date.split("-");
        var fullYear = dateArr[0];
        var month = dateArr[1];
        var dateNum = dateArr[2];

        if (sameDay(nd, new Date(fullYear, month - 1, dateNum))) return res.status(400).send("Please schedule shifts a day before the shift date.")

        // Parse the user's startTime input
        var startTimeArr = startTime.split(":");
        var startHour = startTimeArr[0];
        var startMinute = startTimeArr[1];

        // dateKey will be used to uniquely identify each shift
        var dateKey = new Date(fullYear, month, dateNum, startHour, startMinute);
        let user = await User.findById(req.user._id);

        let { shifts } = user;
        // the key for this object is date so no need to add the date as a property
        var shiftObj = {
            date,
            startTime,
            endTime
        };

        var dateKeyTimeString = dateKey.getTime();
        shifts[dateKeyTimeString] = shiftObj;

        await User.updateOne(
            { _id: req.user._id },
            {
                $set: {
                    shifts
                }
            }
        );
        res.status(200).send(`Successfully added a shift from ${startTime} to ${endTime} on ${date}`);
    } catch (e) {
        console.log('error', e)
    }
});

module.exports = router;
