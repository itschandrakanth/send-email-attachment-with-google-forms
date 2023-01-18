function createAndSend(e){
  
  const info = e.namedValues;
  const pdfFile = createCertificate(info);  
  
  console.log(info);
  // Replace with your variables
  // 'Student Email Address' is the column in form responses spreadsheet
  sendEmail(e.namedValues['Student Email Address'][0], pdfFile);  
}

function sendEmail(email,pdfFile){
  
  GmailApp.sendEmail(email, "Certificate - Social Prachar", "Hi, Please find the file attached. All the best for your Future endeavors.", {
    attachments: [pdfFile], 
    name: "Social Prachar"
  });
 
}
function createCertificate(info) {
  // Folder Id can be copied from URL
  // Document Id can be copied from URL 
  const certificateFolder = DriveApp.getFolderById("1XqR_UgqfrycM2UWebHU61-xI5tps4MlD");
  const tempFolder = DriveApp.getFolderById("1Fr8sOptG3vS2_1LmirQ0TE796hi0scip");
  const certificateTemplate = DriveApp.getFileById("1veUE1f0fo_Cs8gpppRNuUKkhZvM7PIsJfZ0w2Qlyj-4");
  
  const newTempFile = certificateTemplate.makeCopy(tempFolder);
  const openDoc = DocumentApp.openById(newTempFile.getId());
  const body = openDoc.getBody();
  
  console.log(body);
  // Replace with your variables
  // {time_stamp} - variable data in google docs
  // info['Timestamp'] - form responses spreadsheet column name
  body.replaceText("{time_stamp}", info['Timestamp'][0])
  body.replaceText("{full_name}", info['Full Name'][0]);
  body.replaceText("{email_address}", info['Student Email Address'][0]);
  body.replaceText("{course_name}", info['Course Name'][0]);
  body.replaceText("{from_date}", info['From Date'][0]);
  body.replaceText("{to_date}", info['To Date'][0]);

  openDoc.saveAndClose();
  

  const newPdf = newTempFile.getAs(MimeType.PDF);
  const pdfFile =  certificateFolder.createFile(newPdf).setName(info['Full Name'][0] + " " + info['Course Name'][0]);
  console.log("The file has been created ");
  
  return pdfFile;

}