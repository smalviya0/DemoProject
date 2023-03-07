/* .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
  }
  
  .logo img {
    width: 100px;
  }
  
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .nav-links li {
    list-style: none;
    margin: 0 10px;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    font-size: 16px;
  }
  
  .nav-links li a:hover {
    color: #007bff;
  }
  
   */

   /* .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
  }
  
  .logo {
    order: 1;
    margin-right: auto;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  } */
import React from 'react';

export default function Apps(){


  <div class="flex justify-between items-center bg-white shadow-md px-10 py-4">
  <div class="logo">
    {/* <img class="w-20" src="logo.png" alt="Logo"> */}
  </div>
  <ul class="flex justify-end items-center">
    <li>
      <a href="#" class="text-gray-700 font-medium hover:text-blue-500">Home</a>
    </li>
    <li>
      <a href="#" class="text-gray-700 font-medium hover:text-blue-500">Signup</a>
    </li>
    <li>
      <a href="#" class="text-gray-700 font-medium hover:text-blue-500 active:text-red-500">Login</a>
    </li>
  </ul>
</div>
}

