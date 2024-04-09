import AddAnnouncement from "@/app/components/Forms/AddAnnouncement";
import Classroom from "@/app/components/Forms/Classroom";
import Link from "next/link";
import { ShowAnnouncements } from "@/app/components/Forms/ShowAnnouncements";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

interface PageProps {
  params: {
    courseId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  return (
    <div className="flex flex-col px-24 py-1">
      <Classroom courseId={params.courseId} />
      <div className="flex gap-4 mt-4">
        <Link href={`/dash/class/${params.courseId}/materials`}>
          <button className="bg-black text-white p-3 rounded-md">
            Materials
          </button>
        </Link>
        <Link href={`/dash/class/${params.courseId}/assignments`}>
          <button className="bg-black text-white p-3 rounded-md">
            Assignments
          </button>
        </Link>
      </div>

      <AddAnnouncement courseId={params.courseId} />
      <ShowAnnouncements courseId={params.courseId} />
    </div>
  );
};

export default Page;
