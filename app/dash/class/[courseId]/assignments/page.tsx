
import SwitchAssignment from "@/app/components/Forms/SwitchAssignment";
interface PageProps {
  params: {
    courseId: string;
  };
}
const page = async({params}:PageProps) => {
  return (
    <div className="flex flex-col px-24 py-6">
      <div className="px-2">
        <p className="font-bold  text-lg"> Assignment</p>
        <hr></hr>
      </div>
      <SwitchAssignment courseId={params.courseId} />
    </div>
  );
};

export default page;
