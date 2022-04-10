const AVAILABLE_VIEWS = ['y', 'm', 'd', 'w', 'h'];
/**
 *
 * @param {*} flags
 * @param {*} input
 * @returns
 */
const validateViewCommandOptions = (flags, input) => {
  const result = { valid: false, message: '' };
  if (!AVAILABLE_VIEWS.includes(flags.view)) {
    result.message = `Invalid view option ${flags.view}, valid options are ['y', 'm', 'd', 'w', 'h']`;
  }
  if (!result.message) {
    result.valid = true;
  }
  return result;
};

export default {
  validateViewCommandOptions,
};
