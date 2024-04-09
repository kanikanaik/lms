"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { db } from "../lib/db";

export async function getTeaching() {
  const user = await getServerSession(authOptions);
  const userId = user?.user.id;
  const courses = await db.course.findMany({
    where: {
      creatorId: userId,
    },
  });
  return courses;
}
export async function getSubmissions(assignmentId: string) {
  const submission = await db.submission.findMany({
    where: {
      assignmentId: assignmentId,
    },
    include: {
      student: true,
      assignment: true,
    },
  });
  return submission;
}

export async function getEnrolled() {
  const user = await getServerSession(authOptions);
  const userId = user?.user.id;
  const courses = await db.course.findMany({
    where: {
      enrolledStudents: {
        some: {
          id: userId,
        },
      },
    },
    include: {
      creator: true,
    },
  });
  return courses;
}

export async function getMaterial(courseId: string) {
  const material = await db.material.findMany({
    where: {
      classId: courseId,
    },
    include: {
      creator: true,
    },
  });
  return material;
}

export async function getAssignments(courseId: string) {
  const assignment = await db.assignment.findMany({
    where: {
      courseId: courseId,
    },
  });
  return assignment;
}

export async function getAssignmentInfo(assignmentId: string) {
  const assignmentInfo = await db.assignment.findMany({
    where: {
      id: assignmentId,
    },
  });
  return assignmentInfo;
}

export async function getCourseCreator(courseId: string) {
  const data = await db.course.findUnique({
    where: {
      id: courseId,
    },
  });
  return data;
}

export async function sendMessage(formData: FormData) {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  const data = {
    message: formData.get("message"),
    courseId: formData.get("courseId"),
  };
  try {
    const message = await db.message.create({
      data: {
        message: data.message as string,
        courseId: data.courseId as string,
        userId: id as string,
      },
    });
    return message;
  } catch (error) {
    return error;
  }
}

export async function sendPrivateMessage(formData: FormData) {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  const data = {
    message: formData.get("message"),
    receiverId: formData.get("receiverId"),
    courseId: formData.get("courseId"),
    senderId: formData.get("senderId"),
  };
  try {
    const privateMessage = await db.privateMessage.create({
      data: {
        message: data.message as string,
        receiverId: data.receiverId as string,
        courseId: data.courseId as string,
        senderId: id as string,
        userId: id as string,
      },
    });
    return privateMessage;
  } catch (error) {
    return error;
  }
}

export async function getPrivateMessages(
  courseId: string,
  senderId: string,
  receiverId: string,
) {
  const privateMessages = await db.privateMessage.findMany({
    where: {
      courseId: courseId,
      OR: [
        { AND: [{ userId: senderId }, { receiverId: receiverId }] },
        { AND: [{ userId: receiverId }, { receiverId: senderId }] },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      course: true,
    },
  });
  return privateMessages;
}

export async function getPublicMsg(courseId: string) {
  const messages = await db.message.findMany({
    where: {
      courseId: courseId,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return messages;
}

export async function addNotes(formData: FormData) {
  const user = await getServerSession(authOptions);
  const userId = user?.user.id;
  const data = {
    content: formData.get("content"),
    title: formData.get("title"),
  };

  try {
    const notes = await db.notes.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
        content: data.content as string,
        title: data.title as string,
      },
    });
    console.log("Notes added successfully");
    return notes;
  } catch (error) {
    console.log(error);
  }
}
