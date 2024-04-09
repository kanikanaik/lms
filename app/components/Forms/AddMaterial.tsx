import { addmaterial } from "@/app/action";
import { UploadButton } from "@/app/utils/uploadthing";
import Image from "next/image";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function AddMaterial(props: { courseId: string }) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(formData: FormData) {
    try {
      await addmaterial(formData);
      toast.success("Material added successfully");
      formRef.current?.reset();
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <main className="flex flex-col px-24 py-10">
      <div className="px-2">
        <p className="font-bold  text-lg"> Material</p>
        <button className=""></button>
        <hr></hr>
      </div>

      <div className="bg-white rounded-md p-5">
        <form method="post" action={handleSubmit} ref={formRef}>
          <p>Add title : </p>
          <input
            className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
            name="material_title"
            type="text"
          ></input>
          <br></br>
          <br></br>
          <p>Desciption : </p>
          <input
            className="bg-neutral-800 text-white p-1 text-sm rounded-md border-slate-700 border-2"
            name="material_des"
            type="text"
          ></input>
          <br></br>
          <br></br>
          <input
            name="imageurl"
            className="hidden"
            value={imageUrl}
            type="text"
          ></input>
          <input
            className="hidden"
            name="courseId"
            type="text"
            value={props.courseId}
          ></input>
          <p> Choose File : </p>
          <div className="flex justify-start">
            <UploadButton
              className="ut-button:bg-neutral-800 justify-start"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setImageUrl(res[0].url);
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                //   alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

          {imageUrl.length ? (
            <div>
              <iframe src={imageUrl} height={100} width={200}></iframe>{" "}
            </div>
          ) : null}

          <button
            type="submit"
            className="rounded-full py-2 px-3 bg-neutral-800 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
