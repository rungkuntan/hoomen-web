export default function RegisterInput({ placeholder, value, onChange, name }) {
  return (
    <input
      type="text"
      className="block w-full rounded-lg border border-black py-3 px-3"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
