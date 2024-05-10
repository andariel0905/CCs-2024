import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const getDataFromCCS = (): ISheetsData => {
  const sheetsData = structuredClone(environmentService.sheetsData);
  const ccsUrl = environmentService.get('SHEET_URL');
  const sheetNames = environmentService.sheetsNames;
  const SS = SpreadsheetApp.openByUrl(ccsUrl);
  sheetNames.forEach((sheetName) => {
    const activeSheet = SS.getSheetByName(sheetName);
    if (activeSheet) {
      const lastRow = activeSheet?.getLastRow();
      const activeData = activeSheet?.getRange('A2:J' + lastRow).getValues();
      sheetsData[sheetName] = activeData;
    }
  });
  return sheetsData;
};
