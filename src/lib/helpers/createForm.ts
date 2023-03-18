async function validateFormData(validationSchema, data, options = {}) {
  try {
    await validationSchema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
      ...options,
    });
  } catch (err) {
    const errors = {};
    err.inner.forEach((e) => {
      errors[e.path] = e.message;
    });
    return errors;
  }

  return {};
}

export default function createForm({ form, validationSchema, initialValues = {} }) {
  return {
    ...form,
    validationSchema,
    data: initialValues,
    errors: {},
    isValid: false,
    async validate(options) {
      const [errors, isValid] = await Promise.all([
        validateFormData(this.validationSchema, this.data, options),
        this.validationSchema.isValid(this.data),
      ]);

      this.errors = errors;
      this.isValid = isValid;
    },
  };
}
