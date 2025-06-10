import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCourse } from "../helper";
import type { Course } from "../utils";


export default function StudentCourse() {
  const { studentId, courseId } = useParams();
  const [course, setCourse] = useState<Course>();

  const navigate = useNavigate();

  useEffect(()=>{
    const courseIdAsNumber = Number(courseId);
    if(!isNaN(courseIdAsNumber)){
      getCourse(courseIdAsNumber).then(setCourse);
    }
  }, [])

  function handleClick(){
    navigate(`/students/${studentId}`)
  }

  return (
    <div className="student-course">
        <h3>{course?.name}</h3>
        {
          course?.description.map(desc=> <p>{desc}</p>)
        }
        <button onClick={handleClick}>
          Back
        </button>
    </div>
  )
}