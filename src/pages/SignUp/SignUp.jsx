import React from 'react'
import Login from '../Login/Login'

function SignUp() {
  return (
        
             <div className='login-container'>
               <div className="image-container">
                 <img src='https://cdn.pixabay.com/photo/2022/08/19/17/27/camping-7397346_640.png' alt='' className='image1'/>
                 {/* <img src="https://cdn.pixabay.com/photo/2019/07/22/16/13/children-4355469_640.jpg" alt="" className="login-img" /> */}
               </div>
               <div className="form-container">
                 <div className="describe">
                     <img src="https://media.istockphoto.com/id/1278953374/vector/lettering-composition-of-outdoor-adventure-with-silhouette-of-pine-forest-on-white-background.jpg?s=612x612&w=0&k=20&c=D5qArQz7Al4R3yhAvk1kkvDm71v9RkNbTJ2Q2y7qRCQ=" alt="" className="logo" />
                     <h1>Welcome!</h1>
                     <p>Please enter your details to get started</p>
                 </div>
                 <div className="login-form">
                     <form action="" className="login" > 

                     <label htmlFor='name'> Name </label>
                     <input type="text"  id= 'name' placeholder='' className='line'/>
                     
                         <label htmlFor='email'> Email </label>
                         <input type="email"  id= 'email' placeholder='' className='line'/>
         
                         <label htmlFor='password'> Password </label>
                         <input type="password" id= 'password' placeholder='' className='line'/>
         
                         <label>
                           <input type="checkbox" className="check-box" />
                           <span> Remember me for 30 days </span>
                        </label>
                         {/* <input type="checkbox" className='check-box'/><span>Remember for 30 days</span> */}
                         <button className='login-btn'>Sign Up</button>
                     </form>
                 </div>
                       <div className='Signup-link'>
                         <footer>
                         Already have an account? <a href='/Login'> Login </a>
                         </footer>
                       </div>
               </div>
             </div>
         
  )
}

export default SignUp
