import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import consultimg from "../../images/consultant.jpg";
import stageimg from "../../images/stagesofconsult.png";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import p6 from "../../images/p6.png";

const AboutUs = () => {
  const points = [
    "Personal Consultations",
    "Unique technique",
    "Group Therapy",
    "Couple Problem",
    "Online Therapy"
  ];


  return (

    <div className="h-screen overflow-y-auto">
      <Header />
      <section className="sm:mt-24 lg:mt-36 mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="block text-bermuda xl:inline">
              Dr. S. Suthakaran{" "}
              </span>
              <span className="block  xl:inline">
                — Licensed Mental Health Counselor, Psychotherapist
              </span>
            </h1>
            <p className="mt-3 mb-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            passion for helping individuals and families overcome challenges and build resilience. They create a safe space for open communication and personalized treatment plans.
            </p>
            <div className="flex flex-wrap">
              {points.map((point, index) => (
                <div key={index} className="w-1/2 flex items-center mb-4">
                  <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow mt-3 sm:mt-0 sm:ml-3">
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="text-white bg-bermuda hover:bg-blue-100 hover:text-black w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-bermuda hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 sm:w-full my-4">
            <img
              src={consultimg}
              alt="Doctor"
              className="mx-auto "
            />
          </div>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-gray-800 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <div className="mx-auto max-w-5xl text-center">
         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
           words
         </h2>
       </div> */}
        </div>
        <div className="mt-10 bg-white dark:bg-gray-700 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-green-50 dark:bg-gray-800"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl lg:max-w-6xl">
                <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3 p-8 ">
                  <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-3xl font-bold leading-6 ">
                      Years of experience
                    </dt>
                    <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      In psychology
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                      <span>20</span>+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                      Patients received help
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                      <span>840</span>+
                    </dd>
                    <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      This year
                    </dt>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                      Positive Feedback
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                      <span>98</span>%
                    </dd>
                    <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      From our doctor
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="features" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20 mb-72">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Stages of consultation with patients on mental health
          </h2>
        </div>
        <div className="flex">
          <div>
            {/* First Card */}
            <div className="w-full px-4">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block"></div>
                <div>
                  <dd className="order-1 text-6xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                    01
                  </dd>
                  <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                    Request on the site
                  </dt>
                  <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                  Schedule a confidential consultation today.
                  </dt>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="w-full px-4 ">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block"></div>
                <div>
                  <dd className="order-1 text-6xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                    02
                  </dd>
                  <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                    Timing
                  </dt>
                  <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                  essions can be done virtually or in-person
                  </dt>
                </div>
              </div>
            </div>
          </div>


          <div>
            {/* Third Card */}
            <div className="w-full px-4">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block"></div>
                <div>
                  <dd className="order-1 text-6xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                    03
                  </dd>
                  <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                    Conducting a session

                  </dt>
                  <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                  Flexible scheduling to fit your needs.
                  </dt>
                </div>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="w-full px-4">
              <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                <div className="mx-auto mb-7 inline-block"></div>
                <div>
                  <dd className="order-1 text-6xl font-bold tracking-tight text-[#26aba3] dark:text-green-400">
                    04
                  </dd>
                  <dt className="order-2 mt-2 text-3xl font-bold leading-6">
                    Satisfied review
                  </dt>
                  <dt className="order-3 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                  "Therapy helped me thrive - read client testimonials!"
                  </dt>
                </div>
              </div>
            </div>
          </div>


          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-1/2 px-4">
            <img src={stageimg} alt="Doctor" className="mx-auto" />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20 "
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center ">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            What I'm Offer
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          In a safe and confidential space, I can connect you with a licensed counselor to discuss your mental health concerns and develop strategies for a happier, healthier you.
          </p>
        </div>

        <div class="-mx-4 flex flex-wrap p-8">
          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              
          <img
          width="60"
          height="60"
            src={p1}
            alt="Doctor"
           
          />

              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Depression Therapy
                </h3>
                <p class="text-base font-medium text-body-color">
                journey of self-discovery and empowerment. We'll walk alongside you as you 
                build resilience and reclaim your joy.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              <img
          width="60"
          height="60"
            src={p2}
            alt="Doctor"
           
          />
              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Couples Counseling
                </h3>
                <p class="text-base font-medium text-body-color">
                Improve communication, strengthen your relationship, and overcome challenges together.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              <img
          width="60"
          height="60"
            src={p3}
            alt="Doctor"
           
          />
              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Relationships
                </h3>
                <p class="text-base font-medium text-body-color">
                Address communication issues, build healthy boundaries, and create more fulfilling connections.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              <img
          width="60"
          height="60"
            src={p4}
            alt="Doctor"
            color="white"
           
          />
              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Anxiety Disorder
                </h3>
                <p class="text-base font-medium text-body-color">
                Develop coping mechanisms and manage symptoms of anxiety for greater peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              <img
          width="60"
          height="60"
            src={p5}
            alt="Doctor"
           
          />
              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Children Therapy
                </h3>
                <p class="text-base font-medium text-body-color">
                Provide tools and support to help young minds navigate emotions and social situations.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
              <div class="mx-auto mb-7 inline-block">
              <img
          width="60"
          height="60"
            src={p6}
            alt="Doctor"
           
          />
              </div>
              <div>
                <h3 class="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Individual Therapy
                </h3>
                <p class="text-base font-medium text-body-color">
                Address depression, anxiety, stress, and other concerns in a safe and supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="relative bg-[#e5f7f8]  ">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <p className="mx-auto -mt-4 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
            Welcome to
            <span className="border-b border-dotted border-slate-300">
              {" "}
              GenZHeal{" "}
            </span>
          </p>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span className="inline-block">
              {" "}
              Your
              <span className="relative whitespace-nowrap text-bermuda">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-bermuda/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative"> Personal </span>
              </span>
            </span>
            <span className="inline-block"> Counseling</span>
          </h1>
          <p className="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
            <span className="inline-block">
              Bring functionalities of other apps
            </span>
            <span className="inline-block">into your Notion workspaces.</span>
          </p>

          <div className="mt-12  mb-10 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 animate-fade-in-left"
              href="#"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-3 w-3 flex-none"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"></path>
              </svg>
              <a href="/appointment">
              <span className="ml-3">Get Appointment</span></a>
            </a>
            <div
              className="relative flex flex-1 flex-col items-stretch sm:flex-none "
              data-headlessui-state=""
            >
             
            </div>
          </div>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-black duration-300 transform border border-bermuda rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
            </svg>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs