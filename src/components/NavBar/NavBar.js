import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-gray-400">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-white">QUIZ</a>
  </div>
  <div className="flex-none text-white">
    <ul className="menu  menu-horizontal p-0">
      <li><a>Item 1</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default NavBar;