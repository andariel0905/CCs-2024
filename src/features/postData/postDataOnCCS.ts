import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function postDataOnCCS(sheetsData: ISheetsData) {
  const controlUrl = environmentService.get('CONTROL_URL');
  const controlSS = SpreadsheetApp.openByUrl(controlUrl);
  const sheetsNames = environmentService.sheetsNames;

  sheetsNames.forEach((name) => {
    const activeSheet = controlSS.getSheetByName(name);
    const activeData = sheetsData[name];
    for (let i = 1; i < activeData.length; i++) {
      activeSheet?.getRange(i + 1, 1, 1, 9).setValues([activeData[i]]);
    }
  });
}
