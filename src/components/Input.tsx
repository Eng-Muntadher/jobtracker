/**
 * Accessible Input component.
 * Renders an input with optional required validation and a visually hidden
 * sr-only message (`srOnlyInfo`) that is announced by screen readers via
 * aria-describedby and role="alert".
 * Allows custom styling through addedClasses.
 */

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  addedClasses?: string;
  srOnlyInfo?: string;
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
  onChange,
}: InputProps) {
  const styles =
    "bg-(--input-color) rounded-lg px-3 py-2 focus:outline-none focus:ring-3 focus:ring-(--text-color-secondary) transition-all ease-in duration-100";
  return (
    <>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
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
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
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
