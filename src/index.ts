import { environmentService } from '@core/environment';
import { getDataFromControl } from '@features/importData/getDataFromControl.service';
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
  const sheetsData = environmentService.sheetsData;
  getDataFromControl(sheetsData);
}

export function onOpen(): void {
  cargarDatos();
}
