import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function postDataOnCCS(sheetsData: ISheetsData) {
  const sheetUrl = environmentService.get('SHEET_URL');
  const sheetSS = SpreadsheetApp.openByUrl(sheetUrl);
  const sheetsNames = environmentService.sheetsNames;

  sheetsNames.forEach((name) => {
    const activeSheet = sheetSS.getSheetByName(name);
    const activeData = sheetsData[name];
    for (let i = 1; i < activeData.length; i++) {
      activeSheet?.getRange(i + 1, 1, 1, 9).setValues([activeData[i]]);
    }
  });
}
