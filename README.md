## Send email attachment with customised PDF using Google Form

- Create Google Form and submit test credentials
- Make a Google docs document in a separate folder in Google Drive and use it as a template for creating PDFs
- Open Form responses spreadsheet > Extensions > Apps Script
- Clear the Apps script default myFunction under Editor Tab
- Use the variables in the document. Eg. {name}, {email_address} (Variables are surrounded by {})
- Copy the snippet from certificate.js file
- Replace the variables with the column header in the form responses spreadsheet. Save it
- Goto Triggers Tab. Click on +Add Trigger
- Choose the function “createAndSend”
- Select event type as “On Form Submit”
- Save and authorize the google dialog
- Allow all permissions even though it shows “Google hasn’t verified the app” as we are using our own google account
- Click on “advanced” and click on “go to {projectname}(unsafe)” and click on allow. 
- Test the Google form