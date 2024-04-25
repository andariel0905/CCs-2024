import { environmentService } from '@core/environment';
import { deleteContent } from '@features/deleteContent/deleteContent.service';
// @ts-ignore
function main(): void {
  const sheet_Url = environmentService.get('SCRIPT_URL');
  const SS = SpreadsheetApp.openByUrl(sheet_Url);
  environmentService.sheetsNames.forEach((sheetName) => {
    deleteContent(SS, sheetName);
  });
}
