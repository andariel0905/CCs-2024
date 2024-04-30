import { IGetDataFromControl } from 'src/interfaces/getDataFromControl.interface';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';
import { environmentService } from '@core/environment';

function obtenerFechaActual() {
  const meses = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ];

  const fecha = new Date();
  const textoMes = meses[fecha.getMonth()];
  const textoAño = fecha.getFullYear();

  return textoMes + ' ' + textoAño;
}

export const getDataFromControl: IGetDataFromControl = (
  sheetsData: ISheetsData,
) => {
  const controlUrl = environmentService.get('CONTROL_URL');
  const fechaActual = obtenerFechaActual();
  const SS = SpreadsheetApp.openByUrl(controlUrl).getSheetByName(fechaActual);
  const lastRow = SS?.getLastRow();
  const dataFromControl = SS?.getRange('A2:J' + lastRow).getValues();
  dataFromControl?.forEach((row) => {
    switch (row[4]) {
      case 'MAYORISTANET.COM SA':
        sheetsData['Mayoristanet'].push(row);
        break;
      case 'CREANDO MOMENTOS S.R.L.':
        sheetsData['Kalis.'].push(row);
        break;
      case 'VICTORY PRODUCTOS DE LIMPIEZA PROFESIONAL S.R.L.':
        sheetsData['Victory'].push(row);
        break;
      case 'DISTRIBUIDORA LACTEOS DON TORCUATO S.A.':
        sheetsData['LDT'].push(row);
        break;
      case 'TECNIGRAF ENVASES SRL':
        sheetsData['Tecnigraf.'].push(row);
        break;
      case 'EMEIKA S R L':
        sheetsData['Todo envase'].push(row);
        break;
      case 'DANKON S.R.L.':
        sheetsData['Dankon'].push(row);
        break;
      default:
        break;
    }
  });
  return sheetsData;
};
