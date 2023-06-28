export const mergeObjects = (obj1, obj2) => {
  const result = {};

  for (const key in obj1) {
    if (obj2?.hasOwnProperty(key)) {
      result[key] =
        typeof obj1[key] === "object"
          ? mergeObjects(obj1[key], obj2[key])
          : obj1[key] + " " + obj2[key];
    } else {
      result[key] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (!result.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  }

  return result;
};

export const isString = (value) => typeof value === "string";

export const isArray = (value) => Array.isArray(value);
