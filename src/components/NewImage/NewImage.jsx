import React, { useState } from 'react'
import './NewImage.css'
import Sidebar from '../Dashboard/Sidebar/Sidebar'
import NavDashBoard from '../ControlPanal/NavDashBoard'
import Header from '../newChat/Header'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import question from '../../assets/images/question-circle.svg'
import rocket from '../../assets/images/SVG.svg'
export default function NewImage() {
  const [expend, setexpend] = useState(false);
  return (
    <section className='NewImage'>
      <div className="container-fluid p-0">
        <div className="row m-0 p-0">
          <div className="col-lg-12 col-xl-9 p-0 col-md-12">
            <div className='ar '>
              <NavDashBoard head='مرحبًا بك في تصميم الصور' />
            </div>
            <div className='mt-5'>
              <Header />
            </div>
            <div className='img-options ar '>
              <div className='row justify-content-center'>
                <div className="col-lg-3 col-md-10 mt-md-4 mt-xs-4 mt-sm-4 me-2">
                  <label for="exampleFormControlTextarea1" className="form-label">أسلوب  الصورة <LazyLoadImage src={question} alt='question' placeholderSrc={question} effect='blur' opasity='0.5' /></label>
                  <select className="form-select p-2 pe-4 ar" aria-label="Default select example">
                    <option selected>حدد</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select></div>
                <div className="col-lg-3 col-md-10 mt-md-4 mt-xs-4 mt-sm-4 me-2"><label for="exampleFormControlTextarea1" className="form-label">مقاس الصورة <LazyLoadImage src={question} alt='question' placeholderSrc={question} effect='blur' opasity='0.5' /></label>
                  <select className="form-select p-2 pe-4 ar" aria-label="Default select example">
                    <option selected>حدد</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select></div>
                <div className="col-lg-3 col-md-10 mt-md-4 mt-xs-4 mt-sm-4 me-2"><label for="exampleFormControlTextarea1" className="form-label">عدد النتائج <LazyLoadImage src={question} alt='question' placeholderSrc={question} effect='blur' opasity='0.5' /></label>
                  <select className="form-select p-2 pe-4 ar" aria-label="Default select example">
                    <option selected>حدد</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select></div>
              </div>

            </div>
            <div className='img-detail-input row justify-content-center'>
              <div className='col-lg-9 col-xl-9 mt-5 col-md-10 col-sm-10 px-sm-5 mx-sm-5'>

                <div className="input-group mb-3 ar ">
                  <input type="text" className="form-control p-3 ar" placeholder="اكتب بإيجاز وصف للصورة التي في ذهنك..." aria-label="Recipient's username" aria-describedby="basic-addon2" />

                  <span className="input-group-text" id="basic-addon2">إنشاء </span>
                  <span className='rocket'><LazyLoadImage src={rocket} alt='img' effect='blur' opasity='0.5' placeholderSrc={rocket} /></span>
                </div>

              </div>
            </div>

          </div>
          <div className="col-xl-3  ar p-0 m-0">
            <Sidebar expend={expend} setexpend={setexpend} />
          </div>
        </div>
      </div>
    </section>
  )
}
