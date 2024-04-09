import ShowAssignment from "@/app/components/Forms/SShowAssignment";
import SUploadAssignment from "@/app/components/Forms/SUploadAssignment";

interface PageProps {
  params: {
    assignmentId: string;
    courseId : string;
  };
}
const page = async ({ params }: PageProps) => {
  return (
    <div className="flex flex-col px-24 py-6">
      <div className="px-2">
        <p className="font-bold  text-lg">
          {" "}
          Assignment 
        </p>
        <hr></hr>
        <div className="flex">
          <ShowAssignment courseId={params.courseId} assignmentId={params.assignmentId} />
        </div>
      </div>
    </div>
  );
};

export default page;