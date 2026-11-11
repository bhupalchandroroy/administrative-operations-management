function createAdminWorkspaceFolders() {
  // Replace with the ID of the approved parent folder in Google Drive.
  const PARENT_FOLDER_ID = 'PASTE_PARENT_FOLDER_ID_HERE';

  const folderNames = [
    '00_READ_ME_AND_TEMPLATES',
    '01_MANAGEMENT',
    '02_OPERATIONS',
    '03_CLIENTS_AND_SUPPLIERS',
    '04_HR_CONFIDENTIAL',
    '05_FINANCE_RESTRICTED',
    '06_PROJECTS',
    '07_ARCHIVE_READ_ONLY'
  ];

  const parent = DriveApp.getFolderById(PARENT_FOLDER_ID);

  folderNames.forEach(function(name) {
    const existing = parent.getFoldersByName(name);
    if (!existing.hasNext()) {
      parent.createFolder(name);
      Logger.log('Created: ' + name);
    } else {
      Logger.log('Already exists: ' + name);
    }
  });
}
