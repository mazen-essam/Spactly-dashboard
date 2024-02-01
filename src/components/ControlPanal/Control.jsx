import React, { useState } from "react";
import "./Control.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import Avatar from "../../assets/images/Avatar.jpg";
import setting from '../../assets/images/settings.svg'
import bell from '../../assets/images/bell.svg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import arrow_small_right from '../../assets/images/arrow-small-right.svg'
import NavDashBoard from "./NavDashBoard";
import SimpleLineChart from "./ChartC";
import product from '../../assets/images/product-guide-svgrepo-com 1.svg'
import BarChart from "./BarChart";
import TableC from "./Table";
import { DataGrid } from '@mui/x-data-grid';
import refresh from "../../assets/images/refresh-circle.svg";
import prof from "../../assets/images/user-2.svg";
import setting2 from '../../assets/images/filters-2.svg'
import grid2_setting from '../../assets/images/grid-2-horizontal.svg'
import login from '../../assets/images/login.svg'
import ShowMoreText from 'react-show-more-text';

// import ReactShowMoreText from "react-show-more-text";
// const Card = ({ number, text, color }) => {
//    return (
//       <div className="card" style={{ backgroundColor: color }}>
//          <div className="card-content">
//             <p>{text}</p>
//             <div className="card-number">{number}</div>
//          </div>
//          <button className="card-arrow">⟲</button>
//       </div>
//    );
// };
export default function Control() {
   const [expend, setexpend] = useState(false);
   const [search, setSearch] = useState('')
   const [showMore, setShowMore] = useState(false)
   const HandleShow = () => {
      if (showMore == true) {
         setShowMore(false)
      }
      else {
         setShowMore(true)
      }
   }
   const cardData = [
      { id: 1, number: '55', text: 'احصل على إجابات فورية ودقيقة على أسئلتك، واستمتع بتفاعل متقدم يلبي احتياجاتك. ابدأ الدردشة الآن واكتشف عالم الذكاء الاصطناعي الذي يفهمك بشكل فريد.', title: 'ابدا محادثة جديدة', color: 'red' },
      { id: 2, number: '12', text: 'تحكم بتفاصيل التصميم وابتكر تصاميم مذهلة تلفت الانتباه، حيث يقوم الذكاء الاصطناعي بتحليل احتياجاتك وتحويلها إلى صور رائعة. كن جزءًا من تجربة تصميم فريدة.', title: 'صمم صورة جديدة', color: 'green' },
      { id: 3, number: '24', text: 'مقالات تتناسب مع احتياجاتك بشكل احترافي، ولتحسين SEO. سواء كنت بحاجة إلى مقال إخباري، أو مقال تسويقي، فإن الذكاء الاصطناعي سينتج لك نصًا ذكيًا يلبي احتياجاتك. ', title: 'كتابة مقال احترافي', color: 'blue' },
      { id: 4, number: '08', text: 'يقوم الذكاء الاصطناعي بفحص نصوصك بدقة، يصحح الأخطاء الإملائية والنحوية، ويضمن لك دقة لغوية عالية في كتاباتك، مما يعزز احترافيتها دون الحاجة لتدقيق يدوي.', title: 'المدقق اللغوي', color: 'yellow' },
   ];
   const { pathname } = useLocation();


   const HandleSearch = (e) => {
      setSearch(e.target.vaule)
   }

   return (
      <section className="Control">
         <div className="container-fluid p-0 m-0">
            <div className="d-flex p-0 m-0">
               <div className="col-lg-12 col-xl-10 ar p-0 col-md-12 col-sm-12 col-12 ">
                  <div className="containerC">
                     <div className="nav-c mt-3 ">
                        <div className="row justify-content-between">
                           <div className="col-lg-10 col-xl-10 search-con col-md-8 col-8">
                              <input type="text" value={search} onChange={HandleSearch} placeholder="ابحث..." className="c-search w-100" /><div>
                              </div>
                           </div>
                           <div className="col-lg-2 col-xl-2 col-md-3 row py-2 col-4 text-end align-items-center  justify-content-between setting-nav rounded-5 px-4">


                              <div className="item col-lg-3 col-md-3 col-3 p-0 d-flex align-items-center justify-content-center  ">
                                 <div className="img " onClick={HandleShow}>
                                    <LazyLoadImage src={setting} effect="blur" opasity='0.5' alt="profile-pic-sm " placeholderSrc={setting} />
                                 </div>
                              </div>
                              <div className="item col-lg-3 col-md-3 col-3  p-0 d-flex align-items-center justify-content-center ">
                                 <div className="img">
                                    <LazyLoadImage src={bell} effect="blur" opasity='0.5' alt="profile-pic-sm" placeholderSrc={bell} />
                                 </div>
                              </div>
                              <div className="item col-lg-3 col-md-3 col-3  p-0 d-flex align-items-center justify-content-center bg-img-fix">
                                 <div className="img" onClick={HandleShow}>
                                    <LazyLoadImage src={Avatar} effect="blur" opasity='0.5' alt="profile-pic-sm" placeholderSrc={Avatar} />
                                 </div>
                              </div>
                              {showMore && <div className="overlay p-4 rounded-4 blue">
                                 <div className="d-flex align-items-center mb-4">
                                    <div className="col-2"><LazyLoadImage src={Avatar} className=" w-100" />
                                    </div>
                                    <div className="col-5 me-2"><p className="mb-0 blue">مرحبا</p><p className="mb-0 blue fw-bold">جواد</p></div>

                                 </div>
                                 <div className="blue word-count-setting"> <span className="fw-bold">عدد الكلمات</span>: 150 الف</div>
                                 <div className="blue font-family-fix mt-2">  <span className="font-family-normal">التجديد</span>: 01-01-2024 <span className="pink">02:27</span></div>
                                 <ul>
                                    <li className="list-unstyled"><span
                                       className={`${pathname === "/newimage" && "span_ul_sidebar"
                                          } span_lang w-100 d-flex justify-content-start p-0`}
                                    >
                                       <NavLink
                                          to={"/newimage"}
                                          className="li_sidebar d-flex  align-items-center gap-2 "
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
                                    </span></li>
                                    <li className="list-unstyled"><span
                                       className={`${pathname === "/newimage" && "span_ul_sidebar"
                                          } span_lang w-100 d-flex justify-content-start p-0`}
                                    >
                                       <NavLink
                                          to={"/newimage"}
                                          className="li_sidebar d-flex  align-items-center gap-2 "
                                       >
                                          <LazyLoadImage
                                             src={setting2}
                                             alt="img"
                                             effect="blur"
                                             opacity="0.5"
                                             className="a_sidebar "
                                          />
                                          <li className=" a_sidebar ">الاعدادت</li>
                                       </NavLink>
                                    </span></li>
                                    <li className="list-unstyled"><span
                                       className={`${pathname === "/newimage" && "span_ul_sidebar"
                                          } span_lang w-100 d-flex justify-content-start p-0`}
                                    >
                                       <NavLink
                                          to={"/newimage"}
                                          className="li_sidebar d-flex  align-items-center gap-2 "
                                       >
                                          <LazyLoadImage
                                             src={refresh}
                                             alt="img"
                                             effect="blur"
                                             opacity="0.5"
                                             className="a_sidebar "
                                          />
                                          <li className=" a_sidebar  ">إدارة الاشتراك</li>
                                       </NavLink>
                                    </span></li>

                                 </ul>
                                 <hr />

                                 <div className="d-flex align-items-center">
                                    <div className="col d-flex align-items-center"><LazyLoadImage src={grid2_setting} className=' w-25 ms-2' />الاستهلاك</div><div className="col"> <p className="m-0"><span className="pink">13.5 ألف </span>/ 150 ألف</p></div>
                                 </div>
                                 <div className="d-flex pink align-items-center mt-3">
                                    <div className="col-2 p-1"><LazyLoadImage src={login} /></div>
                                    <div className="col-10"> تسجيل الدخول</div></div>
                              </div>}

                              <div>
                              </div>
                           </div>

                        </div>
                     </div>
                     <div className="welcome p-4">
                        <h2>مرحبا جواد</h2><p className="welcome-p mt-4">مجموعة الأدوات الأكثر تطورًا في مجال الذكاء الاصطناعي متوفرة هنا</p>
                        <div className="row justify-content-between">
                           {cardData.map(item => {
                              return (
                                 <div className="p-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 " >
                                    <div className={`img${item.number} p-4 px-2 d-flex flex-column justify-content-between`} key={item.id}>
                                       <div className="">
                                          <h4>{item.title}</h4><ShowMoreText
                                             lines={4} // Number of lines to display initially
                                             more="Show More"
                                             className="para"
                                             less="Show Less"
                                             anchorClass="more-btn"
                                             expanded={false}
                                          >
                                             {item.text}
                                          </ShowMoreText></div>
                                       <div className="d-flex justify-content-between bottom-arrow">
                                          <p className="num fs-1">{item.number}</p>
                                          <div className="arrow-welcome w-25">
                                             <LazyLoadImage src={arrow_small_right} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>

                     </div>
                     <div className="charts en mt-5">
                        <div className="row justify-content-between justify-sm-content-center">
                           <div className="col-xl-8 col-lg-8 col-md-12 chart1 col-12">
                              <SimpleLineChart />
                           </div>
                           <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                              <BarChart />
                           </div>

                        </div>
                     </div>
                     <div className="control-table mt-5">
                        <div className="table-con p-4">
                           <div className="table-head">
                              <h5><LazyLoadImage src={product} alt='icon' effect='blur' opasity='0.5' className='' /> أخر الانشطة</h5>
                              <p>عرض</p>
                              <select className="form-select select-num-show rounded-5 d-inline-block" >
                                 <option selected value='20'>20</option>
                                 <option value="10">10</option>

                              </select>
                              <input type="text" className="form-controld-inline-block me-3 rounded-5 search-input" placeholder="بحث" />
                           </div>
                           <div className="">
                              <TableC />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

               <div className=" col-xl-2 ar p-0 m-0 ">
                  <Sidebar expend={expend} setexpend={setexpend} />
               </div>
            </div>
         </div>
      </section>
   );
}
{/* <div className="shadow-sm ">
                     <div className="fix d-flex justify-content-between align-content-stretch gap-2 py-3">
                        <div className=" d-flex align-items-center  gap-2 w-75">
                           <HiMenuAlt3
                              className="color_pink fs-2 button_toggle "
                              onClick={() => setexpend(!expend)}
                           />
                           <span className=" header_name fw-bold primary">
                              <button className="control-header-btn">
                                 ملف جديد +
                              </button>
                           </span>
                        </div>
                        <div className="d-flex justify-content-end align-items-center  gap-2 w-50">
                           <LuSearch
                              className="fs-4 primary d-lg-block d-none"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                           />

                           <div className="dropdown en">
                              <button
                                 className="btn dropdown-toggle font_en border-0 "
                                 type="button"
                                 id="dropdownMenuButton1"
                                 data-bs-toggle="dropdown"
                                 aria-expanded="false"
                              >
                                 <LazyLoadImage
                                    alt={"hi"}
                                    effect="blur"
                                    src={Avatar}
                                    opacity="true"
                                    placeholderSrc={Avatar}
                                    className="me-2 "
                                 />
                                 Mostafa M.
                              </button>
                              <ul
                                 className="dropdown-menu font_en"
                                 aria-labelledby="dropdownMenuButton1"
                              >
                                 <li>
                                    <a className="dropdown-item" href="#/">
                                       Action
                                    </a>
                                 </li>
                                 <li>
                                    <a className="dropdown-item" href="#/">
                                       Another action
                                    </a>
                                 </li>
                                 <li>
                                    <a className="dropdown-item" href="#/">
                                       Something else here
                                    </a>
                                 </li>
                                 <li>
                                    <span className="dropdown-item" href="#/">
                                       <LuSearch
                                          className="fs-4 primary d-lg-none d-block"
                                          data-bs-toggle="modal"
                                          data-bs-target="#exampleModal"
                                       />
                                    </span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="start">
                     <div className="row">
                        <div className="col">
                           <h2 className="white">
                              جرب مدقق ومحسن تحسين محركات البحث (SEO).
                           </h2>{" "}
                           <p className="white">
                              قياس الأداء مقابل المنافسين والحصول على اقتراحات
                              لاستخدام الكلمات الرئيسية
                           </p>
                           <div>
                              <button className="p-2 rounded">
                                 <p className="d-inline-block ms-1 mb-0">
                                    ابدأ الأن
                                 </p>
                                 <p className="d-inline-block me-4 arrow mb-0">
                                    ←
                                 </p>
                              </button>
                           </div>
                        </div>
                        <div className="col h-100 ">
                           <div className="avatar1  en">
                              <div className="img">
                                 <img src={avatar} alt="" />
                              </div>{" "}
                              PICK YOUR AVATAR
                           </div>
                           <div>
                              <div className="avatar2 en ">
                                 <div className="img">
                                    <img src={shape} alt="" />
                                 </div>
                                 <p>AI IMAGES</p>

                              </div>
                              <div className="avatar3 en">
                                 <div className="img">
                                    <img src={share} alt="" />
                                 </div><p>REAL TIME DATA</p>

                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=" Control-container">
                     <div className="profile p-3">
                        <div className="row justify-content-center justify-content-lg-between justify-content-xl-between">
                           <div className="col-lg-6 row profile-details p-3">
                              <div className="col-lg-6 col-sm-6 col col-md-6 info">
                                 <p className="info-value">
                                    <LazyLoadImage
                                       effect="blur"
                                       src={user}
                                       opacity="true"
                                       placeholderSrc={user}
                                       alt="container_img "
                                       className="ms-1"
                                    />{" "}
                                    <span className="info-start"> الاسم :</span> مصطفى مصطفى
                                 </p>
                                 <p className="info-value">
                                    <LazyLoadImage
                                       effect="blur"
                                       src={phone}
                                       opacity="true"
                                       placeholderSrc={phone}
                                       alt="container_img "
                                       className="ms-1"
                                    />{" "}
                                    <span className="info-start"> البريد الالكتروني :</span> Mostafa@gmail.com
                                 </p>
                                 <p className="info-value">
                                    <LazyLoadImage
                                       effect="blur"
                                       src={mail}
                                       opacity="true"
                                       placeholderSrc={mail}
                                       alt="container_img "
                                       className="ms-1"
                                    />{" "}
                                    <span className="info-start"> الرقم: </span>955 748 5243
                                 </p>
                              </div>
                              <div className="col-lg-3 profile-con ">
                                 <div className="h-100 d-flex justify-content-center flex-column align-items-center">
                                    <p className="pink">الاستهلاك</p>
                                    <p className=""> <span className="blue">13.7 ألف</span> / 150 ألف </p>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col col-xl-3  profile-img p-0">
                                 <div className="img pro-img">

                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6  total">
                              <div className="pe-xl-3 pe-lg-3  h-100 d-flex flex-column justify-content-between">
                                 <div className="total-words p-3  ">
                                    <p className="m-0 p-2">اجمالي الكلمات :</p>
                                 </div>
                                 <div className="total-pic p-3 ">
                                    <p className="m-0 p-2">اجمالي الصور :</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="welcome mt-5">
                        <div className=" position-relative">
                           <div className="img  text-center m-auto"> <LazyLoadImage src={logo_only} alt='logo' effect='blur' placeholderSrc={logo_only} opacity='0.5' className='text-center' /></div>
                           <h4 className="mt-4">كن مختلفا، وحسن من إنتاجية عملك مع سبيستلي!</h4>
                           <div class="w-75 m-auto mt-5 position-relative">
                              <input type="email" class="form-control py-3" id="exampleFormControlInput1" placeholder="بحث" />
                              <div className="icon position-absolute"><LazyLoadImage src={search} alt='search' effect='blur' placeholderSrc={search} opacity='0.5' className='text-center' /></div>
                           </div>
                           <div className="overlay-welcome position-absolute">مرحبا مصطفى</div>
                        </div>
                     </div>
                     <div className="quick-links mt-5">
                        <div class="container">
                           <div class="row justify-content-between justify-content-md-center ">
                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2 p-0 text-end">
                                       <div className="img">
                                          <LazyLoadImage src={img1} alt='' placeholderSrc={img1} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                       </div>
                                    </div>
                                    <div class="inner-div-two col-lg-8 p-0 col-md-8">
                                       <h5>إنشاء مستند جديد</h5>
                                       <p>محرر سبيستلي المتطور</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2  p-0 text-end">
                                       <div className="img">
                                          <LazyLoadImage src={img2} alt='' placeholderSrc={img2} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                       </div>
                                    </div>
                                    <div class="inner-div-two col-lg-8 p-0 col-md-8 ">
                                       <h5>ابدأ محادثة جديدة</h5>
                                       <p>أحدث تقنيات SpaceChat</p>
                                    </div>
                                 </div>
                              </div>

                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2  p-0 text-end">
                                       <div className="img">
                                          <LazyLoadImage src={img3} alt='' placeholderSrc={img3} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                       </div>
                                    </div>
                                    <div class="inner-div-two col-lg-8 p-0 col-md-8 ">
                                       <h5>كتابة مقال إحترافى</h5>
                                       <p>اكتب محتوى محسن لضمان تصنيف أفضل</p>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2  p-0 text-end">
                                       <div className="img">
                                          <LazyLoadImage src={img4} alt='' placeholderSrc={img4} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                       </div></div>
                                    <div class="inner-div-two col-lg-8 p-0 col-md-8 ">
                                       <h5>عرض أقسام المحتوي</h5>
                                       <p>أنشئ أكثر من 80 نوعًا من نماذج المحتوي</p>
                                    </div>
                                 </div>
                              </div>

                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2  p-0 text-end"><div className="img">
                                       <LazyLoadImage src={img5} alt='' placeholderSrc={img5} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                    </div></div>
                                    <div class="inner-div-two col-lg-8 p-0 col-md-8 ">
                                       <h5>تصميم صورة جديدة</h5>
                                       <p>صمم صور احترافية بالذكاء الاصطناعي</p>
                                    </div>
                                 </div>
                              </div>

                              <div class="col-lg-6 col-xl-4 col-md-10 col-sm-10  mt-4 p-5 pt-0">
                                 <div className='item row justify-content-start'>
                                    <div class="inner-div-one col-lg-2 col-md-2 p-md-3 pt-md-0  pb-md-2  p-0 text-end">
                                       <div className="img">
                                          <LazyLoadImage src={img6} alt='' placeholderSrc={img6} effect='blue' opacity='0.5' className="w-100 me-auto d-block" />
                                       </div>
                                    </div>
                                    <div class="inner-div-two col-lg-8 p-0  col-md-8 ">
                                       <h5>أدوات السيو</h5>
                                       <p>أدوات تحليل متقدمة  لتعزيز السيو</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div> */}