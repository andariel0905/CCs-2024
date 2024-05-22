import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export function obtenerFechaActual() {
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

export function loadSheetsData(
  sheetsData: ISheetsData,
  sheetsFormat: ISheetsData,
  dataFromControl: string[][] | undefined,
  formatFromControl: string[][] | undefined,
): [ISheetsData, ISheetsData] {
  if (dataFromControl && formatFromControl) {
    dataFromControl.forEach((row) => {
      let activeFormat = formatFromControl.shift();
      activeFormat === undefined ? (activeFormat = ['']) : null;
      switch (row[3]) {
        case 'MAYORISTANET.COM SA':
          sheetsData['Mayoristanet'].set(row[2], row);
          sheetsFormat['Mayoristanet'].set(row[2], activeFormat);
          break;
        case 'CREANDO MOMENTOS S.R.L.':
          sheetsData['Kalis.'].set(row[2], row);
          sheetsFormat['Kalis.'].set(row[2], activeFormat);
          break;
        case 'VICTORY PRODUCTOS DE LIMPIEZA PROFESIONAL S.R.L.':
          sheetsData['Victory'].set(row[2], row);
          sheetsFormat['Victory'].set(row[2], activeFormat);
          break;
        case 'DISTRIBUIDORA LACTEOS DON TORCUATO S.A.':
          sheetsData['LDT'].set(row[2], row);
          sheetsFormat['LDT'].set(row[2], activeFormat);
          break;
        case 'TECNIGRAF ENVASES SRL':
          sheetsData['Tecnigraf.'].set(row[2], row);
          sheetsFormat['Tecnigraf.'].set(row[2], activeFormat);
          break;
        case 'EMEIKA S R L':
          sheetsData['Todo envase'].set(row[2], row);
          sheetsFormat['Todo envase'].set(row[2], activeFormat);
          break;
        case 'DANKON S.R.L.':
          sheetsData['Dankon'].set(row[2], row);
          sheetsFormat['Dankon'].set(row[2], activeFormat);
          break;
        case 'LENTO CARLOS ALBERTO':
          sheetsData['Carlos Lento'].set(row[2], row);
          sheetsFormat['Carlos Lento'].set(row[2], activeFormat);
          break;
        case 'L Y L EMPRENDALS S.A.':
          sheetsData['LYL'].set(row[2], row);
          sheetsFormat['LYL'].set(row[2], activeFormat);
          break;
        case 'ERIDANUS S.A.':
          sheetsData['Eridanus'].set(row[2], row);
          sheetsFormat['Eridanus'].set(row[2], activeFormat);
          break;
        case 'DISTRIBUIDORA BLANCALUNA S A':
          sheetsData['Blancaluna'].set(row[2], row);
          sheetsFormat['Blancaluna'].set(row[2], activeFormat);
          break;
        case 'GASATEX S A':
          sheetsData['Gasatex'].set(row[2], row);
          sheetsFormat['Gasatex'].set(row[2], activeFormat);
          break;
        case 'NOGADA SA':
          sheetsData['Nogada'].set(row[2], row);
          sheetsFormat['Nogada'].set(row[2], activeFormat);
          break;
        case 'VOLQUETES Y TRANSPORTES MARINO S A':
          sheetsData['Marino'].set(row[2], row);
          sheetsFormat['Marino'].set(row[2], activeFormat);
          break;
        case 'NATIONAL SERVICE ARGENTINA SA':
          sheetsData['Prohygene'].set(row[2], row);
          sheetsFormat['Prohygene'].set(row[2], activeFormat);
          break;
        case 'HENNING JUAN FEDERICO':
          sheetsData['Henning'].set(row[2], row);
          sheetsFormat['Henning'].set(row[2], activeFormat);
          break;
        case 'CAMPO AUSTRAL SA':
          sheetsData['Campo austral.'].set(row[2], row);
          sheetsFormat['Campo austral.'].set(row[2], activeFormat);
          break;
        default:
          sheetsData['Otros'].set(row[2], row);
          sheetsFormat['Otros'].set(row[2], activeFormat);
          break;
      }
    });
  }
  return [sheetsData, sheetsFormat];
}
