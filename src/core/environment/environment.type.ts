import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export type Environment = {
  SHEET_URL: string;
  SCRIPT_URL: string;
  CONTROL_URL: string;
};

export type EnvironmentService = {
  get: <Key extends keyof Environment>(key: Key) => Environment[Key];
  sheetsNames: string[];
  sheetsData: ISheetsData;
};
