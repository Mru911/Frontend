import React from "react";
import "./profile.css";
import defaultimg from './default_userimg.png'

function Profile() {
  return (
    <div className="profile">
      <div className="img_div">
        <div className="profileimg">
          <img src={defaultimg} alt="" />
        </div>
      </div>
      <div className="short_details">
        <p>
          Charlie Stark <br /> e2k20104080@ms.pict.edu <br /> 7231955848
        </p>
        <p>
          <b>DOB</b> : 19/07/2003 <br />
          <b>Gender</b>: Male <br />
          <b>Category</b>: OBC <br />
          <b>PAN</b> : ABXXXXX7
        </p>
        <p>
          <b>College</b> <br /> SCTR's Pune Institute of Computer Technology ,
          Dhankawadi , Pune
        </p>
        <p>
          <b>Current</b> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nihil, enim!
        </p>
      </div>
      {/* <div className="view_more">
        <i class="fa-solid fa-chevron-down"></i>
      </div> */}
    </div>
  );
}

export default Profile;
