import { LoaderIcon } from "../../../icon/icon";
export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black opacity-30 z-40">
      <div className="fixed inset-0 z-50">
        <div className="flex justify-center items-center min-h-full ">
          <LoaderIcon className="fill-green-200 animate-spin" />
        </div>
      </div>
    </div>
  );
}
