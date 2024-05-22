import { environmentService } from '@core/environment';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const getDataFromCCS = (): [ISheetsData, ISheetsData] => {
  const sheetsData = structuredClone(environmentService.sheetsData);
  const sheetsFormat = structuredClone(environmentService.sheetsData);
  const ccsUrl = environmentService.get('SHEET_URL');
  const sheetNames = environmentService.sheetsNames;
  const SS = SpreadsheetApp.openByUrl(ccsUrl);
  sheetNames.forEach((sheetName) => {
    const activeSheet = SS.getSheetByName(sheetName);
    if (activeSheet) {
      let lastRow = activeSheet.getLastRow();
      lastRow = lastRow === 1 ? 2 : lastRow;
      const activeData = activeSheet.getRange('A2:J' + lastRow).getValues();
      const activeFormats = activeSheet
        .getRange('A2:J' + lastRow)
        .getBackgrounds();
      activeData.forEach((row) => {
        let activeFormat = activeFormats.shift();
        activeFormat === undefined ? (activeFormat = ['']) : null;
        sheetsData[sheetName].set(row[2], row);
        sheetsFormat[sheetName].set(row[2], activeFormat);
      });
    }
  });
  return [sheetsData, sheetsFormat];
};
