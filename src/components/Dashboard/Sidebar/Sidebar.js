import React from "react";
import "./sidebar.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import logodashboard from "../../../assets/images/Frame 1171275899.svg";
import textlogodashboard from "../../../assets/images/textlogodashboard.svg";
import { NavLink, useLocation } from "react-router-dom";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { BsChatText } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import img1 from "../../../assets/images/image-1.svg";
import edit2 from "../../../assets/images/edit-2-sidebar.svg";
import refresh from "../../../assets/images/refresh-circle.svg";
import prof from "../../../assets/images/user-2.svg";
import Avatar from "../../../assets/images/Avatar.jpg";
import star from "../../../assets/images/glowing-star-svgrepo-com 1.svg";
const Sidebar = ({ expend, setexpend }) => {
   const { pathname } = useLocation();

   return (
      <>
         {/* <span className=" w-100 h-25 bg-black"></span> */}

         <div
            className={`${
               expend ? "d_flex" : "d_none"
            } Sidebar   flex-column gap-2 col-xl-2 col-md-4 col-sm-5 col-8 sec_toggle 
                  flex-column position-fixed h-100 pe-3 `}
         >
            <IoClose
               className=" text-white fs-1 button_toggle margin_close"
               onClick={() => setexpend(!expend)}
            />
            <div className="d-flex flex-column gap-1 w-100">
               <div className="mt-5 d-flex flex-column  justify-content-center align-items-center gap-1 w-50 m-auto">
                  <LazyLoadImage
                     alt={"hi"}
                     effect="blur"
                     src={logodashboard}
                     opacity="true"
                     placeholderSrc={logodashboard}
                  />
                  {/* <LazyLoadImage
                     alt={"hi"}
                     effect="blur"
                     src={textlogodashboard}
                     opacity="true"
                     placeholderSrc={textlogodashboard}
                  /> */}
               </div>
               <ul className="ps-0 mt-3 gap-1  align-items-center d-flex flex-column justify-content-center ">
                  <span className="special d-flex justify-content-start w-100">
                     <p> مساحتك</p>
                  </span>

                  <span
                     className={`${
                        pathname === "/control" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/control"}
                        className="li_sidebar d-flex  align-items-center gap-2"
                     >
                        <RxDashboard className="a_sidebar me-5" />
                        <li className=" a_sidebar ">لوحة التحكم</li>
                     </NavLink>
                  </span>

                  <span
                     className={`${
                        pathname === "/newchat" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/newchat"}
                        className="li_sidebar d-flex  align-items-center gap-2"
                     >
                        <BsChatText className="a_sidebar me-5" />
                        <li className=" a_sidebar ">ابدا محادثة جديدة</li>
                     </NavLink>
                  </span>
                  <span
                     className={`${
                        pathname === "/newimage" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/newimage"}
                        className="li_sidebar d-flex  align-items-center gap-2 pe-5"
                     >
                        <LazyLoadImage
                           src={img1}
                           alt="img"
                           effect="blur"
                           opacity="0.5"
                           className="a_sidebar "
                        />
                        <li className=" a_sidebar ">صمم صورة جديدة</li>
                     </NavLink>
                  </span>
                  <span
                     className={`${
                        pathname === "/" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/"}
                        className="li_sidebar d-flex  align-items-center gap-2 pe-5"
                     >
                        <LazyLoadImage
                           src={edit2}
                           alt="img"
                           effect="blur"
                           opacity="0.5"
                           className="a_sidebar "
                        />
                        <li className=" a_sidebar ">كتابة مقال كامل</li>
                     </NavLink>
                  </span>
                  <span
                     className={`${
                        pathname === "/language" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/language"}
                        className="li_sidebar d-flex  align-items-center gap-2"
                     >
                        <FaWandMagicSparkles className="a_sidebar me-5" />
                        <li className=" a_sidebar "> المدقق اللغوي</li>
                     </NavLink>
                  </span>
                  <span className="special d-flex justify-content-start w-100">
                     <p> العضوية</p>
                  </span>
                  <span
                     className={`${
                        pathname === "/newimage" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/newimage"}
                        className="li_sidebar d-flex  align-items-center gap-2 pe-5"
                     >
                        <LazyLoadImage
                           src={refresh}
                           alt="img"
                           effect="blur"
                           opacity="0.5"
                           className="a_sidebar "
                        />
                        <li className=" a_sidebar ">إدارة الاشتراك </li>
                     </NavLink>
                  </span>
                  <span
                     className={`${
                        pathname === "/newimage" && "span_ul_sidebar"
                     } span_lang w-100 d-flex justify-content-center`}
                  >
                     <NavLink
                        to={"/newimage"}
                        className="li_sidebar d-flex  align-items-center gap-2 pe-5"
                     >
                        <LazyLoadImage
                           src={prof}
                           alt="img"
                           effect="blur"
                           opacity="0.5"
                           className="a_sidebar "
                        />
                        <li className=" a_sidebar ">حسابى</li>
                     </NavLink>
                  </span>
               </ul>
               <div className="profile-S p-3 pt-5">
                  <div className="profile-img mt-1 text-center">
                     <LazyLoadImage
                        src={Avatar}
                        alt="profile-img"
                        opacity="0.5"
                        effect="blur"
                     />
                  </div>
                  <div className="row justify-content-around mt-3 word-info">
                     <div className="col-lg-6 col-6 text-center">
                        <h6>كلمات متبقية</h6>
                        <p>840</p>
                     </div>
                     <div className="col-lg-6 col-6 text-center">
                        <h6>عدد الميديا</h6>
                        <p>5</p>
                     </div>
                  </div>
                  <div className="upgrade">
                     <button type="" className="btn upgrade-btn d-flex text-center w-75 m-auto justify-content-center align-items-center">
                        ترقية <span><LazyLoadImage src={star}  className=" me-1 d-inline-block"/></span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
