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

export function updateForm({ form, validationSchema }) {
  return {
    ...form,
    validationSchema,
  };
}

export default function createForm({ form, validationSchema }) {
  return {
    ...form,
    validationSchema,
    data: {},
    errors: {},
    isValid: false,
    setData(data) {
      this.data = {
        ...this.data,
        ...data,
      };
    },
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
