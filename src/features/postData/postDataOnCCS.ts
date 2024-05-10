import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function postDataOnCCS(sheetsData: ISheetsData) {
  const sheetUrl = environmentService.get('SHEET_URL');
  const sheetSS = SpreadsheetApp.openByUrl(sheetUrl);
  const sheetsNames = environmentService.sheetsNames;

  console.log(sheetsData, sheetSS, sheetsNames);
}
