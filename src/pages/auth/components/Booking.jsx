import validateForm from "../validator/validate-for-form";
import ErrorMessage from "./Errormessage";
import FormInput from "./FormInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { formThunk } from "../slice/auth-slice";
import { useDispatch } from "react-redux";
const initialInput = {
  firstName: "",
  lastName: "",
  petName: "",
  date: "",
  doctorName: "",
};

export default function Booking() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      // const errorResult = validateForm(input);
      // if (errorResult) {
      //   return setError(errorResult);
      // }
      setError({});
      await dispatch(formThunk(input)).unwrap();
      toast.success("your form has been submitted");
    } catch (err) {
      toast.error("cannot submit");
    }
  };

  return (
    <div className="relative flex flex-col  h-[calc(100vh-80px)] overflow-hidden bg-slate-200">
      <div className="w-full p-6 m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-black pb-4">
          Request An Appointment
        </h1>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
          <div>
            <FormInput
              placeholder="Firstname"
              name="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.firstName} />
          </div>

          <div>
            <FormInput
              placeholder="Lastname"
              name="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.lastName} />
          </div>
          <div>
            <FormInput
              placeholder="Pet name"
              name="petName"
              value={input.petName}
              onChange={handleChangeInput}
            />
            <ErrorMessage message={error.petName} />
          </div>

          <div className="">
            <select type="text" name="service" onChange={handleChangeInput}>
              <option value="">Service</option>
              <option value="vacciantions">Vacciantions</option>
              <option value="behavior-evaluation">Behavior evaluation</option>
              <option value="nutrition-advices">Nutrition advices</option>
              <option value="dental-care">Dental Care</option>
              <option value="general-surgery">General Surgery</option>
              <option value="general-dentistry">General Dentistry</option>
            </select>
          </div>

          <div className="">
            <select
              type="text"
              name="doctorName"
              onChange={handleChangeInput}
              value={input.doctorName}
            >
              <option value="amanda">Amanda Bright</option>
              <option value="anne">Anne Dolkins</option>
              <option value="milton">Milton Murphey</option>
              <option value="olivia">Olivia Archer</option>
              <option value="william">William Lens</option>
            </select>
          </div>
          <div className="form-field-auth h-[50px]">
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChangeInput}
              value={input.date}
            />
          </div>
          <div className="grid place-items-end">
            <button className="bg-slate-500 hover:bg-slate-400 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
