import { getAssignmentInfo, getSubmissions } from "@/app/utils/action";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { BookCheck } from "lucide-react";
import { addMarks } from "@/app/action";
import { useState } from "react";

export default function GradeAssignment(props: { assignmentId: string }) {
  const [obtmarks, setMarks] = useState("");
  const { data: assignmentInfos } = useQuery({
    queryKey: ["assignmentInfo"],
    queryFn: async () => {
      return getAssignmentInfo(props.assignmentId);
    },
  });
  const { data: submissions, isLoading } = useQuery({
    queryKey: ["submission"],
    queryFn: async () => {
      return getSubmissions(props.assignmentId);
    },
  });
  const marks = assignmentInfos?.map((assignmentInfo) => assignmentInfo.marks);
  return (
    <div>
      Fetch submissions :
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        submissions?.map((submission) => (
          <div
            key={submission.id}
            className="bg-purple-300 flex gap-3 justify-between rounded-md p-3"
          >
            <Link href={submission.content as string}>
              <div className="flex gap-3">
                <BookCheck />
                <Image
                  width={30}
                  height={30}
                  src={submission.student.image as string}
                  alt="profile picture"
                  className="w-8 h-8 rounded-full"
                />
                <p>{submission.student.name}</p>
              </div>
            </Link>
            <div className="gap-2">
              <form method="post" action={addMarks}>
                <input
                  className="hidden"
                  name="submissionid"
                  id="submissionid"
                  value={submission.id}
                ></input>
                Marks :
                <input
                  type="text"
                  className="w-5 text-black rounded-sm bg-transparent outline-none onfocus:border-none"
                  name="obtmarks"
                  placeholder={submission.obtainedMarks as string}
                  value={obtmarks}
                  onChange={(e) => setMarks(e.target.value)}
                />
                /{marks}
                <button
                  type="submit"
                  className="bg-neutral-800 text-white p-2 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
