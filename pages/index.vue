<template>
  <section class="bg-[#0f0d1f]">
    <!-- Header -->
    <header
      class="fixed z-[100] flex w-screen max-w-[100vw] flex-col border-b border-solid border-b-[#d9d9d90d] bg-[linear-gradient(270deg,_rgb(7,_9,_20),_rgba(7,_9,_20,_0))] lg:bg-[rgba(221,_221,_221,_0)]"
      x-data="{isOpen: false}"
    >
      <div
        class="flex w-full max-w-7xl items-center justify-between mx-auto px-5 py-9 md:px-10"
      >
        <!-- Container -->
        <!-- Logo -->
        <a
          href="https://elevateai-live.webflow.io/"
          class="relative text-[#333333]"
        >
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/659ffd86a0aeacb3785fbfba_elevate-ai-logo.svg"
            alt=""
          />
        </a>
        <!-- Navbar Menu -->
        <nav class="hidden items-center gap-8 lg:flex lg:gap-8">
          <!-- Menu Item -->
          <a
            href="https://elevateai-live.webflow.io/pricing"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Pricing</a
          >
          <!-- Menu Item -->
          <a
            href="https://elevateai-live.webflow.io/about-us"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >About Us</a
          >
          <!-- Menu Item -->
          <a
            href="https://elevateai-live.webflow.io/contact"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Contact</a
          >
          <!-- Menu Item -->
          <a
            href="https://elevateai-live.webflow.io/sign-up"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Sign Up</a
          >
          <!-- Menu Item -->
          <a
            href="https://webflow.com/made-in-webflow/website/elevateai-live"
            target="_blank"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Clone template</a
          >
          <!-- Button -->
          <a
            href="https://www.flowspark.co/"
            target="_blank"
            class="rounded-2xl border border-solid border-[#472cb5] bg-[#472cb53d] px-6 py-5 text-center font-semibold text-white transition hover:border-[#792cb5] hover:bg-[#792CB524]"
            >Unlimited Webflow Dev</a
          >
        </nav>
        <!-- Hamberger Menu -->
        <div
          class="relative block cursor-pointer select-none text-2xl text-white lg:hidden lg:p-[18px]"
          x-on:click.prevent="isOpen = !isOpen"
        >
          <div>
            <svg
              width="1.25rem"
              height="1rem"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="overflow-hidden"
            >
              <path
                d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="relative">
        <nav
          class="opacity-0 absolute left-0 top-0 flex flex-col gap-8 w-full bg-[#000000e0] pb-16 pt-8 sm:px-10 px-5 text-base font-bold uppercase text-white no-underline"
          x-bind:class="isOpen ? 'show opacity-100' : 'hidden'"
        >
          <a href="https://elevateai-live.webflow.io/pricing">Pricing</a>
          <a href="https://elevateai-live.webflow.io/about-us">About Us</a>
          <a href="https://elevateai-live.webflow.io/contact">Contact</a>
          <a href="https://elevateai-live.webflow.io/sign-up">Sign Up</a>
          <a
            href="https://webflow.com/made-in-webflow/website/elevateai-live"
            target="_blank"
            >Clone template</a
          >
          <a
            href="https://www.flowspark.co/"
            target="_blank"
            class="w-fit cursor-pointer rounded-[18px] border border-solid border-[#472cb5] bg-[#472cb53d] px-6 py-[1.3rem] text-center font-semibold no-underline"
            >Unlimited Webflow Dev</a
          >
        </nav>
      </div>
    </header>
    <main class="text-white bg-auto overflow-clip">
      <!-- Hero Section -->
      <section class="relative block">
        <div
          class="w-full max-w-7xl mx-auto relative md:px-10 px-5 py-40 lg:pt-60 lg:pb-[22rem]"
        >
          <div
            class="z-10 flex w-full max-w-[952px] flex-col gap-6"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <!-- Hero Title -->
            <h1
              class="bg-[linear-gradient(1deg,_rgba(65,_111,_166,_0.7),_rgb(255,_255,_255)_52%)] bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
            >
              ElevateAI: Propel Your Marketing with the Power of AI
            </h1>
            <!-- Hero Content -->
            <div class="max-w-[640px]">
              <p class="text-[#c4cff5]">
                Unleash AI to drive your marketing growth. Welcome to ElevateAI
                - where we convert raw data into strategic power.
              </p>
            </div>
            <!-- Button -->
            <a
              color="primary"
              href="#"
              class="w-fit relative mt-6 inline-block overflow-hidden rounded-2xl bg-[linear-gradient(to_right,_#452bb1,_#1d1549_53%,_#452bb1)] p-[1.4px] hover:outline-0"
            >
              <div
                class="flex items-center justify-center rounded-2xl bg-[#0f0d1f] bg-[radial-gradient(circle,_rgb(26,_20,_64)_56%,_rgb(29,_21,_73))] px-6 py-5 text-center"
              >
                <p
                  class="bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-bold text-transparent"
                >
                  Elevate Your Business
                </p>
              </div>
              <div
                class="absolute bottom-auto left-0 right-auto top-0 h-10 w-10 bg-[#c4cff5] blur-[60px] filter"
              ></div>
            </a>
          </div>
        </div>
        <!-- Svg Icon -->
        <div
          class="block max-w-[62rem] top-[25.1rem] -right-[16.1rem] w-full sm:max-w-[65rem] mix-blend-overlay absolute sm:top-[28.6rem] left-auto sm:-right-[17rem]"
        >
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a0031d900156f1e7e851cc_hero-globe.svg"
            alt="Background Sphere"
            class="relative inset-0 h-full w-full max-w-full inline-block object-cover md:object-contain"
            style="visibility: visible"
          />
        </div>
        <div
          class="pointer-events-none absolute bottom-0 right-0 top-auto md:bottom-0 md:right-0"
        >
          <div class="w-full mix-blend-color-dodge blur-[400px] filter">
            <img
              src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a00dd207047d6f84b90ddc_hero-gradient-svg.svg"
              alt=""
              class="absolute inset-0 h-full w-full object-cover md:relative md:object-contain"
            />
          </div>
        </div>
      </section>
      <!-- Discover Section -->
      <div class="">
        <section class="overflow-visible lg:h-[1300px]">
          <div class="sticky lg:top-[20vh]">
            <div
              class="px-5 md:px-10 mx-auto w-full max-w-7xl py-32 md:py-16 lg:py-24"
            >
              <!-- Container -->
              <div
                class="flex flex-col items-center gap-20 overflow-visible lg:flex-row"
              >
                <section class="w-full max-w-full flex-none lg:max-w-[560px]">
                  <!-- Discover Title -->
                  <h2
                    class="text-3xl font-bold md:pb-10 md:text-5xl lg:pb-12 pb-6"
                  >
                    Discover The Unique ElevateAI Difference
                  </h2>
                  <!-- Discover Button -->
                  <a
                    color="primary"
                    href="#"
                    class="relative inline-block max-w-full overflow-hidden rounded-2xl bg-[linear-gradient(to_right,_#452bb1,_#1d1549_53%,_#452bb1)] p-[1.4px]"
                  >
                    <div
                      class="flex items-center justify-center rounded-2xl bg-[radial-gradient(circle,_rgb(26,_20,_64)_56%,_rgb(29,_21,_73))] px-6 py-5 text-center"
                    >
                      <p
                        class="bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-transparent"
                      >
                        Unleash the Power of AI
                      </p>
                    </div>
                  </a>
                </section>
                <div
                  class="flex w-full flex-col gap-8 lg:w-[300%] lg:flex-row bg-[#0f0d1f]"
                  x-data="{ CustomerPosition: (window.pageYOffset > 730 && window.pageYOffset < 1140) ? window.pageYOffset - 730 : window.pageYOffset > 1140 ? 400 : 0, InsightfulPosition: (window.pageYOffset > 730 && window.pageYOffset < 1530) ? window.pageYOffset - 730 : window.pageYOffset > 1530 ? 800 : 0 }"
                >
                  <!-- Predictive Analytics Component -->
                  <div
                    class="flex w-full max-w-none flex-none flex-col justify-between gap-0 rounded-xl bg-[#3323694d] p-8 [box-shadow:rgba(0,_0,_0,_0.05)_0px_1px_12px] lg:max-w-md lg:gap-8 lg:bg-[#332369cc]"
                  >
                    <div class="flex flex-col items-start gap-6 sm:gap-8">
                      <!-- Icon -->
                      <img
                        src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38367_Group%2047.svg"
                        alt="Features Icon 1"
                        class="inline-block h-8"
                      />
                      <!-- Title -->
                      <h3 class="text-base font-bold md:text-2xl">
                        Predictive Analytics
                      </h3>
                    </div>
                    <!-- Content -->
                    <div
                      class="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row md:items-end sm:gap-24 lg:mt-16"
                    >
                      <p class="text-xl font-bold md:text-2xl">01</p>
                      <p class="text-sm">
                        Empower your decisions with our AI-driven predictive
                        analytics, foreseeing market trends that keep you a step
                        ahead.
                      </p>
                    </div>
                  </div>
                  <!-- Customer Segmentation Component -->
                  <div
                    class="flex w-full max-w-none flex-none flex-col justify-between gap-0 rounded-xl bg-[#3323694d] p-8 [box-shadow:rgba(0,_0,_0,_0.05)_0px_1px_12px] lg:max-w-md lg:gap-8 lg:bg-[#332369cc]"
                    x-init="
                    window.addEventListener('scroll', () => {
                      if (window.pageYOffset > 730 && window.pageYOffset < 1130)
                        CustomerPosition = window.pageYOffset - 730;
                      else if (window.pageYOffset < 730)
                        CustomerPosition = 0;
                      else
                        CustomerPosition = 400;
                    });
                  "
                    x-bind:style="{ transform: 'translateX(' + -CustomerPosition + 'px)' }"
                  >
                    <div class="flex flex-col items-start gap-6 sm:gap-8">
                      <!-- Icon -->
                      <img
                        src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38366_Vector.svg"
                        alt="Features Icon 2"
                        class="inline-block h-8"
                      />
                      <!-- Title -->
                      <h3 class="text-base font-bold md:text-2xl">
                        Customer Segmentation
                      </h3>
                    </div>
                    <!-- Content -->
                    <div
                      class="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row md:items-end sm:gap-24 lg:mt-16"
                    >
                      <p class="text-xl font-bold md:text-2xl">02</p>
                      <p class="text-sm">
                        Demystify your audience with our AI-enhanced customer
                        segmentation, enabling you to connect deeper and
                        resonate better.
                      </p>
                    </div>
                  </div>
                  <!-- Insightful Actions Component -->
                  <div
                    class="flex w-full max-w-none flex-none flex-col justify-between gap-0 rounded-xl bg-[#3323694d] p-8 [box-shadow:rgba(0,_0,_0,_0.05)_0px_1px_12px] lg:max-w-md lg:gap-8 lg:bg-[#332369cc]"
                    x-init="
                    window.addEventListener('scroll', () => {
                      if (window.pageYOffset > 730 && window.pageYOffset < 1530)
                        InsightfulPosition = window.pageYOffset - 730;
                      else if (window.pageYOffset < 730)
                        InsightfulPosition = 0;
                      else
                        InsightfulPosition = 800;
                    });
                  "
                    x-bind:style="{ transform: 'translateX(' + -InsightfulPosition + 'px)' }"
                  >
                    <div class="flex flex-col items-start gap-6 sm:gap-8">
                      <!-- Icon -->
                      <img
                        src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836d_Vector%20(3).svg"
                        alt="Features Icon 3"
                        class="inline-block h-8"
                      />
                      <!-- Title -->
                      <h3 class="text-base font-bold md:text-2xl">
                        Insightful&nbsp;Actions
                      </h3>
                    </div>
                    <!-- Content -->
                    <div
                      class="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row md:items-end sm:gap-24 lg:mt-16"
                    >
                      <p class="text-xl font-bold md:text-2xl">03</p>
                      <p class="text-sm">
                        Empower your decisions with our AI-driven predictive
                        analytics, foreseeing market trends that keep you a step
                        ahead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Blog Section -->
      <section
        class="bg-[#0f0d1f] py-12 md:py-16 lg:py-20"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div
          class="mx-auto flex max-w-[704px] flex-col items-center text-center"
        >
          <!-- Title -->
          <h2
            class="bg-[linear-gradient(1deg,_rgba(65,_111,_166,_0.7),_rgb(255,_255,_255)_52%)] bg-clip-text pb-8 text-3xl font-bold text-transparent md:text-5xl"
          >
            Trusted by Thousands
          </h2>
          <!-- Content -->
          <p class="pb-8 text-[#c4cff5] max-w-[640px]">
            ElevateAI's AI-centric solutions have enabled businesses to scale
            greater heights. <br />Here's what they have to say...
          </p>
        </div>
        <!-- Animation Section -->
        <div class="relative pb-12">
          <div
            class="relative mt-6 flex gap-5 overflow-hidden sm:justify-between"
          >
            <div class="flex translate-x-0">
              <div class="animate-infinite-left-scroll flex flex-none">
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836b_Ellipse%201%20(2).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Jessica Smith</p>
                      <p class="text-sm text-[#5b6280]">@jessi_smith</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38369_Ellipse%201.svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Matthew Johnson</p>
                      <p class="text-sm text-[#5b6280]">@matjohnson</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836a_Ellipse%201%20(1).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Andy Dao</p>
                      <p class="text-sm text-[#5b6280]">@andydao</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
              </div>
              <div class="animate-infinite-left-scroll flex flex-none">
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836b_Ellipse%201%20(2).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Jessica Smith</p>
                      <p class="text-sm text-[#5b6280]">@jessi_smith</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38369_Ellipse%201.svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Matthew Johnson</p>
                      <p class="text-sm text-[#5b6280]">@matjohnson</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836a_Ellipse%201%20(1).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Andy Dao</p>
                      <p class="text-sm text-[#5b6280]">@andydao</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative mt-6 flex gap-5 overflow-hidden sm:justify-between md:gap-4"
          >
            <div class="flex translate-x-0 flex-row-reverse">
              <div class="animate-infinite-right-scroll flex flex-none">
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836b_Ellipse%201%20(2).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Jessica Smith</p>
                      <p class="text-sm text-[#5b6280]">@jessi_smith</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38369_Ellipse%201.svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Matthew Johnson</p>
                      <p class="text-sm text-[#5b6280]">@matjohnson</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836a_Ellipse%201%20(1).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Andy Dao</p>
                      <p class="text-sm text-[#5b6280]">@andydao</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
              </div>
              <div class="animate-infinite-right-scroll flex flex-none">
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836b_Ellipse%201%20(2).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Jessica Smith</p>
                      <p class="text-sm text-[#5b6280]">@jessi_smith</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d38369_Ellipse%201.svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Matthew Johnson</p>
                      <p class="text-sm text-[#5b6280]">@matjohnson</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
                <!-- Blog Item -->
                <div
                  class="mr-6 flex max-h-[264px] max-w-[520px] flex-none flex-col gap-6 rounded-2xl border-[0.5px] border-solid border-[#241a3a] bg-[#1d1c3d99] p-8 md:p-10"
                >
                  <div class="flex flex-row gap-4">
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836a_Ellipse%201%20(1).svg"
                      alt=""
                      class="inline-block h-16 w-16 rounded-full object-cover"
                    />
                    <div class="flex flex-col gap-1">
                      <p class="font-bold">Andy Dao</p>
                      <p class="text-sm text-[#5b6280]">@andydao</p>
                    </div>
                  </div>
                  <p class="text-[#c4cff5]">
                    I want to express my utmost satisfaction with Elevate AI.
                    This software has completely transformed the way we analyze
                    and utilize data in our business. Its user-friendly
                    interface, powerful features, and exceptional support have
                    exceeded our expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Process Section -->
      <section class="relative px-5 md:px-10">
        <div
          class="relative z-10 mx-auto w-full max-w-7xl py-12 md:py-16 lg:py-20"
        >
          <!-- Container -->
          <div
            class="mx-auto flex max-w-[704px] flex-col items-center text-center"
          >
            <div
              class="relative z-[2] text-center"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <!-- Title -->
              <h2
                class="bg-[linear-gradient(1deg,_rgba(65,_111,_166,_0.7),_rgb(255,_255,_255)_52%)] bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
              >
                Smooth Process. Transformative Outcomes.
              </h2>
            </div>
          </div>
          <!-- Process -->
          <div class="relative flex flex-col items-center justify-center pt-20">
            <div
              class="relative flex w-full flex-col justify-around gap-8 md:flex-row md:gap-4"
            >
              <!-- Strategy Development Process -->
              <a
                class="relative flex max-w-full flex-1 flex-col gap-2 rounded-2xl border border-dashed border-[#28284a80] bg-[#170e1b] p-6 text-[#c4cff5] mix-blend-screen transition"
                href="#w-tabs-0-data-w-pane-0"
                style="border-color: rgb(215, 47, 202)"
              >
                <!-- Title -->
                <h3
                  class="text-2xl font-bold text-white md:text-2xl"
                  style="color: rgb(215, 47, 202)"
                >
                  Strategy Development
                </h3>
                <!-- Content -->
                <p class="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
                <div
                  class="absolute -bottom-6 right-1/2 aspect-[1_/_1] w-12 translate-x-1/2 opacity-80 md:-bottom-[30px] md:w-14"
                >
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed0d6a64e79558852a4_tab-circle-decor-inactive.svg"
                    alt=""
                    class="h-full w-full opacity-0"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="h-full w-full opacity-100"
                  />
                </div>
              </a>
              <!-- Personalized Consultation Process -->
              <a
                class="relative flex max-w-full flex-1 flex-col gap-2 rounded-2xl border border-solid border-[#28284a80] bg-[#0e101b] p-6 text-[#c4cff5] mix-blend-screen transition"
                href="#w-tabs-0-data-w-pane-1"
              >
                <!-- Title -->
                <h3 class="text-2xl font-bold text-white md:text-2xl">
                  Personalized Consultation
                </h3>
                <!-- Content -->
                <p class="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
                <div
                  class="absolute -bottom-6 right-1/2 aspect-[1_/_1] w-12 translate-x-1/2 opacity-80 md:-bottom-[30px] md:w-14"
                >
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed0d6a64e79558852a4_tab-circle-decor-inactive.svg"
                    alt=""
                    class="absolute h-full w-full"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="absolute h-full w-full opacity-0"
                  />
                </div>
              </a>
              <!-- Analysis and Reporting Process -->
              <a
                class="relative flex max-w-full flex-1 flex-col gap-2 rounded-2xl border border-solid border-[#28284a80] bg-[#0e101b] p-6 text-[#c4cff5] mix-blend-screen transition"
                href="#w-tabs-0-data-w-pane-2"
              >
                <!-- Title -->
                <h3 class="text-2xl font-bold text-white md:text-2xl">
                  Analysis and Reporting
                </h3>
                <!-- Content -->
                <p class="text-sm">
                  We start by understanding your unique goals and challenges,
                  laying the foundation for a tailored strategy.
                </p>
                <div
                  class="absolute -bottom-6 right-1/2 aspect-[1_/_1] w-12 translate-x-1/2 opacity-80 md:-bottom-[30px] md:w-14"
                >
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed0d6a64e79558852a4_tab-circle-decor-inactive.svg"
                    alt=""
                    class="absolute h-full w-full"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="absolute h-full w-full opacity-0"
                  />
                </div>
              </a>
            </div>
            <!-- Image -->
            <div class="relative mt-16 block w-full overflow-hidden">
              <div class="relative block min-w-[0%]">
                <img
                  alt="App preview"
                  src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836e_Frame%2048323%20(2).png"
                  class="w-full rounded-2xl bg-[#472cb51a] p-2 mix-blend-screen md:p-4 lg:px-8 lg:pb-12 lg:pt-8"
                  style="visibility: visible"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- SVG ICON -->
        <div
          class="pointer-events-none absolute bottom-0 left-[8%] right-0 top-auto w-72 max-w-[560px] md:bottom-[-30%] md:right-auto md:w-full"
        >
          <div class="w-full mix-blend-color-dodge blur-[300px] filter">
            <img
              src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a00dd207047d6f84b90ddc_hero-gradient-svg.svg"
              alt=""
              style="visibility: visible"
            />
          </div>
        </div>
      </section>
    </main>
    <!-- SECTION Merge -->
    <section class="relative block">
      <div class="px-5 md:px-10">
        <div class="z-10 w-full max-w-7xl mx-auto relative">
          <div
            class="py-12 md:py-16 lg:py-20"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div
              class="max-w-[704px] text-center flex-col items-center mx-auto flex"
            >
              <div class="z-[2] text-center relative">
                <!-- TITLE -->
                <h2
                  class="max-[991px]:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] text-transparent bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text font-bold text-3xl md:text-5xl"
                >
                  Merge with Your Existing Tech&nbsp;Environment
                </h2>
                <!-- CONTENT -->
                <div class="max-w-[528px] mt-4 mx-auto">
                  <p class="text-[#c4cff5]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                    aliquam,purus sit amet luctus magna fringilla urna
                  </p>
                </div>
                <div class="max-[479px]: p-8 md:p-12 lg:p-16"></div>
              </div>
            </div>
            <!-- SVG ICON -->
            <img
              src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836f_Group%2047928.svg"
              alt="Integrations Image"
              class="z-[2] w-full h-full mix-blend-screen object-cover relative inline-block"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
