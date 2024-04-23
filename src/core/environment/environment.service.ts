import { Environment } from './environment.type';

/**
 * Environment variables usage approach
 *
 * ---
 *
 * You can use an EnvironmentService in order to
 * avoid repeat the `process.env` pattern.
 *
 * You are free to implement this in any way you
 * want, but this is a good starting point.
 *
 * I recommend you to make extensive usage of
 * generics when implementing a single environment
 * variable getter method. Like so:
 *
 * ```typescript
 * get<Key extends keyof Environment>(key: Key): Environment[Key] {
 *   // Implementation...
 * }
 * ```
 */
export class EnvironmentService {
  get<Key extends keyof Environment>(key: Key): Environment[Key] {
    const environment = {
      SHEET_URL: String(process.env.SHEET_URL),
      SCRIPT_URL: String(process.env.SCRIPT_URL),
    };

    return environment[key];
  }
}
