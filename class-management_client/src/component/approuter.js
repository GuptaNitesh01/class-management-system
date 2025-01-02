
import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admissions from "./Admissions";
import Students from "./students";
import Staffs from "./Staff";
import Attendances from "./Attendance";
import Branches from "./Branches";
import Courses from "./Courses";
import Subjects from "./Subjects";
import Exams from "./Exams";
const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
    //   errorElement:<Errorpage/>,
      children:[
        {
          path:"Exams",
          element:<Exams/>,
        },
        {
            path:"admissions",
            element:<Admissions/>,
        },
        {
          path:"Students",
          element:<Students/>,
      },
      {
        path:"Staffs",
        element:<Staffs/>,
    },
    {
      path:"Attendances",
      element:<Attendances/>,
  },
  {
    path:"Branches",
    element:<Branches/>,
},
{
  path:"Courses",
  element:<Courses/>,
},
{
  path:"subjects",
  element:<Subjects/>,
}
     
      ]
    },
  ]);

  export default appRouter;            // we can use in other file because of export default