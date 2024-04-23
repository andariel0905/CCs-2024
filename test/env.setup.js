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
  'https://drive.google.com/open?id=1WPfzMHQUacBXOrQknzJNwaOKpJpXNbKU-pMeUt5VeRg';
process.env.SCRIPT_URL =
  'https://script.google.com/d/1GM3dhs0A7TVWBMUkAF8fbpwtTX4-sa1Efhq_RQyim9XmuP7kLxxBTqQu/edit';
