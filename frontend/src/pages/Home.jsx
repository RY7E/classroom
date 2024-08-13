import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Login from './Login';

const Home = () => {
    
    // const [designation, setDesignation] = useState("Principal");
    // const [designation, setDesignation] = useState("Teacher");
    const [designation, setDesignation] = useState("Principal");

  return (
    <>
      {/* <Navbar designation={designation}/>
      <div className='w-full h-[90vh] flex border justify-center items-center flex-col gap-8'>
        <h1 className='text-3xl'>Classes</h1>
        <div className='table-container w-3/4 h-3/4 border'>
          <table className='border border-separate w-full h-1/2'>
            <tr>
              <td>&nbsp;</td>
              <td>Knocky</td>
              <td>Flor</td>
              <td>Ella</td>
              <td>Juan</td>
            </tr>
            <tr>
              <td>Breed</td>
              <td>Jack Russell</td>
              <td>Poodle</td>
              <td>Streetdog</td>
              <td>Cocker Spaniel</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>16</td>
              <td>9</td>
              <td>10</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Owner</td>
              <td>Mother-in-law</td>
              <td>Me</td>
              <td>Me</td>
              <td>Sister-in-law</td>
            </tr>
            <tr>
              <td>Eating Habits</td>
              <td>Eats everyone's leftovers</td>
              <td>Nibbles at food</td>
              <td>Hearty eater</td>
              <td>Will eat till he explodes</td>
            </tr>
          </table>

        </div>
      </div> */}
      <Login/>
    </>
  )
}

export default Home
