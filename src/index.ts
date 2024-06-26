import { environmentService } from '@core/environment';
import { deleteRepeatedData } from '@features/deleteRepeatedData/deleteRepeatedData.service';
import { getDataFromControl } from '@features/getData/getDataFromControl.service';
import { postDataOnCCS } from '@features/postData/postDataOnCCS.service';

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
  let sheetsData = structuredClone(environmentService.sheetsData);
  let sheetsFormat = structuredClone(environmentService.sheetsData);
  [sheetsData, sheetsFormat] = getDataFromControl(sheetsData, sheetsFormat);
  [sheetsData, sheetsFormat] = deleteRepeatedData(sheetsData, sheetsFormat);
  postDataOnCCS(sheetsData, sheetsFormat);
}

export function onOpen(): void {
  cargarDatos();
}
