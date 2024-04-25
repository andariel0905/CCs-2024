import { IDeleteContent } from 'src/interfaces/deleteContent.interface';

export const deleteContent: IDeleteContent = (
  spreadsheet,
  sheetName: string,
) => {
  spreadsheet.getSheetByName(sheetName)?.getRange(2, 1, 499, 10).clearContent();
};
