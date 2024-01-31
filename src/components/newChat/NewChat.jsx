import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import logo_only from "../../assets/images/logo.svg";
import profile from "../../assets/images/Avatar.png";
import more from "../../assets/images/Cheveron.svg";
import search from "../../assets/images/search.svg";
import chat3 from "../../assets/images/chatgpt-icon 1.svg";
import chat4 from "../../assets/images/chatgpt-icon 2.svg";
import lock from "../../assets/images/Haruki Icons.svg";
import plus from "../../assets/images/plus.svg";
import microphone from "../../assets/images/microphone-svgrepo-com 1.svg";
import rise from "../../assets/images/trending-up.svg";
import "./NewChat.css";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import img1 from '../../assets/images/image-1.svg'
import attatch from '../../assets/images/attachment.svg'
import link from '../../assets/images/link.svg'

import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import Avatar from "../../assets/images/Avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from './Header'
import NavDashBoard from "../ControlPanal/NavDashBoard";
export default function NewChat() {
   const [input_NewChat, setInput_NewChat] = useState("");
   const [expend, setexpend] = useState(false);

   const handleInput = (e) => {
      setInput_NewChat(e.target.value);
   };
   return (
      <div className="row m-0 p-0">
         <section className="NewChat col-lg-12 col-xl-9 col-md-12 p-0">
            <div className="">
               <div className="NewChatContainer">
                  <div className=" ">
                     <div className="ar col-xl-12 col-12   h-100">
                        <NavDashBoard/>
                     </div>
                     <div className="chat-option w-50 ms-auto me-auto ">
                        <div className="d-flex">
                           <div className="col ">
                              <button>
                                 <img src={chat3} alt="" />
                                 ChatGPT
                              </button>
                           </div>
                           <div className="col en">
                              <button>
                                 <img src={chat4} alt="" />
                                 GPT-4 <img src={lock} alt="" />
                              </button>
                           </div>
                           <div className="col ">
                              <button>
                                 <img src={chat4} alt="" />
                                 Google PalM 2 <img src={lock} alt="" />
                              </button>
                           </div>
                        </div>
                     </div>
                     <Header />
                     <div className="chat-details ar w-75 me-auto ms-auto mt-5">
                        <div className="row justify-content-between align-content-md-stretch">
                           <div className=" col-lg-6 col-xl-6 col-sm-12 col-xs-12  col-md-6 item-container">
                              <div className="p-2 item mt-4">
                                 <h5>إنشاء استراتيجية تسويق</h5>
                                 <p>
                                    ما هي العوامل الأساسية التي يجب مراعاتها عند
                                    إنشاء استراتيجية تسويق رقمي شاملة؟
                                 </p>
                              </div>
                           </div>
                           <div className=" col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12   item-container">
                              {" "}
                              <div className="p-2 item mt-4">
                                 <h5>
                                    التخطيط لحملة على وسائل التواصل الاجتماعي
                                 </h5>
                                 <p>
                                    قم بصياغة حملة على وسائل التواصل الاجتماعي
                                    لبراند ملابس.
                                 </p>
                              </div>
                           </div>
                           <div className=" col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12     item-container">
                              {" "}
                              <div className="p-2 item mt-4">
                                 <h5>زيادة معدلات النقر إلى الظهور</h5>
                                 <p>
                                    اقترح طرق مبتكرة لزيادة معدلات النقر على
                                    رسائل البريد الإلكتروني.
                                 </p>
                              </div>
                           </div>
                           <div className=" col-lg-6 col-xl-6 col-sm-12 col-md-6 col-xs-12   item-container">
                              {" "}
                              <div className="p-2 item mt-4">
                                 <h5>تحسين تجربة خدمة العملاء لدينا</h5>
                                 <p>
                                    اقترح علينا كيف يمكننا تحسين تجربة خدمة
                                    العملاء لدينا؟
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="input mt-4 text-center w-75  me-auto ms-auto">
                        <input
                           type="text"
                           name=""
                           value={input_NewChat}
                           onChange={handleInput}
                           placeholder="كيف استطيع مساعدتك اليوم؟"
                           className="w-100  ar"
                        />
                        <div className="overlay1">
                           <LazyLoadImage
                              src={rise}
                              alt={"hi"}
                              effect="blur"
                              opacity="true"
                              placeholderSrc={rise}
                              className=" rise"
                           />
                        </div>
                        <div className="overlay2 d-flex ">
                           <LazyLoadImage
                              src={microphone}
                              alt={"hi"}
                              effect="blur"
                              opacity="true"
                              placeholderSrc={microphone}
                              className="col me-2 micro"
                           />
                           {/* */}
                           <div class="dropdown ar">
                              <button class="btn p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <LazyLoadImage
                                    src={plus}
                                    alt={"hi"}
                                    effect="blur"
                                    opacity="true"
                                    placeholderSrc={plus}
                                    className="col plus"
                                 />
                              </button>
                              <ul class="dropdown-menu">
                                 <li className="dropdown-item ar text-end mb-3"><LazyLoadImage src={attatch} alt='' effect='blur' opacity='0.5' className='attatch-img ms-1' placeholderSrc={attatch} />  تحميل ملف </li>
                                 <li className="dropdown-item ar text-end mb-3"><LazyLoadImage src={img1} alt='' effect='blur' opacity='0.5' className='attatch-img ms-1' placeholderSrc={img1} /> تحميل صورة  </li>
                                 <li className="dropdown-item ar text-end mb-3"><LazyLoadImage src={link} alt='' effect='blur' opacity='0.5' className='attatch-img ms-1' placeholderSrc={link} />  اضف عنوان URL </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className="col  ar p-0 m-0">
                  <Sidebar expend={expend} setexpend={setexpend} />
               </div>
      </div>
   );
}
