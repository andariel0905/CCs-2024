import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function postDataOnCCS(sheetsData: ISheetsData) {
  const CSSUrl = environmentService.get('SHEET_URL');
  const CSS_SS = SpreadsheetApp.openByUrl(CSSUrl);
  const sheetsNames = environmentService.sheetsNames;
  for (const sheetName of sheetsNames) {
    const activeSheet = CSS_SS.getSheetByName(sheetName);
    const lastRow = activeSheet?.getLastRow();
    const activeData = [...sheetsData[sheetName].values()];
    activeSheet?.getRange('A2:L' + lastRow).setValues(activeData);
  }
}
