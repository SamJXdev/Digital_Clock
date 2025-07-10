# Digital_Clock
## Date:
## Objective:
To create a live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels.

## Tasks:

#### 1. Create the HTML Structure:
Use a ```<div>``` with an ID like clock to hold the time display.

Add a page title like ```<h1>TimeTrack</h1>```.

Optionally, include a subtitle like “Live Digital Clock”.

#### 2. Style the Clock with CSS:
Center the clock using flexbox or text-align: center.

Use a large font size (e.g., font-size: 48px) for the clock display.

Style with a dark background and light-colored text for contrast.

Use padding, border-radius, and box-shadow for a modern look.

#### 3. Add JavaScript Functionality:
Create a function that gets the current time using new Date().

Extract hours, minutes, and seconds from the date object.

Format them to two digits using .padStart(2, "0").

Update the inner text of the clock div every second using setInterval().

#### 4. Enhancements:
Display AM/PM next to the time.

Add the current date below the time.

Let the user choose between 12-hour and 24-hour formats.

Animate the colon (:) blinking every second.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html>
  <head>
    <title>
      Digital Clock
    </title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <div class="clock-box">
      <h2 class="clock-title">Clock Timer</h2>
      <div class="time-display" id="time">00:00:00</div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
## CSS Code:
```
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: blue;
}

.clock-box{
  background-color: black;
  color: grey;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(190, 9, 9, 0.5);
  width: 300px;
}

.clock-title{
  margin: 0 0 20px 0;
  color: red;
}

.time-display{
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
}

.colon{
  animation: blink infinite;
}
```

## Live web page:

## Output:
<img width="1911" height="964" alt="image" src="https://github.com/user-attachments/assets/b766ea52-741f-4d39-a734-14b9e9ae591d" />

## Result:
A live digital clock using HTML, CSS, and JavaScript that updates every second and displays the current time in HH:MM:SS format — a feature commonly used in dashboards and admin panels is created successfully.
