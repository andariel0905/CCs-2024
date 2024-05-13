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
    'Otros',
  ],
  sheetsData: {
    Mayoristanet: new Map(),
    'Kalis.': new Map(),
    Victory: new Map(),
    'Tecnigraf.': new Map(),
    'Todo envase': new Map(),
    LDT: new Map(),
    Dankon: new Map(),
    'Carlos Lento': new Map(),
    LYL: new Map(),
    Eridanus: new Map(),
    Blancaluna: new Map(),
    Gasatex: new Map(),
    Nogada: new Map(),
    Marino: new Map(),
    AADI: new Map(),
    Prohygene: new Map(),
    Henning: new Map(),
    'Campo austral.': new Map(),
    Otros: new Map(),
  },
};
