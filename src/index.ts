import { environmentService } from '@core/environment';
import { deleteContent } from '@features/deleteContent/deleteContent.service';
// @ts-ignore
function main(): void {
  const SS = SpreadsheetApp.getActiveSpreadsheet();
  environmentService.sheetsNames.forEach((sheetName) => {
    deleteContent(SS, sheetName);
  });
}
