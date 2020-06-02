# uw-duplicate-filter
Import CSV data, and then filter and combine rows containing a duplicate email or ID.
The program works by checking the email rows for duplicates, and if one is found it takes the filename in the duplicate row and adds it to the original, then deletes the duplicate row.

## Usage instructions:





#### 1: Install programs

1a: Install git bash for windows: https://gitforwindows.org/ 

This is the terminal, different from the windows terminal. Attempting to run the following commands in the windows command prompt will not work.

1b: Install npm/node: https://www.npmjs.com/get-npm

Node.js is what runs the code, npm allows downloading of packages that are used within projects to use external tools (such as the google apis used in this project)

#### 2: Downloading the project:

Go to https://github.com/jordanjmiller/uw-filename-harvester and click the green Clone or download button. Click download zip and extract it in your desired location.

#### 3: Install dependencies

These are the external tools used by the project. Double click the Install.sh folder to run a script I included to install the files.
> Alternatively, the terminal command would be npm i or npm install

#### 4: Setting up input files
Header row must match below, and only include those values in the input file. Name the input csv Input.csv

CSV header row: username,firstName,lastName,studentID,fileName,

#### 5: Running the script

Once files have been shared, double click RunScript.sh
>Alternatively, the terminal command would be   node .

If there are no errors a bash terminal should pop up, run the script, and then save the output as Output.csv

#### 6: Uploading the csv results to google sheets

Go into the spreadsheet on google sheets you want to import data into, then File -> Import -> Upload -> Select from device -> choose the Output.csv file -> Import location new sheets, separator type comma, Convert text no.

Done! To run the script on a different batch of images, unshare everything with the service account and share the new files, then run the script again. You wont need to redo any of the setup steps.