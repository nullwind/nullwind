import { twMerge } from "tailwind-merge";

import { isArray, isString, mergeObjects } from "./utils";

interface IComponent {
  base?: string | string[];
  compoundVariants?: Record<string, any>[];
  defaultVariants?: Record<string, any>;
  slots?: Record<string, any>;
  variants?: Record<string, any>;
}

type IComponentReturn = (props?: object) => any;

interface IComponentBaseFn {
  [key: string]: any;
  class?: string | string[];
}

export default function component(...receivedOptions: IComponent[]): IComponentReturn {
  if (!receivedOptions) return () => "";

  let options: IComponent = receivedOptions[0];

  if (receivedOptions.length > 1) {
    options = receivedOptions.reduce((acc, cur) => mergeObjects(acc, cur), {});
  }

  const baseFn = (props?: IComponentBaseFn) => {
    let defaultVariantValues = [];
    let variantValues = [];
    const compoundVariantsValues = [];

    if (options?.variants) {
      const optionsVariants = options.variants;

      variantValues = Object.keys(optionsVariants).map(
        (variant) => optionsVariants?.[variant][props?.[variant]]
      );

      if (options?.defaultVariants) {
        const optionsDefaultVariants = options.defaultVariants;

        defaultVariantValues = Object.keys(optionsDefaultVariants).map(
          (variant) => optionsVariants?.[variant][optionsDefaultVariants?.[variant]]
        );
      }

      if (options?.compoundVariants) {
        const optionsCompoundVariants = options.compoundVariants;

        optionsCompoundVariants.forEach((compoundVariant) => {
          if (
            Object.keys(compoundVariant).every(
              (variant) =>
                variant === "class" ||
                (isArray(compoundVariant[variant])
                  ? compoundVariant[variant].includes(props?.[variant])
                  : compoundVariant[variant] === props?.[variant])
            )
          ) {
            compoundVariantsValues.push(compoundVariant.class);
          }
        });
      }
    }

    const variants = [defaultVariantValues, variantValues, compoundVariantsValues]
      .flat(Infinity)
      .filter(Boolean);

    return twMerge(options?.base, variants, props?.class);
  };

  if (!options?.slots) {
    return baseFn;
  }

  const slotsFn = () => {
    const slotKeys = Object.keys(options.slots);
    const output = { base: baseFn };

    slotKeys.forEach((slot) => {
      output[slot] = (props: object) => {
        const slotOptions = options.slots[slot];
        const componentOptions = isString(slotOptions) ? { base: slotOptions } : slotOptions;

        return component(componentOptions)(props);
      };
    });

    return output;
  };

  return slotsFn;
}
