import { getAssignmentInfo, getSubmissions } from "@/app/utils/action";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Grades(props: { assignmentId: string }) {
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
          <div key={submission.id}>
            <div>
              {submission.student.name}: {submission.obtainedMarks}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
