"use server";

import { getServerSession } from "next-auth";
import { nanoid } from "nanoid";
import { authOptions } from "./lib/auth";
import { db } from "./lib/db";
import { revalidatePath } from "next/cache";

// export async function addNotes(formData: FormData) {
//   const session = await getServerSession(authOptions);
//   const user = session?.user.id;
//   const data = {
//     title : formData.get("note_title"),
//     description: formData.get("not_desc"),
//   };
//   try {
//     const notes = await db.notes.create({
//       data: {
//         title: data.title as string,
//         content: data.description as string,
//         userId: user as string,
//       },
//     });
//     return notes
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function addClass(formData: FormData) {
  const session = await getServerSession(authOptions);
  const user = session?.user.id;
  const data = {
    class_name: formData.get("class_name"),
    section: formData.get("section"),
    descript: formData.get("descript"),
  };
  try {
    const course = await db.course.create({
      data: {
        title: data.class_name as string,
        description: data.descript as string,
        section: data.section as string,
        class_code: nanoid(10),
        creator: {
          connect: {
            id: user,
          },
        },
      },
    });
    console.log("Class added successfully");
    return course;
  } catch (error) {
    return error;
  }
}

export async function getAllClasses() {
  const classes = await db.course.findMany();
  console.log(classes);
}

export async function addMarks(formData: FormData) {
  const data = {
    obatinedMarks: formData.get("obtmarks"),
    submissionId: formData.get("submissionid"),
  };
  try {
    const obtMarks = await db.submission.update({
      where: {
        id: data.submissionId as string,
      },
      data: {
        obtainedMarks: data.obatinedMarks as string,
      },
    });
    return obtMarks;
  } catch (ex) {
    console.log(ex);
  }
}

export async function joinClass(formData: FormData) {
  const session = await getServerSession(authOptions);
  const user = session?.user.id;
  const data = {
    invite_code: formData.get("class_code"),
  };
  console.log(data.invite_code);
  try {
    const course = await db.course.update({
      where: {
        class_code: data.invite_code as string,
      },
      data: {
        enrolledStudents: {
          connect: {
            id: user,
          },
        },
      },
    });
    return course;
  } catch (error) {
    console.log(error);
  }
}
export async function addmaterial(formData: FormData) {
  const session = await getServerSession(authOptions);
  const data = {
    material_title: formData.get("material_title"),
    material_desc: formData.get("material_des"),
    fileUrl: formData.get("imageurl"),
    classId: formData.get("courseId"),
  };
  console.log(data);
  try {
    await db.material.create({
      data: {
        title: data.material_title as string,
        description: data.material_desc as string,
        material: data.fileUrl as string,
        creatorId: session?.user.id as string,
        classId: data.classId as string,
      },
    });
    console.log();
  } catch (ex) {
    console.log(ex);
  }
}

export async function addAnnounce(formData: FormData) {
  const session = await getServerSession(authOptions);
  const data = {
    ann: formData.get("anno"),
    courseId: formData.get("courseId"),
  };
  try {
    const anounce = await db.announcement.create({
      data: {
        announce: data.ann as string,
        courseId: data.courseId as string,
        userId: session?.user.id as string,
      },
    });
    revalidatePath(`/dash/class/${data.courseId}`);
    return anounce;
  } catch (ex) {
    console.log(ex);
  }
}

export async function addAssignment(formData: FormData) {
  const data = {
    assignment_topic: formData.get("topic"),
    assignment_desc: formData.get("description"),
    assignment_mark: formData.get("marks"),
    courseId: formData.get("courseId"),
    duedate: formData.get("duedate"),
    reference: formData.get("imageurl"),
  };
  try {
    const assign = await db.assignment.create({
      data: {
        title: data.assignment_topic as string,
        description: data.assignment_desc as string,
        dueDate: data.duedate as string,
        courseId: data.courseId as string,
        marks: data.assignment_mark as string,
        reference: data.reference as string,
      },
    });
    return assign;
    console.log(assign);
  } catch (ex) {
    console.log(ex);
  }
}

export async function addSubmission(formData: FormData) {
  const session = await getServerSession(authOptions);
  const data = {
    submission: formData.get("uploaded_assign"),
    studentId: session?.user.id as string,
    assignmentId: formData.get("assignmentId"),
  };
  try {
    const submission = await db.submission.create({
      data: {
        content: data.submission as string,
        studentId: data.studentId as string,
        assignmentId: data.assignmentId as string,
      },
    });
    return submission;
    console.log(submission);
  } catch (ex) {
    console.log(ex);
  }
}
