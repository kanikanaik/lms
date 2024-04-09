import ChatRender from "../chat-render";

type course = {
  id: string;
  title: string;
  description: string | null;
  section: string | null;
  class_code: string | null;
  creatorId: string;
} | null;

export default function Chat({
  courseId,
  course,
}: {
  courseId: string;
  course: course;
}) {
  return <ChatRender course={course} courseId={courseId as string} />;
}
