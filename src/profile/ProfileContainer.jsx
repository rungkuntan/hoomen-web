import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForm, deleteFormThunk } from "../pages/auth/slice/auth-slice";

export default function ProfileContainer() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.auth.form);

  useEffect(() => {
    dispatch(fetchForm())
      .unwrap()
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteFormThunk())
      .unwrap()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen  bg-slate-200">
      <div className="flex justify-center items-center min-h-[200px]">
        <h1 className="font-bold text-3xl">Your Appointments</h1>
      </div>
      <div className="flex justify-center items-center left-[480px] bg-custom rounded-md min-h-[400px] min-w-[700px] ">
        <div>
          {form[0]?.firstName}
          {form[0]?.lastName}
          {form[0]?.petName}
          {form[0]?.date}
        </div>
        <button className="bg-slate-500 hover:bg-slate-400 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem] box-border">
          EDIT APPOINTMENT
        </button>
        <button
          className="bg-slate-500 hover:bg-slate-400 rounded-lg text-white text-lg font-bold px-8 py-1 min-w-[10rem]"
          onClick={handleDelete}
        >
          CANCEL APPOINTMENT
        </button>
      </div>
    </div>
  );
}
