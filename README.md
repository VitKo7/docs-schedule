# Getting Started

This project was developed in order to complete the Task (see below).

## Steps to Start

In the project directory terminal, you can run:

### `npm install`

Downloasds and installs the project dependencies.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.


## Task (part 2):

Create a component that will accept the following data for example:
https://www.dropbox.com/s/18qqozhh34rbzxl/doctorsSchedule.json?dl=0

This JSON describes the doctor's work time, where the "start" field is the beginning of the working day, and the "end" field is the end.

The file also contains a list of already existing appointments, where for each entry the "start" field is the appointed appointment time, and the "duration" field is the duration of this appointment in minutes.

You need to split the doctor's working hours into 45-minute cells, excluding those that fall within the range of existing appointments.

For example, for the file above, the output will be like this:
[10:00, 11:30, 12:15, 13:00, 14:10]

Please don’t create a fancy interface. The output should be presented as one <div/> element with the contents of the array inside.

The expected output is the following:
-	Git repository with an application code and launch instructions in README;

