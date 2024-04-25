import { EnvironmentService } from '@core/environment';
import { DeleteContent } from '@features/deleteContent/deleteContent.service';
// @ts-ignore
function main(): void {
  const sheet_Url = EnvironmentService.get('SCRIPT_URL');
  const SS = SpreadsheetApp.openByUrl(sheet_Url);
  EnvironmentService.sheetsNames.forEach((sheetName) => {
    DeleteContent(SS, sheetName);
  });
}
