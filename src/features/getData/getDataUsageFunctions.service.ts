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
  dataFromControl: string[][] | undefined,
): ISheetsData {
  dataFromControl?.forEach((row) => {
    switch (row[3]) {
      case 'MAYORISTANET.COM SA':
        sheetsData['Mayoristanet'].set(row[2], row);
        break;
      case 'CREANDO MOMENTOS S.R.L.':
        sheetsData['Kalis.'].set(row[2], row);
        break;
      case 'VICTORY PRODUCTOS DE LIMPIEZA PROFESIONAL S.R.L.':
        sheetsData['Victory'].set(row[2], row);
        break;
      case 'DISTRIBUIDORA LACTEOS DON TORCUATO S.A.':
        sheetsData['LDT'].set(row[2], row);
        break;
      case 'TECNIGRAF ENVASES SRL':
        sheetsData['Tecnigraf.'].set(row[2], row);
        break;
      case 'EMEIKA S R L':
        sheetsData['Todo envase'].set(row[2], row);
        break;
      case 'DANKON S.R.L.':
        sheetsData['Dankon'].set(row[2], row);
        break;
      case 'LENTO CARLOS ALBERTO':
        sheetsData['Carlos Lento'].set(row[2], row);
        break;
      case 'L Y L EMPRENDALS S.A.':
        sheetsData['LYL'].set(row[2], row);
        break;
      case 'ERIDANUS S.A.':
        sheetsData['Eridanus'].set(row[2], row);
        break;
      case 'DISTRIBUIDORA BLANCALUNA S A':
        sheetsData['Blancaluna'].set(row[2], row);
        break;
      case 'GASATEX S A':
        sheetsData['Gasatex'].set(row[2], row);
        break;
      case 'NOGADA SA':
        sheetsData['Nogada'].set(row[2], row);
        break;
      case 'VOLQUETES Y TRANSPORTES MARINO S A':
        sheetsData['Marino'].set(row[2], row);
        break;
      case 'AADI CAPIF ASOCIACION CIVIL RECAUDADORA':
        sheetsData['AADI'].set(row[2], row);
        break;
      case 'NATIONAL SERVICE ARGENTINA SA':
        sheetsData['Prohygene'].set(row[2], row);
        break;
      case 'HENNING JUAN FEDERICO':
        sheetsData['Henning'].set(row[2], row);
        break;
      case 'CAMPO AUSTRAL SA':
        sheetsData['Campo austral.'].set(row[2], row);
        break;
      default:
        break;
    }
  });
  return sheetsData;
}
