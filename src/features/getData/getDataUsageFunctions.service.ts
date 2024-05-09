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
      case 'LENTO CARLOS ALBERTO':
        sheetsData['Carlos Lento'].push(row);
        break;
      case 'L Y L EMPRENDALS S.A.':
        sheetsData['LYL'].push(row);
        break;
      case 'ERIDANUS S.A.':
        sheetsData['Eridanus'].push(row);
        break;
      case 'DISTRIBUIDORA BLANCALUNA S A':
        sheetsData['Blancaluna'].push(row);
        break;
      case 'GASATEX S A':
        sheetsData['Gasatex'].push(row);
        break;
      case 'NOGADA SA':
        sheetsData['Nogada'].push(row);
        break;
      case 'VOLQUETES Y TRANSPORTES MARINO S A':
        sheetsData['Marino'].push(row);
        break;
      case 'AADI CAPIF ASOCIACION CIVIL RECAUDADORA':
        sheetsData['AADI'].push(row);
        break;
      case 'NATIONAL SERVICE ARGENTINA SA':
        sheetsData['Prohygene'].push(row);
        break;
      case 'HENNING JUAN FEDERICO':
        sheetsData['Henning'].push(row);
        break;
      case 'CAMPO AUSTRAL SA':
        sheetsData['Campo austral.'].push(row);
        break;
      default:
        break;
    }
  });
  return sheetsData;
}
