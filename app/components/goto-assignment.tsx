import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { getCourseCreator } from '../utils/action';

function GotoAssignment({courseId} : {courseId: string}) {
//     const session = useSession();
//     const userId = session.data?.user.id
//     const {data: CourseCreators, isLoading} = useQuery({
//         queryKey:["CourseCreator"],
//         queryFn: async() => {
//             return await getCourseCreator(courseId)
//         }
//     })
//     const router = useRouter();
//     const handleSubmit = () = {
        
//     }
//   return (
//     <div>
//       <button className="bg-black text-white p-3 rounded-md" >
//         Assignments
//       </button>
//     </div>
//   );
}

export default GotoAssignment
