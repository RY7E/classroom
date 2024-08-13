import React from 'react'

const Navbar = ({designation}) => {

    // const [designation, setDesignation] = useState("Principal");
    // // const [designation, setDesignation] = useState("Teacher");
    // // const [designation, setDesignation] = useState("Student");
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
            {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul // Half View
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Create Student Account</a></li>
                <li><a>Create Teacher Account</a></li>
                <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
            </ul>
            </div> */}
            <a className="btn btn-ghost text-xl">Classroom</a>
        </div>
        <div className="navbar-center lg:flex"> 
            {/* add hidden class to hide navbar for half view */}
            {/* Full View */}
            <ul className="menu menu-horizontal px-1">
                {
                    designation === "Principal" ? <li><a>Create Class</a></li> : ""
                }
                {
                    designation === "Teacher" ? <li><a>Create Timetable</a></li> : ""
                }
                {designation !== "Student" ? 
                    <li>
                        <details>
                        <summary>Create Account</summary>
                        <ul className="p-2">
                            {
                                designation === "Principal" ? <li><a>Create Teacher</a></li> : ""
                            }
                            {
                                designation === "Principal" || designation === "Teacher" ? <li><a>Create Student</a></li> : ""
                            }
                            
                        </ul>
                        </details>
                    </li> : ""}
                {designation === "Principal" || designation === "Teacher" ? 
                    <li>
                        <details>
                        <summary>Edit</summary>
                        <ul className="p-2">
                            {
                                designation === "Principal" ? <li><a>Edit Teacher</a></li> : ""
                            }
                            {
                                designation === "Principal" || designation === "Teacher" ? <li><a>Edit Student</a></li> : ""
                            }
                            
                        </ul>
                        </details>
                    </li> : ""}
                    <li>
                        <details>
                        <summary>View</summary>
                        <ul className="p-2">
                            {
                                designation === "Principal" && (
                                    <>
                                        <li><a>View Teachers</a></li>
                                        <li><a>View Students</a></li>
                                        <li><a>View Classes</a></li>
                                    </>
                                )
                            }
                            {
                                designation === "Teacher" && (
                                    <>
                                        <li><a>View Students</a></li>
                                        <li><a>View Class</a></li>
                                    </>
                                )
                            }
                            {
                                designation === "Student" && (
                                    <>
                                        <li><a>View Timetable</a></li>
                                        <li><a>View Students</a></li>
                                    </>
                                )
                            }
                        </ul>
                        </details>
                    </li>
            </ul>
            
        </div>
        <div className="navbar-end flex gap-4">
            {designation === "Principal" ? <p className='text-blue-400'>Welcome Principal!</p> : ""}
            <a className="px-3 py-2 rounded-xl bg-red-500 text-white cursor-pointer hover:scale-[.95]">Logout</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar
