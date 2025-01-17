/**
 * Convert status string to number
 * Return 1 (Status.Success) if argument word contains "success"
 * Return 0 (Status.Failure) if argument word contains "fail"
 * @param status {string}
 */
export function getStatus(status: string): Status {
  const lowercase_status: string = status.toLowerCase();

  if (lowercase_status.includes('success')) {
    return Status.Success;
  } else if (lowercase_status.includes('fail')) {
    return Status.Failure;
  } else if (lowercase_status.includes('cancel')) {
    return Status.Cancel;
  } else if (lowercase_status === 'always') {
    return Status.Always;
  } else {
    throw new Error(`
      The argument includes an unacceptable word.
      "type" parameter allows to include "success", "fail" or "cancel".
      "mention_if" parameter can include "always" in addition to the above.
    `);
  }
}

/**
 * Job status
 */
export enum Status {
  Failure = 0,
  Success = 1,
  Cancel = 2,
  Always = 3,
  None = 100
}