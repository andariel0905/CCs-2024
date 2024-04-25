/*
 * This file should contain any environment variables
 * that are explicitly required, e.g. variable that
 * you can't set a default value for using nullish
 * operator (??).
 *
 * Example:
 * process.env.SOME_REQUIRED_ENV_VAR = 'some custom value'
 *
 * By doing this, we can produce an error when launching the service
 * if the variable is not set, and avoid that error when testing it.
 */

process.env.SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1E75BX73c87TBlm9Z6sb1fT2TofKWvHTdnUDl4TRQ-TY/edit';
process.env.SCRIPT_URL =
  'https://script.google.com/u/0/home/projects/1YumfJntNcv0Uebcx6Km8aSf3lIgAsPB1hU1zAmxF9ChF8rUnTNwGXci_';
