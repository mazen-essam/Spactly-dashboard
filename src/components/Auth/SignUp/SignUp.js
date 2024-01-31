import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../../assets/images/logo.svg";
import google from "../../../assets/images/google.png";
import apple from "../../../assets/images/apple.png";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";

const SignUp = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header ar">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ar">
              التزامنا بمراعاة خصوصيتك تلتزم إي أف بحماية خصوصية عملائنا. وتنطبق
              سياسة حماية الخصوصية المعتمدة من قبل إي أف ("سياسة حماية
              الخصوصية") على كل المعلومات الشخصية التي يتم جمعها من قبلنا أو
              تقديمها لنا، إن دون الاتصال بالإنترنت (offline) أو بالاتصال
              بالإنترنت (online)، بما في ذلك المعلومات الشخصية التي يتم جمعها أو
              تقديمها من خلال مواقعنا الإلكترونية ("مواقعنا الإلكترونية") وعلى
              أي مواقع على الهواتف الجوالة والتطبيقات الصغيرة وغيرها من الميزات
              التفاعلية للجوّال (والمشار إليها مجتمعةً بـ"تطبيقاتنا")، من خلال
              صفحاتنا الرسمية على وسائل التواصل الاجتماعي التي نتحكم بها
              ("صفحاتنا على وسائل التواصل الاجتماعي")، ومن خلال رسائل HTML التي
              نرسلها إليكم (والمشار إليها مجتمعةً، بما في ذلك الصفحات على وسائل
              التواصل الاجتماعي والتطبيقات والمواقع الإلكترونية، بـ"المواقع").
              ومن خلال تقديمكم المعلومات الشخصية لنا، توافقون على أحكام وشروط
              هذه السياسة. ت الشخصية ما هي المعلومات الشخصية التي نجمعها؟
              "المعلومات الشخصية" هي المعلومات التي تعرّف عنكم كأفراد، وتشمل:
              الاسم اسم المستخدم العنوان البريدي (بما في ذلك عنوان إرسال
              الفواتير والشحنات) رقم الهاتف (بما في ذلك رقم الهاتف الجوّال ورقم
              المنزل) عنوان البريد الإلكتروني رقم بطاقة الاعتماد ورقم بطاقة
              الخصم الصورة الشخصية رقم الحساب على وسائل التواصل الاجتماعي بلد
              الإقامة اسم وعنوان المدرسة اسم وعنوان الشركة الدورات التعليمية
              المفضّلة التفضيلات معلومات حول المتصفّح والجهاز معلومات حول ملفّ
              سجلّ الخادم المعلومات التي يتم جمعها من خلال ملفات تعريف الارتباط
              وبيانات البكسل الإضافية والتقنيات الأخرى بيانات استخدام التطبيقات
              المعلومات الديموغرافية وغيرها من المعلومات التي توفّرونها معلومات
              الموقع المعلومات المجمّعة المعلومات الأخرى التي تشاركها خلال
              المكالمات الهاتفية أو مكالمات الفيديو، والتسجيلات المرئية أو
              النصية مثل المكالمات والمحادثات. يف نجمع المعلومات الشخصية؟ قد
              نقوم نحن ومقدمو الخدمات لدينا بجمع معلومات شخصية بأساليب مختلفة،
              تشمل ما يلي: عبر المواقع: يمكننا أن نجمع المعلومات الشخصية عبر
              المواقع؛ مثلا: عند تسجيلكم للحصول على نشرة إخبارية ,تتواصل مع بوت
              المحادثات,أو إجراء عملية شراء. دون اتصال بالإنترنت offline: في
              المكتب: نحن نجمع معلوماتك الشخصية في مكاتبنا، على سبيل المثال،
              عندما تتواصل مع خدمة العملاء لتشترك في إحدى البرامج أو الخدمات أو
              لتقدم إلينا معلومات سواءً كان ذلك كتابياً، عن طريق مكالمة صوتية أو
              مرئية. من خلال المتصفح أو الجهاز الخاص بكم: يتم جمع بعض المعلومات
              بواسطة معظم المتصفحات أو من خلال جهازكم تلقائيا. نستخدم هذه
              المعلومات لأغراض الإحصائيات وضمان حسن عمل المواقع. من خلال ملفات
              سجل الخادم: إنّ "عنوان بروتوكول الإنترنت" الخاص بكم هو رقم يُخصّص
              تلقائيا للحاسوب أو الجهاز الذي تستخدمونه من قبل موفّر خدمة
              الإنترنت الخاص بكم. ويتمّ تحديد عنوان بروتوكول الإنترنت وتسجيله
              تلقائيًا في ملفات سجل الخادم كلّما قام المستخدم بزيارة المواقع، مع
              تحديد وقت الزيارة والصفحة/الصفحات التي جرت زيارتها. باستخدام ملفات
              تعريف الارتباط (الكوكيز): تتيح ملفات تعريف الارتباط لخادم الويب
              نقل البيانات إلى حاسوب أو جهاز لغرض حفظها ولأغراض أخرى. إن كنتم لا
              تريدون أن يتم جمع المعلومات من خلال استخدام ملفات تعريف الارتباط،
              هناك إجراء بسيط متوفر في معظم المتصفحات يتيح لكم عدم استخدام ملفات
              تعريف الارتباط. للمزيد من المعلومات حول استخدامنا لملفات تعريف
              الارتباط، نرجو مراجعة سياسة ملفات تعريف الارتباط المعتمدة من
              قبلنا. من خلال استخدامكم للتطبيق: عند تنزيل أو استخدام أحد
              التطبيقات، يمكننا نحن ومقدّمو الخدمات لدينا أن نتتبّع ونجمع بيانات
              استخدام التطبيق، مثل وقت وتاريخ دخول التطبيق الموجود على جهازكم
              إلى خوادمنا والمعلومات والملفات التي تم تنزيلها على التطبيق
              بالاعتماد على رقم جهازكم. من خلالكم: يمكن جمع معلومات مثل تاريخ
              الولادة والجنس والرمز البريدي، بالإضافة إلى غيرها من المعلومات،
              مثل وسائل الاتصّال المفضلة لديكم، عندما تقومون أنتم بتوفير هذه
              المعلومات طوعًا. من خلال الموقع الجغرافي: قد نجمع معلومات حول
              الموقع الجغرافي لجهازكم.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="d-flex ar ">
        <div className="d-flex flex-column justify-content-center  align-items-center  col-xl-4 col-lg-6 col-12 h_vh_UP">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={logo}
            className="h-100 img_xxl"
            opacity="true"
            placeholderSrc={logo}
          />
          <h1 className="color_pink fw-bolder py-2"> ابدأ الآن مجاناً </h1>
          <form className="d-flex flex-column gap-1 align-content-end w-100 px-5  gap-2">
            <label htmlFor="name" className=" fw-bold  primary fs_auth">
              أدخل أسمك
            </label>
            <input
              id="name"
              type="text"
              className="input_style_auth"
              placeholder="اسم المستخدم"
            />
            <label htmlFor="email" className=" fw-bold  primary fs_auth">
              بريدك الألكتروني{" "}
            </label>
            <input
              id="email"
              type="text"
              className="input_style_auth"
              placeholder="البريد الإلكتروني"
            ></input>
            <label htmlFor="password" className=" fw-bold  primary fs_auth">
              كلمة المرور
            </label>
            <span className=" span_input">
              <input
                id="password"
                type="password"
                className="input_style_auth"
                placeholder="كلمة المرور"
              />
              <svg
                className="icon_input"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.25 13C10.25 12.0335 11.0335 11.25 12 11.25C12.9665 11.25 13.75 12.0335 13.75 13C13.75 13.6981 13.3412 14.3007 12.75 14.5816V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14.5816C10.6588 14.3007 10.25 13.6981 10.25 13Z"
                  fill="#ED5AB3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.93414 2.93414C9.01247 1.8558 10.475 1.25 12 1.25C13.525 1.25 14.9875 1.8558 16.0659 2.93414C17.1442 4.01247 17.75 5.47501 17.75 7C17.75 7.06963 17.7405 7.13705 17.7228 7.20102C20.1229 8.51803 21.75 11.069 21.75 14C21.75 18.2802 18.2802 21.75 14 21.75H10C5.71979 21.75 2.25 18.2802 2.25 14C2.25 11.069 3.87706 8.51803 6.27725 7.20102C6.25949 7.13705 6.25 7.06963 6.25 7C6.25 5.475 6.8558 4.01247 7.93414 2.93414ZM15.0052 3.9948C15.7015 4.69108 16.1312 5.60408 16.2287 6.57526C15.5229 6.36368 14.7747 6.25 14 6.25H10C9.22528 6.25 8.47711 6.36367 7.77126 6.57525C7.86878 5.60408 8.29852 4.69108 8.9948 3.9948C9.79183 3.19777 10.8728 2.75 12 2.75C13.1272 2.75 14.2082 3.19777 15.0052 3.9948ZM10 7.75C6.54822 7.75 3.75 10.5482 3.75 14C3.75 17.4518 6.54822 20.25 10 20.25H14C17.4518 20.25 20.25 17.4518 20.25 14C20.25 10.5482 17.4518 7.75 14 7.75H10Z"
                  fill="#ED5AB3"
                />
              </svg>
            </span>
            <div className="form-check fw-bold  primary">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <u
                className="form-check-label fs_auth"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                أوافق على سياسة الخصوصية
              </u>
            </div>
            <Link to="/verifyaccount" className="button_auth fs_auth">
              {" "}
              إنشاء حساب{" "}
            </Link>
          </form>
          <p className="fs-5 fw-normal my-2 fs_auth">أو إنشاء حساب بستخدام</p>

          <div className="d-flex flex-column gap-3 align-content-end w-100 px-5  gap-2">
            <button className="button_auth">
              إنشاء بواسطة جوجل
              <LazyLoadImage
                alt={"hi"}
                effect="blur"
                src={google}
                className="h-100"
                opacity="true"
                placeholderSrc={google}
              />
            </button>
            <button className="button_auth fs_auth">
              إنشاء بواسطة أبل
              <LazyLoadImage
                alt={"hi"}
                effect="blur"
                src={apple}
                className="h-100"
                opacity="true"
                placeholderSrc={apple}
              />
            </button>
            <button className="button_auth fs_auth">
              إنشاء بواسطة فيس بوك
              <SiFacebook className=" -white fs-5" />
            </button>
          </div>

          <span className="mt-4 d-flex gap-2">
            <p className=" fs-6 text-black-50">هل لديك حساب؟</p>
            <Link to="/signin" className="fs-6 fw-bold  primary ">
              تسجيل الدخول
            </Link>
          </span>
        </div>
        <div className=" col-xl-8 col-lg-6  bg_auth h_vh_UP "></div>
      </section>
    </>
  );
};

export default SignUp;
