import { EnvironmentService } from './environment.type';

export const environmentService: EnvironmentService = {
  get(key) {
    const environment = {
      SHEET_URL: String(process.env.SHEET_URL),
      SCRIPT_URL: String(process.env.SCRIPT_URL),
      CONTROL_URL: String(process.env.CONTROL_URL),
    };

    return environment[key];
  },
  sheetsNames: [
    'Mayoristanet',
    'Kalis.',
    'Victory',
    'Tecnigraf.',
    'Todo envase',
    'LDT',
    'Dankon',
    'Carlos Lento',
    'LYL',
    'Eridanus',
    'Blancaluna',
    'Gasatex',
    'Nogada',
    'Marino',
    'AADI',
    'Prohygene',
    'Henning',
    'Campo austral.',
  ],
  sheetsData: {
    Mayoristanet: [],
    'Kalis.': [],
    Victory: [],
    'Tecnigraf.': [],
    'Todo envase': [],
    LDT: [],
    Dankon: [],
    'Carlos Lento': [],
    LYL: [],
    Eridanus: [],
    Blancaluna: [],
    Gasatex: [],
    Nogada: [],
    Marino: [],
    AADI: [],
    Prohygene: [],
    Henning: [],
    'Campo austral.': [],
  },
};
