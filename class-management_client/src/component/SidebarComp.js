import { Link } from "react-router-dom"


export const SidebarComp=()=>{
   return(<>
    <div class="ui">
 
 <div class="entity">
    <ul>
        <li>
        <Link to={'admissions'}>
          admissions
         </Link>
        </li>
   
   </ul>
   <ul>
   <li>
        <Link to={'attendances'}>
          attendances
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'branches'}>
          branches
         </Link>
        </li>   
         </ul> 
   <ul>
   <li>
        <Link to={'courses'}>
          courses
         </Link>
        </li>   
        </ul> 
   <ul>
      <li>
         <Link to={'exams'}>
         exams
         </Link>
      </li>
   </ul> 
   <ul>
   <li>
        <Link to={'staff_attendance '}>
          staff_attendance
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'staffs'}>
          staffs
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'student_attendance'}>
          student_attendance
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'student_course'}>
          student_course
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'student_exam'}>
          student_exam
         </Link>
        </li>   
        </ul> 
   <ul>
      <li>
         <Link to={'students'}>
         students
         </Link>
      </li>
   </ul> 
   <ul>
   <li>
        <Link to={'subjects'}>
          subjects
         </Link>
        </li>   
        </ul> 
   <ul>
   <li>
        <Link to={'topics'}>
          topics
         </Link>
        </li>   
        </ul>
   </div>
 </div>
    </>) 
}