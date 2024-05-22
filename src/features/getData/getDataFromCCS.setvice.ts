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
      let lastRow = activeSheet.getLastRow();
      lastRow = lastRow === 1 ? 2 : lastRow;
      const activeData = activeSheet.getRange('A2:J' + lastRow).getValues();
      activeData.forEach((row) => {
        sheetsData[sheetName].set(row[2], row);
      });
    }
  });
  return sheetsData;
};
