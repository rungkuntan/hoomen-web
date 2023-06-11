import createClasses from "../../../utils/create-classes";
export default function LoginInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const className = createClasses(
    "block w-full rounded-lg border border-black py-3 px-3 outline-none focus:ring=-1",
    isInvalid
      ? "border red-500 focus:ring-red-300"
      : " border-black focus:ring-black"
  );
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
