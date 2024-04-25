import { environmentService } from '@core/environment';
import { deleteContent } from '@features/deleteContent/deleteContent.service';
// @ts-ignore
function main(): void {
  const sheet_url = environmentService.get('SHEET_URL');
  const SS = SpreadsheetApp.openByUrl(sheet_url);
  environmentService.sheetsNames.forEach((sheetName) => {
    deleteContent(SS, sheetName);
  });
}
