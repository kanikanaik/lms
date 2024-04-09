import SwitchMaterial from "@/app/components/Forms/SwitchMaterial";

interface PageProps {
  params: {
    courseId: string;
  };
}
const page = async ({ params }: PageProps) => {
  return (
    <div>
      <SwitchMaterial courseId={params.courseId} />
    </div>
  );
};

export default page;
