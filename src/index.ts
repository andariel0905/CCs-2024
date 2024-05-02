import { environmentService } from '@core/environment';
import { getDataFromControl } from '@features/getData/getDataFromControl.service';
import { postDataOnCCS } from '@features/postData/postDataOnCCS';
// // // import { deleteContent } from '@features/deleteContent/deleteContent.service';
// // @ts-ignore
// function getThisSpreadsheet(): GoogleAppsScript.Spreadsheet.Spreadsheet {
//   const sheet_url = environmentService.get('SHEET_URL');
//   return SpreadsheetApp.openByUrl(sheet_url);
// }

// function eliminarContenido(): void {
//   const SS = getThisSpreadsheet();
//   environmentService.sheetsNames.forEach((sheetName) => {
//     deleteContent(SS, sheetName);
//   });
// }

function cargarDatos(): void {
  let sheetsData = environmentService.sheetsData;
  sheetsData = getDataFromControl(sheetsData);
  postDataOnCCS(sheetsData);
}

export function onOpen(): void {
  cargarDatos();
}
