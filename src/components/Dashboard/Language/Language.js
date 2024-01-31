import React, { useState } from "react";
import "./language.css";
import Sidebar from "../Sidebar/Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import Avatar from "../../../assets/images/Avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Language = () => {
  const [expend, setexpend] = useState(false);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header ar">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ar m-auto w-100">
              <form className="d-flex align-items-center gap-1 w-100  ">
                <button type="submit" className="btn ">
                  <LuSearch className="fs-4 primary" />
                </button>
                <input
                  type="text"
                  className="form-control h-75"
                  id="inputPassword2"
                  placeholder="ابحث"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className=" d-flex ar h-100">
        <Sidebar expend={expend} setexpend={setexpend} />
        <div className="ar col-xl-9 col-12   h-100">
          <div className="shadow-sm d-flex justify-content-between  gap-2 p-3">
            <div className=" d-flex align-items-center  gap-2 w-75">
              <HiMenuAlt3
                className="color_pink fs-2 button_toggle "
                onClick={() => setexpend(!expend)}
              />
              <span className=" header_name fw-bold primary">
                مرحبًا بك في المدقق اللغوي
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
      </section>
    </>
  );
};

export default Language;
