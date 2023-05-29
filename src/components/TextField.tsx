import { ComponentPropsWithoutRef, Ref, forwardRef } from "react";
import clsx from "clsx";

interface ITextFieldProps extends ComponentPropsWithoutRef<"input"> {
  containerClass?: string;
}

const TextField = forwardRef(
  (props: ITextFieldProps, ref: Ref<HTMLInputElement>) => {
    const { containerClass, className, ...propsInput } = props;

    return (
      <div className={props.containerClass}>
        <input
          type="text"
          className={`w-full border border-gray-400 rounded-lg overflow-hidden py-2 px-3 outline-none focus:border-red-500 ${props.className}`}
          ref={ref}
          {...propsInput}
        />
      </div>
    );
  },
);

export default TextField;
