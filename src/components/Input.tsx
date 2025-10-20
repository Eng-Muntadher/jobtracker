interface InputProps {
  type: string;
  id: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange:
    | ((e: React.ChangeEvent<HTMLInputElement>) => void)
    | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void);
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  addedClasses?: string;
  srOnlyInfo?: string;
  autoComplete?: string;
  min?: string;
  max?: string;
}

function Input({
  type,
  id,
  name,
  placeholder,
  required = false,
  addedClasses = "",
  srOnlyInfo = "",
  value,
  disabled = false,
  autoComplete,
  onChange,
  defaultValue,
  min,
  max,
}: InputProps) {
  const styles =
    "bg-(--input-color) text-(--text-color) rounded-lg px-3 py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100";

  return (
    <>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
          required={required}
          aria-describedby={srOnlyInfo ? `${id}-help` : undefined}
          className={`${styles} ${addedClasses}`}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          min={min}
          max={max}
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          aria-describedby={srOnlyInfo ? `${id}-help` : undefined}
          className={`${styles} ${addedClasses}`}
        />
      )}
      {srOnlyInfo && (
        <p
          className="sr-only"
          aria-required={required ? true : false}
          id={`${id}-help`}
        >
          {srOnlyInfo}
        </p>
      )}
    </>
  );
}

export default Input;
