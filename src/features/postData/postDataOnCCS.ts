import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function postDataOnCCS(sheetsData: ISheetsData) {
  const sheetUrl = environmentService.get('SHEET_URL');
  const sheetSS = SpreadsheetApp.openByUrl(sheetUrl);
  const sheetsNames = environmentService.sheetsNames;

  sheetsNames.forEach((name) => {
    const activeSheet = sheetSS.getSheetByName(name);
    const lastRow = activeSheet?.getLastRow();
    const activeData = sheetsData[name];
    if (lastRow !== undefined) {
      for (let i = 0; i < activeData.length; i++) {
        activeSheet?.getRange(lastRow + i, 1, 1, 10).setValues([activeData[i]]);
      }
    }
  });
}
