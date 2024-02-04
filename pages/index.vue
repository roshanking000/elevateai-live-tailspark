<template>
  <section class="bg-[#0f0d1f]">
    <!-- Header -->
    <header
      class="fixed z-[100] flex w-screen max-w-[100vw] flex-col border-b border-solid border-b-[#d9d9d90d] bg-[linear-gradient(270deg,_rgb(7,_9,_20),_rgba(7,_9,_20,_0))] lg:bg-[rgba(221,_221,_221,_0)]"
      x-data="{isOpen: false}"
    >
      <div
        class="flex w-full max-w-7xl items-center justify-between mx-auto py-9"
      >
        <!-- Container -->
        <!-- Logo -->
        <a href="/" class="relative text-[#333333]">
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/659ffd86a0aeacb3785fbfba_elevate-ai-logo.svg"
            alt=""
          />
        </a>
        <!-- Navbar Menu -->
        <nav class="hidden items-center gap-8 lg:flex lg:gap-8">
          <!-- Menu Item -->
          <a
            href="/pricing"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Pricing</a
          >
          <!-- Menu Item -->
          <a
            href="/about-us"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >About Us</a
          >
          <!-- Menu Item -->
          <a
            href="/contact"
            class="text-sm font-bold uppercase text-white transition hover:text-[#7a3eb4] hover:outline-0"
            >Contact</a
          >
          <!-- Menu Item -->
          <a
            href="/sign-up"
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
          <a href="/pricing">Pricing</a>
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/sign-up">Sign Up</a>
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
      <section
        class="relative px-5 md:px-10"
        x-data="{process: 'Strategy Development'}"
      >
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
              <div
                class="relative cursor-pointer flex max-w-full flex-1 flex-col gap-2 rounded-2xl border p-6 text-[#c4cff5] mix-blend-screen transition"
                x-bind:class="process == 'Strategy Development' ? 'border-dashed border-[#d72fca] bg-[#170e1b]' : 'border-solid border-[#28284a80] bg-[#0e101b]'"
                x-on:click.prevent="process = 'Strategy Development'"
              >
                <!-- Title -->
                <h3
                  class="text-2xl font-bold md:text-2xl"
                  x-bind:class="process == 'Strategy Development' ? 'text-[#d72fca]' : 'text-white'"
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
                    x-bind:class="process == 'Strategy Development' ? 'opacity-0 hidden' : 'opacity-100'"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="h-full w-full opacity-0"
                    x-bind:class="process == 'Strategy Development' ? 'opacity-100' : 'opacity-0 hidden'"
                  />
                </div>
              </div>
              <!-- Personalized Consultation Process -->
              <div
                class="relative cursor-pointer flex max-w-full flex-1 flex-col gap-2 rounded-2xl border p-6 text-[#c4cff5] mix-blend-screen transition"
                x-bind:class="process == 'Personalized Consultation' ? 'border-dashed border-[#d72fca] bg-[#170e1b]' : 'border-solid border-[#28284a80] bg-[#0e101b]'"
                x-on:click.prevent="process = 'Personalized Consultation'"
              >
                <!-- Title -->
                <h3
                  class="text-2xl font-bold md:text-2xl"
                  x-bind:class="process == 'Personalized Consultation' ? 'text-[#d72fca]' : 'text-white'"
                >
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
                    class="h-full w-full opacity-0"
                    x-bind:class="process == 'Personalized Consultation' ? 'opacity-0 hidden' : 'opacity-100'"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="h-full w-full opacity-0"
                    x-bind:class="process == 'Personalized Consultation' ? 'opacity-100' : 'opacity-0 hidden'"
                  />
                </div>
              </div>
              <!-- Analysis and Reporting Process -->
              <div
                class="relative cursor-pointer flex max-w-full flex-1 flex-col gap-2 rounded-2xl border p-6 text-[#c4cff5] mix-blend-screen transition"
                x-bind:class="process == 'Analysis and Reporting' ? 'border-dashed border-[#d72fca] bg-[#170e1b]' : 'border-solid border-[#28284a80] bg-[#0e101b]'"
                x-on:click.prevent="process = 'Analysis and Reporting'"
              >
                <!-- Title -->
                <h3 class="text-2xl font-bold md:text-2xl"
                  x-bind:class="process == 'Analysis and Reporting' ? 'text-[#d72fca]' : 'text-white'"
                >
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
                    class="absolute h-full w-full opacity-0"
                    x-bind:class="process == 'Analysis and Reporting' ? 'opacity-0 hidden' : 'opacity-100'"
                  />
                  <img
                    src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a12ed03c12c65f3cf20538_tab-circle-decor.svg"
                    alt=""
                    class="absolute h-full w-full opacity-0"
                    x-bind:class="process == 'Analysis and Reporting' ? 'opacity-100' : 'opacity-0 hidden'"
                  />
                </div>
              </div>
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
          <div
            class="w-full mix-blend-color-dodge blur-[300px] filter"
            data-aos="zoom-out"
          >
            <img
              src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a00dd207047d6f84b90ddc_hero-gradient-svg.svg"
              alt=""
              style="visibility: visible"
            />
          </div>
        </div>
      </section>
      <!-- Merge Section -->
      <section class="relative block">
        <div class="">
          <div class="z-10 w-full max-w-7xl mx-auto relative px-5 md:px-10">
            <!-- Container -->
            <div
              class="py-12 md:py-16 lg:py-20"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div
                class="max-w-[704px] text-center flex-col items-center mx-auto flex"
              >
                <div class="z-[2] text-center relative">
                  <!-- Title -->
                  <h2
                    class="bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] text-transparent lg:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text font-bold text-3xl md:text-5xl"
                  >
                    Merge with Your Existing Tech&nbsp;Environment
                  </h2>
                  <!-- Content -->
                  <div class="max-w-[528px] mt-4 mx-auto">
                    <p class="text-[#c4cff5] pb-8 sm:pb-12 lg:pb-16">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      aliquam,purus sit amet luctus magna fringilla urna
                    </p>
                  </div>
                </div>
              </div>
              <!-- Image -->
              <img
                src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3836f_Group%2047928.svg"
                alt="Integrations Image"
                class="z-[2] w-full h-full mix-blend-screen object-cover relative inline-block"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- Pricing Section -->
      <section class="max-w-7xl mx-auto bg-[#0f0d1f] py-12 md:py-16 lg:py-20">
        <!-- Container -->
        <div class="flex flex-col items-center text-center">
          <div
            class="flex max-w-[704px] flex-col items-center md:pb-12 lg:pb-16 pb-8"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <!-- Title -->
            <h2
              class="bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text text-3xl font-bold text-transparent md:text-5xl lg:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)]"
            >
              Tailored Pricing for Ambition.
            </h2>
            <!-- Content -->
            <p class="text-[#c4cff5] mt-4 max-w-[528px]">
              Choose from our dynamic pricing plans, crafted to fit businesses
              of diverse scales and domains. Experience value, results, and a
              satisfying return on investment.
            </p>
          </div>
          <!-- Period Option -->
          <div class="md:pb-12 lg:pb-16 pb-8">
            <div
              class="relative flex cursor-pointer flex-row bg-[#0e101b] mix-blend-screen rounded-xl"
            >
              <!-- Annually Payment -->
              <div
                class="relative z-[5] flex flex-col items-center justify-center px-10 py-4"
              >
                <p class="font-bold text-white">Annually</p>
              </div>
              <!-- Monthly Payment -->
              <div
                class="relative z-[5] flex flex-col items-center justify-center px-10 py-4"
              >
                <p class="font-bold text-[#b3aed2]">Monthly</p>
              </div>
              <div
                class="absolute left-2 top-[6px] z-0 h-4/5 w-[45%] border border-solid border-[#792cb533] bg-[#0e101b] mix-blend-screen rounded-md"
              ></div>
            </div>
          </div>
          <!-- Pricing Component -->
          <div
            class="grid w-full grid-cols-1 gap-8 text-white md:grid-cols-3 md:gap-4"
          >
            <!-- Basecamp Component -->
            <div
              class="mx-auto flex w-full max-w-[416px] flex-col items-center overflow-hidden border border-solid border-[#792cb533] bg-[#0e101b] mix-blend-screen rounded-2xl"
            >
              <div
                class="flex w-full flex-col gap-10 bg-[#2b285066] px-6 pt-6 pb-8"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <!-- Header -->
                  <p class="text-xl font-bold md:text-2xl">Basecamp</p>
                  <!-- Price -->
                  <h2
                    class="flex flex-row items-center font-bold md:text-5xl text-3xl"
                  >
                    $18.99<span class="text-sm">/MO</span>
                  </h2>
                  <p
                    class="bg-[linear-gradient(270deg,_rgb(188,_223,_255),_rgb(255,_236,_215)_47%,_rgb(255,_163,_235))] bg-clip-text font-medium text-transparent"
                  >
                    For Individuals
                  </p>
                </div>
                <!-- Button -->
                <a
                  color="secondary"
                  href="#"
                  class="rounded-[1.125rem] p-[1.4px] no-underline relative overflow-hidden max-w-full inline-block bg-[#00000000] bg-[linear-gradient(to_right,_#873fbb,_#3e2161_53%,_#873fbb)]"
                >
                  <div
                    class="flex max-w-full items-center justify-center overflow-hidden !bg-[radial-gradient(circle_at_50%_50%,_rgb(62,_33,_97)_51%,_rgb(84,_45,_125)_94%)] p-5 text-center no-underline rounded-2xl"
                  >
                    <p
                      class="font-['Plus_Jakarta_Sans',_sans-serif] bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-bold text-transparent"
                    >
                      Try Basecamp
                    </p>
                  </div>
                </a>
              </div>
              <!-- Pricing Info -->
              <div class="flex w-full flex-col px-6 pt-9 pb-16">
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M21.8448 10.8217C21.6708 10.6817 21.4675 10.5828 21.2499 10.5325C21.0324 10.4822 20.8063 10.4817 20.5885 10.5311C20.2614 10.6069 19.9214 10.6083 19.5936 10.5351C19.2658 10.4618 18.9587 10.3159 18.695 10.1079C18.4313 9.90001 18.2176 9.63545 18.0699 9.33384C17.9222 9.03222 17.8442 8.70126 17.8417 8.36543C17.8392 7.97085 17.6814 7.59313 17.4024 7.31412C17.1233 7.0351 16.7456 6.87726 16.351 6.87481C16.0152 6.87225 15.6842 6.79423 15.3826 6.64653C15.081 6.49882 14.8165 6.2852 14.6085 6.02147C14.4006 5.75773 14.2546 5.45063 14.1814 5.12287C14.1081 4.79511 14.1095 4.45508 14.1854 4.12793C14.2328 3.90879 14.2307 3.68185 14.1794 3.46361C14.1281 3.24537 14.0288 3.04129 13.8887 2.86623C13.7487 2.69116 13.5714 2.54949 13.3697 2.45151C13.1681 2.35353 12.9471 2.30171 12.7229 2.2998H12.6667C11.3811 2.30102 10.1084 2.55621 8.92176 3.05074C7.7351 3.54526 6.65784 4.26936 5.75185 5.18144C4.84586 6.09353 4.12901 7.17562 3.64246 8.36557C3.15591 9.55552 2.90926 10.8299 2.91667 12.1154C2.93283 14.7013 3.97556 17.1748 5.81546 18.9919C6.72649 19.8916 7.80581 20.603 8.9918 21.0856C10.1778 21.5682 11.4472 21.8125 12.7276 21.8045C14.008 21.7965 15.2743 21.5364 16.4541 21.039C17.634 20.5416 18.7043 19.8167 19.604 18.9057C20.5038 17.9947 21.2152 16.9153 21.6978 15.7294C22.1804 14.5434 22.4247 13.2739 22.4167 11.9936V11.9936C22.4178 11.7674 22.3668 11.5441 22.2676 11.3408C22.1684 11.1376 22.0237 10.96 21.8448 10.8217V10.8217ZM7.74479 9.37793C7.90228 9.22099 8.10274 9.11423 8.32086 9.07114C8.53899 9.02805 8.76499 9.05055 8.97032 9.13581C9.17566 9.22108 9.35113 9.36527 9.47458 9.55019C9.59802 9.73512 9.6639 9.95247 9.6639 10.1748C9.6639 10.3971 9.59802 10.6145 9.47458 10.7994C9.35113 10.9843 9.17566 11.1285 8.97032 11.2138C8.76499 11.2991 8.53899 11.3216 8.32086 11.2785C8.10274 11.2354 7.90228 11.1286 7.74479 10.9717C7.63991 10.8672 7.55669 10.743 7.49991 10.6062C7.44313 10.4695 7.4139 10.3229 7.4139 10.1748C7.4139 10.0267 7.44313 9.88013 7.49991 9.74338C7.55669 9.60664 7.63991 9.48245 7.74479 9.37793V9.37793ZM10.0885 16.2217C9.93105 16.3786 9.73059 16.4854 9.51247 16.5285C9.29435 16.5716 9.06835 16.5491 8.86301 16.4638C8.65767 16.3785 8.4822 16.2343 8.35875 16.0494C8.23531 15.8645 8.16943 15.6471 8.16943 15.4248C8.16943 15.2025 8.23531 14.9851 8.35875 14.8002C8.4822 14.6153 8.65767 14.4711 8.86301 14.3858C9.06835 14.3006 9.29435 14.278 9.51247 14.3211C9.73059 14.3642 9.93105 14.471 10.0885 14.6279C10.1934 14.7324 10.2766 14.8566 10.3334 14.9934C10.3902 15.1301 10.4194 15.2767 10.4194 15.4248C10.4194 15.5729 10.3902 15.7195 10.3334 15.8562C10.2766 15.993 10.1934 16.1172 10.0885 16.2217ZM12.6198 12.4717C12.4628 12.3142 12.3561 12.1137 12.313 11.8956C12.2699 11.6775 12.2924 11.4515 12.3777 11.2461C12.4629 11.0408 12.6071 10.8653 12.7921 10.7419C12.977 10.6184 13.1943 10.5526 13.4167 10.5526C13.639 10.5526 13.8564 10.6184 14.0413 10.7419C14.2262 10.8653 14.3704 11.0408 14.4557 11.2461C14.5409 11.4515 14.5634 11.6775 14.5203 11.8956C14.4772 12.1137 14.3705 12.3142 14.2135 12.4717C14.109 12.5766 13.9848 12.6598 13.8481 12.7166C13.7113 12.7733 13.5647 12.8026 13.4167 12.8026C13.2686 12.8026 13.122 12.7733 12.9852 12.7166C12.8485 12.6598 12.7243 12.5766 12.6198 12.4717V12.4717ZM16.0885 16.9717C15.9311 17.1286 15.7306 17.2354 15.5125 17.2785C15.2943 17.3216 15.0683 17.2991 14.863 17.2138C14.6577 17.1285 14.4822 16.9843 14.3588 16.7994C14.2353 16.6145 14.1694 16.3971 14.1694 16.1748C14.1694 15.9525 14.2353 15.7351 14.3588 15.5502C14.4822 15.3653 14.6577 15.2211 14.863 15.1358C15.0683 15.0506 15.2943 15.028 15.5125 15.0711C15.7306 15.1142 15.9311 15.221 16.0885 15.3779C16.1934 15.4824 16.2766 15.6066 16.3334 15.7434C16.3902 15.8801 16.4194 16.0267 16.4194 16.1748C16.4194 16.3229 16.3902 16.4695 16.3334 16.6062C16.2766 16.743 16.1934 16.8672 16.0885 16.9717V16.9717Z"
                      fill="url(#paint0_linear_247_214)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_247_214"
                        x1="1.59891"
                        y1="7.40817"
                        x2="23.6921"
                        y2="8.54388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">250 Credits</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M20.251 13.5498C20.2533 13.8574 20.1597 14.1581 19.9833 14.4101C19.8069 14.6621 19.5564 14.8529 19.2666 14.9561L14.3729 16.7561L12.5729 21.6498C12.4663 21.9369 12.2745 22.1844 12.0231 22.3593C11.7717 22.5341 11.4728 22.6278 11.1666 22.6278C10.8604 22.6278 10.5616 22.5341 10.3102 22.3593C10.0588 22.1844 9.86695 21.9369 9.7604 21.6498L7.9604 16.7561L3.06665 14.9561C2.77958 14.8495 2.532 14.6576 2.35717 14.4063C2.18233 14.1549 2.08862 13.856 2.08862 13.5498C2.08862 13.2436 2.18233 12.9447 2.35717 12.6933C2.532 12.442 2.77958 12.2501 3.06665 12.1436L7.9604 10.3436L9.7604 5.4498C9.86695 5.16274 10.0588 4.91516 10.3102 4.74033C10.5616 4.56549 10.8604 4.47178 11.1666 4.47178C11.4728 4.47178 11.7717 4.56549 12.0231 4.74033C12.2745 4.91516 12.4663 5.16274 12.5729 5.4498L14.3729 10.3436L19.2666 12.1436C19.5564 12.2467 19.8069 12.4376 19.9833 12.6896C20.1597 12.9416 20.2533 13.2422 20.251 13.5498V13.5498ZM14.9166 4.5498H16.4166V6.0498C16.4166 6.24872 16.4957 6.43948 16.6363 6.58013C16.777 6.72079 16.9677 6.7998 17.1666 6.7998C17.3656 6.7998 17.5563 6.72079 17.697 6.58013C17.8376 6.43948 17.9166 6.24872 17.9166 6.0498V4.5498H19.4166C19.6156 4.5498 19.8063 4.47079 19.947 4.33013C20.0876 4.18948 20.1666 3.99872 20.1666 3.7998C20.1666 3.60089 20.0876 3.41013 19.947 3.26947C19.8063 3.12882 19.6156 3.0498 19.4166 3.0498H17.9166V1.5498C17.9166 1.35089 17.8376 1.16013 17.697 1.01947C17.5563 0.878822 17.3656 0.799805 17.1666 0.799805C16.9677 0.799805 16.777 0.878822 16.6363 1.01947C16.4957 1.16013 16.4166 1.35089 16.4166 1.5498V3.0498H14.9166C14.7177 3.0498 14.527 3.12882 14.3863 3.26947C14.2457 3.41013 14.1666 3.60089 14.1666 3.7998C14.1666 3.99872 14.2457 4.18948 14.3863 4.33013C14.527 4.47079 14.7177 4.5498 14.9166 4.5498ZM23.1666 7.5498H22.4166V6.7998C22.4166 6.60089 22.3376 6.41013 22.197 6.26947C22.0563 6.12882 21.8656 6.0498 21.6666 6.0498C21.4677 6.0498 21.277 6.12882 21.1363 6.26947C20.9957 6.41013 20.9166 6.60089 20.9166 6.7998V7.5498H20.1666C19.9677 7.5498 19.777 7.62882 19.6363 7.76947C19.4957 7.91013 19.4166 8.10089 19.4166 8.2998C19.4166 8.49872 19.4957 8.68948 19.6363 8.83013C19.777 8.97079 19.9677 9.0498 20.1666 9.0498H20.9166V9.7998C20.9166 9.99872 20.9957 10.1895 21.1363 10.3301C21.277 10.4708 21.4677 10.5498 21.6666 10.5498C21.8656 10.5498 22.0563 10.4708 22.197 10.3301C22.3376 10.1895 22.4166 9.99872 22.4166 9.7998V9.0498H23.1666C23.3656 9.0498 23.5563 8.97079 23.697 8.83013C23.8376 8.68948 23.9166 8.49872 23.9166 8.2998C23.9166 8.10089 23.8376 7.91013 23.697 7.76947C23.5563 7.62882 23.3656 7.5498 23.1666 7.5498Z"
                      fill="url(#paint0_linear_247_217)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_247_217"
                        x1="0.613757"
                        y1="6.5166"
                        x2="25.3441"
                        y2="7.78817"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Basic Integrations</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4667 1.2998H12.4346H12.4346C11.6218 1.2998 10.9662 1.29979 10.4353 1.34317C9.88864 1.38783 9.4085 1.48219 8.96428 1.70853C8.25868 2.06806 7.685 2.64173 7.32547 3.34734C7.09913 3.79156 7.00477 4.2717 6.96011 4.81834C6.91673 5.34925 6.91674 6.00486 6.91675 6.8177L6.91675 6.84981V7.40633C6.39836 7.47727 5.9385 7.59934 5.51029 7.81752C4.61652 8.27292 3.88987 8.99958 3.43447 9.89335C3.15363 10.4445 3.03202 11.0482 2.97374 11.7615C2.91674 12.4592 2.91674 13.3247 2.91675 14.4168V14.4498V15.6498V15.6828C2.91674 16.775 2.91674 17.6404 2.97374 18.3381C3.03202 19.0515 3.15363 19.6551 3.43447 20.2063C3.88987 21.1 4.61652 21.8267 5.51029 22.2821C6.06147 22.5629 6.66509 22.6845 7.37848 22.7428C8.07609 22.7998 8.94156 22.7998 10.0337 22.7998H10.0337H10.0667H15.2667H15.2998H15.2998C16.3919 22.7998 17.2574 22.7998 17.955 22.7428C18.6684 22.6845 19.272 22.5629 19.8232 22.2821C20.717 21.8267 21.4436 21.1 21.899 20.2063C22.1799 19.6551 22.3015 19.0515 22.3598 18.3381C22.4168 17.6405 22.4168 16.775 22.4167 15.6828V15.6498V14.4498V14.4168C22.4168 13.3246 22.4168 12.4592 22.3598 11.7615C22.3015 11.0482 22.1799 10.4445 21.899 9.89335C21.4436 8.99958 20.717 8.27292 19.8232 7.81752C19.272 7.53669 18.6684 7.41508 17.955 7.35679C17.2574 7.29979 16.3919 7.2998 15.2998 7.29981H15.2998H15.2998H15.2667H10.0667H10.0337H10.0337H10.0337C9.42845 7.2998 8.8928 7.2998 8.41675 7.3095V6.84981C8.41675 5.99735 8.41733 5.40312 8.45513 4.94049C8.49221 4.48661 8.56134 4.22584 8.66198 4.02833C8.8777 3.60496 9.2219 3.26076 9.64527 3.04504C9.84279 2.9444 10.1036 2.87527 10.5574 2.83819C11.0201 2.80039 11.6143 2.79981 12.4667 2.79981H15.6667C16.3571 2.79981 16.9167 3.35945 16.9167 4.04981V4.54981C16.9167 4.96402 17.2525 5.29981 17.6667 5.29981C18.081 5.29981 18.4167 4.96402 18.4167 4.54981V4.04981C18.4167 2.53102 17.1855 1.2998 15.6667 1.2998H12.4667ZM13.4167 14.0498C13.4167 13.6356 13.081 13.2998 12.6667 13.2998C12.2525 13.2998 11.9167 13.6356 11.9167 14.0498V16.0498C11.9167 16.464 12.2525 16.7998 12.6667 16.7998C13.081 16.7998 13.4167 16.464 13.4167 16.0498V14.0498Z"
                      fill="url(#paint0_linear_247_221)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_247_221"
                        x1="1.59918"
                        y1="6.93069"
                        x2="23.7023"
                        y2="7.96146"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Access to full suite of tools</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6667 1.2998H12.6289C10.7917 1.2998 9.36177 1.2998 8.21924 1.40335C7.05857 1.50854 6.12108 1.72532 5.29175 2.20413C4.26562 2.79657 3.41351 3.64868 2.82108 4.6748C2.34226 5.50413 2.12549 6.44162 2.02029 7.6023C1.91674 8.74483 1.91674 10.1748 1.91675 12.012V12.0498V12.0876C1.91674 13.9249 1.91674 15.3548 2.02029 16.4973C2.12549 17.658 2.34226 18.5955 2.82108 19.4248C3.41351 20.4509 4.26562 21.303 5.29175 21.8955C6.12108 22.3743 7.05857 22.5911 8.21924 22.6963C9.36176 22.7998 10.7917 22.7998 12.6289 22.7998H12.6667H15.8383H15.8619H15.862H15.862L15.9167 22.7998V20.0498L15.9167 19.9978C15.9167 19.0993 15.9167 18.3501 15.9967 17.7553C16.0811 17.1275 16.2667 16.5607 16.7222 16.1053C17.1777 15.6498 17.7445 15.4641 18.3723 15.3797C18.967 15.2998 19.7163 15.2998 20.6147 15.2998H20.6148L20.6667 15.2998H23.4167L23.4167 15.2451V15.245V15.245V15.2214V12.0498V12.0119C23.4168 10.1747 23.4168 8.74482 23.3132 7.6023C23.208 6.44162 22.9912 5.50413 22.5124 4.6748C21.92 3.64868 21.0679 2.79657 20.0417 2.20413C19.2124 1.72532 18.2749 1.50854 17.1143 1.40335C15.9717 1.2998 14.5418 1.2998 12.7046 1.2998H12.6667ZM20.6888 21.0744C19.7625 21.9053 18.6291 22.4601 17.4167 22.6858V20.0498C17.4167 19.0858 17.4183 18.4382 17.4833 17.9552C17.5453 17.4937 17.6525 17.2962 17.7829 17.1659C17.9132 17.0356 18.1107 16.9284 18.5721 16.8663C19.0552 16.8014 19.7027 16.7998 20.6667 16.7998H23.3028C23.0771 18.0122 22.5223 19.1455 21.6914 20.0718C21.569 20.2082 21.4364 20.3408 21.2139 20.5633L21.2138 20.5634L21.1971 20.5801L21.1803 20.5969L21.1803 20.5969C20.9577 20.8195 20.8251 20.9521 20.6888 21.0744ZM8.66675 7.2998C8.25253 7.2998 7.91675 7.63559 7.91675 8.0498C7.91675 8.46402 8.25253 8.7998 8.66675 8.7998H16.6667C17.081 8.7998 17.4167 8.46402 17.4167 8.0498C17.4167 7.63559 17.081 7.2998 16.6667 7.2998H8.66675ZM7.91675 12.0498C7.91675 11.6356 8.25253 11.2998 8.66675 11.2998H14.6667C15.081 11.2998 15.4167 11.6356 15.4167 12.0498C15.4167 12.464 15.081 12.7998 14.6667 12.7998H8.66675C8.25253 12.7998 7.91675 12.464 7.91675 12.0498ZM8.66675 15.2998C8.25253 15.2998 7.91675 15.6356 7.91675 16.0498C7.91675 16.464 8.25253 16.7998 8.66675 16.7998H10.6667C11.081 16.7998 11.4167 16.464 11.4167 16.0498C11.4167 15.6356 11.081 15.2998 10.6667 15.2998H8.66675Z"
                      fill="url(#paint0_linear_247_225)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_247_225"
                        x1="0.464045"
                        y1="6.93069"
                        x2="24.8228"
                        y2="8.18315"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Basic Support</p>
                </div>
              </div>
            </div>
            <div
              class="mx-auto flex w-full max-w-[416px] flex-col items-center overflow-hidden border border-solid border-[#792cb533] bg-[#0e101b] mix-blend-screen rounded-2xl"
            >
              <div
                class="flex w-full flex-col gap-10 bg-[#2b285066] px-6 pt-6 pb-8"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <p class="text-xl font-bold md:text-2xl">Accelerate</p>
                  <h2
                    class="flex flex-row items-center font-bold md:text-5xl text-3xl"
                  >
                    $32.99<span class="text-sm">/MO</span>
                  </h2>

                  <p
                    class="bg-[linear-gradient(270deg,_rgb(188,_223,_255),_rgb(255,_236,_215)_47%,_rgb(255,_163,_235))] bg-clip-text font-medium text-transparent"
                  >
                    For Accelerating Teams
                  </p>
                </div>
                <a
                  color="secondary"
                  href="#"
                  class="rounded-[1.125rem] p-[1.4px] no-underline relative overflow-hidden max-w-full inline-block bg-[#00000000] bg-[linear-gradient(to_right,_#873fbb,_#3e2161_53%,_#873fbb)]"
                >
                  <div
                    class="flex max-w-full items-center justify-center overflow-hidden !bg-[radial-gradient(circle_at_50%_50%,_rgb(62,_33,_97)_51%,_rgb(84,_45,_125)_94%)] p-5 text-center no-underline rounded-2xl"
                  >
                    <p
                      class="font-['Plus_Jakarta_Sans',_sans-serif] bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-bold text-transparent"
                    >
                      Try Accelerate
                    </p>
                  </div>
                </a>
              </div>
              <div class="flex w-full flex-col px-6 pt-9 pb-16">
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M21.8448 10.8217C21.6708 10.6817 21.4675 10.5828 21.2499 10.5325C21.0324 10.4822 20.8063 10.4817 20.5885 10.5311C20.2614 10.6069 19.9214 10.6083 19.5936 10.5351C19.2658 10.4618 18.9587 10.3159 18.695 10.1079C18.4313 9.90001 18.2176 9.63545 18.0699 9.33384C17.9222 9.03222 17.8442 8.70126 17.8417 8.36543C17.8392 7.97085 17.6814 7.59313 17.4024 7.31412C17.1233 7.0351 16.7456 6.87726 16.351 6.87481C16.0152 6.87225 15.6842 6.79423 15.3826 6.64653C15.081 6.49882 14.8165 6.2852 14.6085 6.02147C14.4006 5.75773 14.2546 5.45063 14.1814 5.12287C14.1081 4.79511 14.1095 4.45508 14.1854 4.12793C14.2328 3.90879 14.2307 3.68185 14.1794 3.46361C14.1281 3.24537 14.0288 3.04129 13.8887 2.86623C13.7487 2.69116 13.5714 2.54949 13.3697 2.45151C13.1681 2.35353 12.9471 2.30171 12.7229 2.2998H12.6667C11.3811 2.30102 10.1084 2.55621 8.92176 3.05074C7.7351 3.54526 6.65784 4.26936 5.75185 5.18144C4.84586 6.09353 4.12901 7.17562 3.64246 8.36557C3.15591 9.55552 2.90926 10.8299 2.91667 12.1154C2.93283 14.7013 3.97556 17.1748 5.81546 18.9919C6.72649 19.8916 7.80581 20.603 8.9918 21.0856C10.1778 21.5682 11.4472 21.8125 12.7276 21.8045C14.008 21.7965 15.2743 21.5364 16.4541 21.039C17.634 20.5416 18.7043 19.8167 19.604 18.9057C20.5038 17.9947 21.2152 16.9153 21.6978 15.7294C22.1804 14.5434 22.4247 13.2739 22.4167 11.9936V11.9936C22.4178 11.7674 22.3668 11.5441 22.2676 11.3408C22.1684 11.1376 22.0237 10.96 21.8448 10.8217V10.8217ZM7.74479 9.37793C7.90228 9.22099 8.10274 9.11423 8.32086 9.07114C8.53899 9.02805 8.76499 9.05055 8.97032 9.13581C9.17566 9.22108 9.35113 9.36527 9.47458 9.55019C9.59802 9.73512 9.6639 9.95247 9.6639 10.1748C9.6639 10.3971 9.59802 10.6145 9.47458 10.7994C9.35113 10.9843 9.17566 11.1285 8.97032 11.2138C8.76499 11.2991 8.53899 11.3216 8.32086 11.2785C8.10274 11.2354 7.90228 11.1286 7.74479 10.9717C7.63991 10.8672 7.55669 10.743 7.49991 10.6062C7.44313 10.4695 7.4139 10.3229 7.4139 10.1748C7.4139 10.0267 7.44313 9.88013 7.49991 9.74338C7.55669 9.60664 7.63991 9.48245 7.74479 9.37793V9.37793ZM10.0885 16.2217C9.93105 16.3786 9.73059 16.4854 9.51247 16.5285C9.29435 16.5716 9.06835 16.5491 8.86301 16.4638C8.65767 16.3785 8.4822 16.2343 8.35875 16.0494C8.23531 15.8645 8.16943 15.6471 8.16943 15.4248C8.16943 15.2025 8.23531 14.9851 8.35875 14.8002C8.4822 14.6153 8.65767 14.4711 8.86301 14.3858C9.06835 14.3006 9.29435 14.278 9.51247 14.3211C9.73059 14.3642 9.93105 14.471 10.0885 14.6279C10.1934 14.7324 10.2766 14.8566 10.3334 14.9934C10.3902 15.1301 10.4194 15.2767 10.4194 15.4248C10.4194 15.5729 10.3902 15.7195 10.3334 15.8562C10.2766 15.993 10.1934 16.1172 10.0885 16.2217ZM12.6198 12.4717C12.4628 12.3142 12.3561 12.1137 12.313 11.8956C12.2699 11.6775 12.2924 11.4515 12.3777 11.2461C12.4629 11.0408 12.6071 10.8653 12.7921 10.7419C12.977 10.6184 13.1943 10.5526 13.4167 10.5526C13.639 10.5526 13.8564 10.6184 14.0413 10.7419C14.2262 10.8653 14.3704 11.0408 14.4557 11.2461C14.5409 11.4515 14.5634 11.6775 14.5203 11.8956C14.4772 12.1137 14.3705 12.3142 14.2135 12.4717C14.109 12.5766 13.9848 12.6598 13.8481 12.7166C13.7113 12.7733 13.5647 12.8026 13.4167 12.8026C13.2686 12.8026 13.122 12.7733 12.9852 12.7166C12.8485 12.6598 12.7243 12.5766 12.6198 12.4717V12.4717ZM16.0885 16.9717C15.9311 17.1286 15.7306 17.2354 15.5125 17.2785C15.2943 17.3216 15.0683 17.2991 14.863 17.2138C14.6577 17.1285 14.4822 16.9843 14.3588 16.7994C14.2353 16.6145 14.1694 16.3971 14.1694 16.1748C14.1694 15.9525 14.2353 15.7351 14.3588 15.5502C14.4822 15.3653 14.6577 15.2211 14.863 15.1358C15.0683 15.0506 15.2943 15.028 15.5125 15.0711C15.7306 15.1142 15.9311 15.221 16.0885 15.3779C16.1934 15.4824 16.2766 15.6066 16.3334 15.7434C16.3902 15.8801 16.4194 16.0267 16.4194 16.1748C16.4194 16.3229 16.3902 16.4695 16.3334 16.6062C16.2766 16.743 16.1934 16.8672 16.0885 16.9717V16.9717Z"
                      fill="url(#paint0_linear_247_214)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="1.59891"
                        y1="7.40817"
                        x2="23.6921"
                        y2="8.54388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">750 Credits</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M20.251 13.5498C20.2533 13.8574 20.1597 14.1581 19.9833 14.4101C19.8069 14.6621 19.5564 14.8529 19.2666 14.9561L14.3729 16.7561L12.5729 21.6498C12.4663 21.9369 12.2745 22.1844 12.0231 22.3593C11.7717 22.5341 11.4728 22.6278 11.1666 22.6278C10.8604 22.6278 10.5616 22.5341 10.3102 22.3593C10.0588 22.1844 9.86695 21.9369 9.7604 21.6498L7.9604 16.7561L3.06665 14.9561C2.77958 14.8495 2.532 14.6576 2.35717 14.4063C2.18233 14.1549 2.08862 13.856 2.08862 13.5498C2.08862 13.2436 2.18233 12.9447 2.35717 12.6933C2.532 12.442 2.77958 12.2501 3.06665 12.1436L7.9604 10.3436L9.7604 5.4498C9.86695 5.16274 10.0588 4.91516 10.3102 4.74033C10.5616 4.56549 10.8604 4.47178 11.1666 4.47178C11.4728 4.47178 11.7717 4.56549 12.0231 4.74033C12.2745 4.91516 12.4663 5.16274 12.5729 5.4498L14.3729 10.3436L19.2666 12.1436C19.5564 12.2467 19.8069 12.4376 19.9833 12.6896C20.1597 12.9416 20.2533 13.2422 20.251 13.5498V13.5498ZM14.9166 4.5498H16.4166V6.0498C16.4166 6.24872 16.4957 6.43948 16.6363 6.58013C16.777 6.72079 16.9677 6.7998 17.1666 6.7998C17.3656 6.7998 17.5563 6.72079 17.697 6.58013C17.8376 6.43948 17.9166 6.24872 17.9166 6.0498V4.5498H19.4166C19.6156 4.5498 19.8063 4.47079 19.947 4.33013C20.0876 4.18948 20.1666 3.99872 20.1666 3.7998C20.1666 3.60089 20.0876 3.41013 19.947 3.26947C19.8063 3.12882 19.6156 3.0498 19.4166 3.0498H17.9166V1.5498C17.9166 1.35089 17.8376 1.16013 17.697 1.01947C17.5563 0.878822 17.3656 0.799805 17.1666 0.799805C16.9677 0.799805 16.777 0.878822 16.6363 1.01947C16.4957 1.16013 16.4166 1.35089 16.4166 1.5498V3.0498H14.9166C14.7177 3.0498 14.527 3.12882 14.3863 3.26947C14.2457 3.41013 14.1666 3.60089 14.1666 3.7998C14.1666 3.99872 14.2457 4.18948 14.3863 4.33013C14.527 4.47079 14.7177 4.5498 14.9166 4.5498ZM23.1666 7.5498H22.4166V6.7998C22.4166 6.60089 22.3376 6.41013 22.197 6.26947C22.0563 6.12882 21.8656 6.0498 21.6666 6.0498C21.4677 6.0498 21.277 6.12882 21.1363 6.26947C20.9957 6.41013 20.9166 6.60089 20.9166 6.7998V7.5498H20.1666C19.9677 7.5498 19.777 7.62882 19.6363 7.76947C19.4957 7.91013 19.4166 8.10089 19.4166 8.2998C19.4166 8.49872 19.4957 8.68948 19.6363 8.83013C19.777 8.97079 19.9677 9.0498 20.1666 9.0498H20.9166V9.7998C20.9166 9.99872 20.9957 10.1895 21.1363 10.3301C21.277 10.4708 21.4677 10.5498 21.6666 10.5498C21.8656 10.5498 22.0563 10.4708 22.197 10.3301C22.3376 10.1895 22.4166 9.99872 22.4166 9.7998V9.0498H23.1666C23.3656 9.0498 23.5563 8.97079 23.697 8.83013C23.8376 8.68948 23.9166 8.49872 23.9166 8.2998C23.9166 8.10089 23.8376 7.91013 23.697 7.76947C23.5563 7.62882 23.3656 7.5498 23.1666 7.5498Z"
                      fill="url(#paint0_linear_247_217)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="0.613757"
                        y1="6.5166"
                        x2="25.3441"
                        y2="7.78817"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Basic Integrations</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4667 1.2998H12.4346H12.4346C11.6218 1.2998 10.9662 1.29979 10.4353 1.34317C9.88864 1.38783 9.4085 1.48219 8.96428 1.70853C8.25868 2.06806 7.685 2.64173 7.32547 3.34734C7.09913 3.79156 7.00477 4.2717 6.96011 4.81834C6.91673 5.34925 6.91674 6.00486 6.91675 6.8177L6.91675 6.84981V7.40633C6.39836 7.47727 5.9385 7.59934 5.51029 7.81752C4.61652 8.27292 3.88987 8.99958 3.43447 9.89335C3.15363 10.4445 3.03202 11.0482 2.97374 11.7615C2.91674 12.4592 2.91674 13.3247 2.91675 14.4168V14.4498V15.6498V15.6828C2.91674 16.775 2.91674 17.6404 2.97374 18.3381C3.03202 19.0515 3.15363 19.6551 3.43447 20.2063C3.88987 21.1 4.61652 21.8267 5.51029 22.2821C6.06147 22.5629 6.66509 22.6845 7.37848 22.7428C8.07609 22.7998 8.94156 22.7998 10.0337 22.7998H10.0337H10.0667H15.2667H15.2998H15.2998C16.3919 22.7998 17.2574 22.7998 17.955 22.7428C18.6684 22.6845 19.272 22.5629 19.8232 22.2821C20.717 21.8267 21.4436 21.1 21.899 20.2063C22.1799 19.6551 22.3015 19.0515 22.3598 18.3381C22.4168 17.6405 22.4168 16.775 22.4167 15.6828V15.6498V14.4498V14.4168C22.4168 13.3246 22.4168 12.4592 22.3598 11.7615C22.3015 11.0482 22.1799 10.4445 21.899 9.89335C21.4436 8.99958 20.717 8.27292 19.8232 7.81752C19.272 7.53669 18.6684 7.41508 17.955 7.35679C17.2574 7.29979 16.3919 7.2998 15.2998 7.29981H15.2998H15.2998H15.2667H10.0667H10.0337H10.0337H10.0337C9.42845 7.2998 8.8928 7.2998 8.41675 7.3095V6.84981C8.41675 5.99735 8.41733 5.40312 8.45513 4.94049C8.49221 4.48661 8.56134 4.22584 8.66198 4.02833C8.8777 3.60496 9.2219 3.26076 9.64527 3.04504C9.84279 2.9444 10.1036 2.87527 10.5574 2.83819C11.0201 2.80039 11.6143 2.79981 12.4667 2.79981H15.6667C16.3571 2.79981 16.9167 3.35945 16.9167 4.04981V4.54981C16.9167 4.96402 17.2525 5.29981 17.6667 5.29981C18.081 5.29981 18.4167 4.96402 18.4167 4.54981V4.04981C18.4167 2.53102 17.1855 1.2998 15.6667 1.2998H12.4667ZM13.4167 14.0498C13.4167 13.6356 13.081 13.2998 12.6667 13.2998C12.2525 13.2998 11.9167 13.6356 11.9167 14.0498V16.0498C11.9167 16.464 12.2525 16.7998 12.6667 16.7998C13.081 16.7998 13.4167 16.464 13.4167 16.0498V14.0498Z"
                      fill="url(#paint0_linear_247_221)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="1.59918"
                        y1="6.93069"
                        x2="23.7023"
                        y2="7.96146"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Access to full suite of tools</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6667 1.2998H12.6289C10.7917 1.2998 9.36177 1.2998 8.21924 1.40335C7.05857 1.50854 6.12108 1.72532 5.29175 2.20413C4.26562 2.79657 3.41351 3.64868 2.82108 4.6748C2.34226 5.50413 2.12549 6.44162 2.02029 7.6023C1.91674 8.74483 1.91674 10.1748 1.91675 12.012V12.0498V12.0876C1.91674 13.9249 1.91674 15.3548 2.02029 16.4973C2.12549 17.658 2.34226 18.5955 2.82108 19.4248C3.41351 20.4509 4.26562 21.303 5.29175 21.8955C6.12108 22.3743 7.05857 22.5911 8.21924 22.6963C9.36176 22.7998 10.7917 22.7998 12.6289 22.7998H12.6667H15.8383H15.8619H15.862H15.862L15.9167 22.7998V20.0498L15.9167 19.9978C15.9167 19.0993 15.9167 18.3501 15.9967 17.7553C16.0811 17.1275 16.2667 16.5607 16.7222 16.1053C17.1777 15.6498 17.7445 15.4641 18.3723 15.3797C18.967 15.2998 19.7163 15.2998 20.6147 15.2998H20.6148L20.6667 15.2998H23.4167L23.4167 15.2451V15.245V15.245V15.2214V12.0498V12.0119C23.4168 10.1747 23.4168 8.74482 23.3132 7.6023C23.208 6.44162 22.9912 5.50413 22.5124 4.6748C21.92 3.64868 21.0679 2.79657 20.0417 2.20413C19.2124 1.72532 18.2749 1.50854 17.1143 1.40335C15.9717 1.2998 14.5418 1.2998 12.7046 1.2998H12.6667ZM20.6888 21.0744C19.7625 21.9053 18.6291 22.4601 17.4167 22.6858V20.0498C17.4167 19.0858 17.4183 18.4382 17.4833 17.9552C17.5453 17.4937 17.6525 17.2962 17.7829 17.1659C17.9132 17.0356 18.1107 16.9284 18.5721 16.8663C19.0552 16.8014 19.7027 16.7998 20.6667 16.7998H23.3028C23.0771 18.0122 22.5223 19.1455 21.6914 20.0718C21.569 20.2082 21.4364 20.3408 21.2139 20.5633L21.2138 20.5634L21.1971 20.5801L21.1803 20.5969L21.1803 20.5969C20.9577 20.8195 20.8251 20.9521 20.6888 21.0744ZM8.66675 7.2998C8.25253 7.2998 7.91675 7.63559 7.91675 8.0498C7.91675 8.46402 8.25253 8.7998 8.66675 8.7998H16.6667C17.081 8.7998 17.4167 8.46402 17.4167 8.0498C17.4167 7.63559 17.081 7.2998 16.6667 7.2998H8.66675ZM7.91675 12.0498C7.91675 11.6356 8.25253 11.2998 8.66675 11.2998H14.6667C15.081 11.2998 15.4167 11.6356 15.4167 12.0498C15.4167 12.464 15.081 12.7998 14.6667 12.7998H8.66675C8.25253 12.7998 7.91675 12.464 7.91675 12.0498ZM8.66675 15.2998C8.25253 15.2998 7.91675 15.6356 7.91675 16.0498C7.91675 16.464 8.25253 16.7998 8.66675 16.7998H10.6667C11.081 16.7998 11.4167 16.464 11.4167 16.0498C11.4167 15.6356 11.081 15.2998 10.6667 15.2998H8.66675Z"
                      fill="url(#paint0_linear_247_225)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="0.464045"
                        y1="6.93069"
                        x2="24.8228"
                        y2="8.18315"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Premium Support</p>
                </div>
              </div>
            </div>
            <div
              class="mx-auto flex w-full max-w-[416px] flex-col items-center overflow-hidden border border-solid border-[#792cb533] bg-[#0e101b] mix-blend-screen rounded-2xl"
            >
              <div
                class="flex w-full flex-col gap-10 bg-[#2b285066] px-6 pt-6 pb-8"
              >
                <div class="flex flex-col items-center justify-center gap-2">
                  <p class="text-xl font-bold md:text-2xl">Growth</p>
                  <h2
                    class="flex flex-row items-center font-bold md:text-5xl text-3xl"
                  >
                    $99<span class="text-sm">/MO</span>
                  </h2>

                  <p
                    class="bg-[linear-gradient(270deg,_rgb(188,_223,_255),_rgb(255,_236,_215)_47%,_rgb(255,_163,_235))] bg-clip-text font-medium text-transparent"
                  >
                    For Growing Teams
                  </p>
                </div>
                <a
                  color="secondary"
                  href="#"
                  class="rounded-[1.125rem] p-[1.4px] no-underline relative overflow-hidden max-w-full inline-block bg-[#00000000] bg-[linear-gradient(to_right,_#873fbb,_#3e2161_53%,_#873fbb)]"
                >
                  <div
                    class="flex max-w-full items-center justify-center overflow-hidden !bg-[radial-gradient(circle_at_50%_50%,_rgb(62,_33,_97)_51%,_rgb(84,_45,_125)_94%)] p-5 text-center no-underline rounded-2xl"
                  >
                    <p
                      class="font-['Plus_Jakarta_Sans',_sans-serif] bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-bold text-transparent"
                    >
                      Try Growth
                    </p>
                  </div>
                </a>
              </div>
              <div class="flex w-full flex-col px-6 pt-9 pb-16">
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M21.8448 10.8217C21.6708 10.6817 21.4675 10.5828 21.2499 10.5325C21.0324 10.4822 20.8063 10.4817 20.5885 10.5311C20.2614 10.6069 19.9214 10.6083 19.5936 10.5351C19.2658 10.4618 18.9587 10.3159 18.695 10.1079C18.4313 9.90001 18.2176 9.63545 18.0699 9.33384C17.9222 9.03222 17.8442 8.70126 17.8417 8.36543C17.8392 7.97085 17.6814 7.59313 17.4024 7.31412C17.1233 7.0351 16.7456 6.87726 16.351 6.87481C16.0152 6.87225 15.6842 6.79423 15.3826 6.64653C15.081 6.49882 14.8165 6.2852 14.6085 6.02147C14.4006 5.75773 14.2546 5.45063 14.1814 5.12287C14.1081 4.79511 14.1095 4.45508 14.1854 4.12793C14.2328 3.90879 14.2307 3.68185 14.1794 3.46361C14.1281 3.24537 14.0288 3.04129 13.8887 2.86623C13.7487 2.69116 13.5714 2.54949 13.3697 2.45151C13.1681 2.35353 12.9471 2.30171 12.7229 2.2998H12.6667C11.3811 2.30102 10.1084 2.55621 8.92176 3.05074C7.7351 3.54526 6.65784 4.26936 5.75185 5.18144C4.84586 6.09353 4.12901 7.17562 3.64246 8.36557C3.15591 9.55552 2.90926 10.8299 2.91667 12.1154C2.93283 14.7013 3.97556 17.1748 5.81546 18.9919C6.72649 19.8916 7.80581 20.603 8.9918 21.0856C10.1778 21.5682 11.4472 21.8125 12.7276 21.8045C14.008 21.7965 15.2743 21.5364 16.4541 21.039C17.634 20.5416 18.7043 19.8167 19.604 18.9057C20.5038 17.9947 21.2152 16.9153 21.6978 15.7294C22.1804 14.5434 22.4247 13.2739 22.4167 11.9936V11.9936C22.4178 11.7674 22.3668 11.5441 22.2676 11.3408C22.1684 11.1376 22.0237 10.96 21.8448 10.8217V10.8217ZM7.74479 9.37793C7.90228 9.22099 8.10274 9.11423 8.32086 9.07114C8.53899 9.02805 8.76499 9.05055 8.97032 9.13581C9.17566 9.22108 9.35113 9.36527 9.47458 9.55019C9.59802 9.73512 9.6639 9.95247 9.6639 10.1748C9.6639 10.3971 9.59802 10.6145 9.47458 10.7994C9.35113 10.9843 9.17566 11.1285 8.97032 11.2138C8.76499 11.2991 8.53899 11.3216 8.32086 11.2785C8.10274 11.2354 7.90228 11.1286 7.74479 10.9717C7.63991 10.8672 7.55669 10.743 7.49991 10.6062C7.44313 10.4695 7.4139 10.3229 7.4139 10.1748C7.4139 10.0267 7.44313 9.88013 7.49991 9.74338C7.55669 9.60664 7.63991 9.48245 7.74479 9.37793V9.37793ZM10.0885 16.2217C9.93105 16.3786 9.73059 16.4854 9.51247 16.5285C9.29435 16.5716 9.06835 16.5491 8.86301 16.4638C8.65767 16.3785 8.4822 16.2343 8.35875 16.0494C8.23531 15.8645 8.16943 15.6471 8.16943 15.4248C8.16943 15.2025 8.23531 14.9851 8.35875 14.8002C8.4822 14.6153 8.65767 14.4711 8.86301 14.3858C9.06835 14.3006 9.29435 14.278 9.51247 14.3211C9.73059 14.3642 9.93105 14.471 10.0885 14.6279C10.1934 14.7324 10.2766 14.8566 10.3334 14.9934C10.3902 15.1301 10.4194 15.2767 10.4194 15.4248C10.4194 15.5729 10.3902 15.7195 10.3334 15.8562C10.2766 15.993 10.1934 16.1172 10.0885 16.2217ZM12.6198 12.4717C12.4628 12.3142 12.3561 12.1137 12.313 11.8956C12.2699 11.6775 12.2924 11.4515 12.3777 11.2461C12.4629 11.0408 12.6071 10.8653 12.7921 10.7419C12.977 10.6184 13.1943 10.5526 13.4167 10.5526C13.639 10.5526 13.8564 10.6184 14.0413 10.7419C14.2262 10.8653 14.3704 11.0408 14.4557 11.2461C14.5409 11.4515 14.5634 11.6775 14.5203 11.8956C14.4772 12.1137 14.3705 12.3142 14.2135 12.4717C14.109 12.5766 13.9848 12.6598 13.8481 12.7166C13.7113 12.7733 13.5647 12.8026 13.4167 12.8026C13.2686 12.8026 13.122 12.7733 12.9852 12.7166C12.8485 12.6598 12.7243 12.5766 12.6198 12.4717V12.4717ZM16.0885 16.9717C15.9311 17.1286 15.7306 17.2354 15.5125 17.2785C15.2943 17.3216 15.0683 17.2991 14.863 17.2138C14.6577 17.1285 14.4822 16.9843 14.3588 16.7994C14.2353 16.6145 14.1694 16.3971 14.1694 16.1748C14.1694 15.9525 14.2353 15.7351 14.3588 15.5502C14.4822 15.3653 14.6577 15.2211 14.863 15.1358C15.0683 15.0506 15.2943 15.028 15.5125 15.0711C15.7306 15.1142 15.9311 15.221 16.0885 15.3779C16.1934 15.4824 16.2766 15.6066 16.3334 15.7434C16.3902 15.8801 16.4194 16.0267 16.4194 16.1748C16.4194 16.3229 16.3902 16.4695 16.3334 16.6062C16.2766 16.743 16.1934 16.8672 16.0885 16.9717V16.9717Z"
                      fill="url(#paint0_linear_247_214)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="1.59891"
                        y1="7.40817"
                        x2="23.6921"
                        y2="8.54388"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">2000 Credits</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      d="M20.251 13.5498C20.2533 13.8574 20.1597 14.1581 19.9833 14.4101C19.8069 14.6621 19.5564 14.8529 19.2666 14.9561L14.3729 16.7561L12.5729 21.6498C12.4663 21.9369 12.2745 22.1844 12.0231 22.3593C11.7717 22.5341 11.4728 22.6278 11.1666 22.6278C10.8604 22.6278 10.5616 22.5341 10.3102 22.3593C10.0588 22.1844 9.86695 21.9369 9.7604 21.6498L7.9604 16.7561L3.06665 14.9561C2.77958 14.8495 2.532 14.6576 2.35717 14.4063C2.18233 14.1549 2.08862 13.856 2.08862 13.5498C2.08862 13.2436 2.18233 12.9447 2.35717 12.6933C2.532 12.442 2.77958 12.2501 3.06665 12.1436L7.9604 10.3436L9.7604 5.4498C9.86695 5.16274 10.0588 4.91516 10.3102 4.74033C10.5616 4.56549 10.8604 4.47178 11.1666 4.47178C11.4728 4.47178 11.7717 4.56549 12.0231 4.74033C12.2745 4.91516 12.4663 5.16274 12.5729 5.4498L14.3729 10.3436L19.2666 12.1436C19.5564 12.2467 19.8069 12.4376 19.9833 12.6896C20.1597 12.9416 20.2533 13.2422 20.251 13.5498V13.5498ZM14.9166 4.5498H16.4166V6.0498C16.4166 6.24872 16.4957 6.43948 16.6363 6.58013C16.777 6.72079 16.9677 6.7998 17.1666 6.7998C17.3656 6.7998 17.5563 6.72079 17.697 6.58013C17.8376 6.43948 17.9166 6.24872 17.9166 6.0498V4.5498H19.4166C19.6156 4.5498 19.8063 4.47079 19.947 4.33013C20.0876 4.18948 20.1666 3.99872 20.1666 3.7998C20.1666 3.60089 20.0876 3.41013 19.947 3.26947C19.8063 3.12882 19.6156 3.0498 19.4166 3.0498H17.9166V1.5498C17.9166 1.35089 17.8376 1.16013 17.697 1.01947C17.5563 0.878822 17.3656 0.799805 17.1666 0.799805C16.9677 0.799805 16.777 0.878822 16.6363 1.01947C16.4957 1.16013 16.4166 1.35089 16.4166 1.5498V3.0498H14.9166C14.7177 3.0498 14.527 3.12882 14.3863 3.26947C14.2457 3.41013 14.1666 3.60089 14.1666 3.7998C14.1666 3.99872 14.2457 4.18948 14.3863 4.33013C14.527 4.47079 14.7177 4.5498 14.9166 4.5498ZM23.1666 7.5498H22.4166V6.7998C22.4166 6.60089 22.3376 6.41013 22.197 6.26947C22.0563 6.12882 21.8656 6.0498 21.6666 6.0498C21.4677 6.0498 21.277 6.12882 21.1363 6.26947C20.9957 6.41013 20.9166 6.60089 20.9166 6.7998V7.5498H20.1666C19.9677 7.5498 19.777 7.62882 19.6363 7.76947C19.4957 7.91013 19.4166 8.10089 19.4166 8.2998C19.4166 8.49872 19.4957 8.68948 19.6363 8.83013C19.777 8.97079 19.9677 9.0498 20.1666 9.0498H20.9166V9.7998C20.9166 9.99872 20.9957 10.1895 21.1363 10.3301C21.277 10.4708 21.4677 10.5498 21.6666 10.5498C21.8656 10.5498 22.0563 10.4708 22.197 10.3301C22.3376 10.1895 22.4166 9.99872 22.4166 9.7998V9.0498H23.1666C23.3656 9.0498 23.5563 8.97079 23.697 8.83013C23.8376 8.68948 23.9166 8.49872 23.9166 8.2998C23.9166 8.10089 23.8376 7.91013 23.697 7.76947C23.5563 7.62882 23.3656 7.5498 23.1666 7.5498Z"
                      fill="url(#paint0_linear_247_217)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="0.613757"
                        y1="6.5166"
                        x2="25.3441"
                        y2="7.78817"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Basic Integrations</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4667 1.2998H12.4346H12.4346C11.6218 1.2998 10.9662 1.29979 10.4353 1.34317C9.88864 1.38783 9.4085 1.48219 8.96428 1.70853C8.25868 2.06806 7.685 2.64173 7.32547 3.34734C7.09913 3.79156 7.00477 4.2717 6.96011 4.81834C6.91673 5.34925 6.91674 6.00486 6.91675 6.8177L6.91675 6.84981V7.40633C6.39836 7.47727 5.9385 7.59934 5.51029 7.81752C4.61652 8.27292 3.88987 8.99958 3.43447 9.89335C3.15363 10.4445 3.03202 11.0482 2.97374 11.7615C2.91674 12.4592 2.91674 13.3247 2.91675 14.4168V14.4498V15.6498V15.6828C2.91674 16.775 2.91674 17.6404 2.97374 18.3381C3.03202 19.0515 3.15363 19.6551 3.43447 20.2063C3.88987 21.1 4.61652 21.8267 5.51029 22.2821C6.06147 22.5629 6.66509 22.6845 7.37848 22.7428C8.07609 22.7998 8.94156 22.7998 10.0337 22.7998H10.0337H10.0667H15.2667H15.2998H15.2998C16.3919 22.7998 17.2574 22.7998 17.955 22.7428C18.6684 22.6845 19.272 22.5629 19.8232 22.2821C20.717 21.8267 21.4436 21.1 21.899 20.2063C22.1799 19.6551 22.3015 19.0515 22.3598 18.3381C22.4168 17.6405 22.4168 16.775 22.4167 15.6828V15.6498V14.4498V14.4168C22.4168 13.3246 22.4168 12.4592 22.3598 11.7615C22.3015 11.0482 22.1799 10.4445 21.899 9.89335C21.4436 8.99958 20.717 8.27292 19.8232 7.81752C19.272 7.53669 18.6684 7.41508 17.955 7.35679C17.2574 7.29979 16.3919 7.2998 15.2998 7.29981H15.2998H15.2998H15.2667H10.0667H10.0337H10.0337H10.0337C9.42845 7.2998 8.8928 7.2998 8.41675 7.3095V6.84981C8.41675 5.99735 8.41733 5.40312 8.45513 4.94049C8.49221 4.48661 8.56134 4.22584 8.66198 4.02833C8.8777 3.60496 9.2219 3.26076 9.64527 3.04504C9.84279 2.9444 10.1036 2.87527 10.5574 2.83819C11.0201 2.80039 11.6143 2.79981 12.4667 2.79981H15.6667C16.3571 2.79981 16.9167 3.35945 16.9167 4.04981V4.54981C16.9167 4.96402 17.2525 5.29981 17.6667 5.29981C18.081 5.29981 18.4167 4.96402 18.4167 4.54981V4.04981C18.4167 2.53102 17.1855 1.2998 15.6667 1.2998H12.4667ZM13.4167 14.0498C13.4167 13.6356 13.081 13.2998 12.6667 13.2998C12.2525 13.2998 11.9167 13.6356 11.9167 14.0498V16.0498C11.9167 16.464 12.2525 16.7998 12.6667 16.7998C13.081 16.7998 13.4167 16.464 13.4167 16.0498V14.0498Z"
                      fill="url(#paint0_linear_247_221)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="1.59918"
                        y1="6.93069"
                        x2="23.7023"
                        y2="7.96146"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Access to full suite of tools</p>
                </div>
                <div class="mt-3 flex flex-row items-center gap-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="overflow-hidden"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6667 1.2998H12.6289C10.7917 1.2998 9.36177 1.2998 8.21924 1.40335C7.05857 1.50854 6.12108 1.72532 5.29175 2.20413C4.26562 2.79657 3.41351 3.64868 2.82108 4.6748C2.34226 5.50413 2.12549 6.44162 2.02029 7.6023C1.91674 8.74483 1.91674 10.1748 1.91675 12.012V12.0498V12.0876C1.91674 13.9249 1.91674 15.3548 2.02029 16.4973C2.12549 17.658 2.34226 18.5955 2.82108 19.4248C3.41351 20.4509 4.26562 21.303 5.29175 21.8955C6.12108 22.3743 7.05857 22.5911 8.21924 22.6963C9.36176 22.7998 10.7917 22.7998 12.6289 22.7998H12.6667H15.8383H15.8619H15.862H15.862L15.9167 22.7998V20.0498L15.9167 19.9978C15.9167 19.0993 15.9167 18.3501 15.9967 17.7553C16.0811 17.1275 16.2667 16.5607 16.7222 16.1053C17.1777 15.6498 17.7445 15.4641 18.3723 15.3797C18.967 15.2998 19.7163 15.2998 20.6147 15.2998H20.6148L20.6667 15.2998H23.4167L23.4167 15.2451V15.245V15.245V15.2214V12.0498V12.0119C23.4168 10.1747 23.4168 8.74482 23.3132 7.6023C23.208 6.44162 22.9912 5.50413 22.5124 4.6748C21.92 3.64868 21.0679 2.79657 20.0417 2.20413C19.2124 1.72532 18.2749 1.50854 17.1143 1.40335C15.9717 1.2998 14.5418 1.2998 12.7046 1.2998H12.6667ZM20.6888 21.0744C19.7625 21.9053 18.6291 22.4601 17.4167 22.6858V20.0498C17.4167 19.0858 17.4183 18.4382 17.4833 17.9552C17.5453 17.4937 17.6525 17.2962 17.7829 17.1659C17.9132 17.0356 18.1107 16.9284 18.5721 16.8663C19.0552 16.8014 19.7027 16.7998 20.6667 16.7998H23.3028C23.0771 18.0122 22.5223 19.1455 21.6914 20.0718C21.569 20.2082 21.4364 20.3408 21.2139 20.5633L21.2138 20.5634L21.1971 20.5801L21.1803 20.5969L21.1803 20.5969C20.9577 20.8195 20.8251 20.9521 20.6888 21.0744ZM8.66675 7.2998C8.25253 7.2998 7.91675 7.63559 7.91675 8.0498C7.91675 8.46402 8.25253 8.7998 8.66675 8.7998H16.6667C17.081 8.7998 17.4167 8.46402 17.4167 8.0498C17.4167 7.63559 17.081 7.2998 16.6667 7.2998H8.66675ZM7.91675 12.0498C7.91675 11.6356 8.25253 11.2998 8.66675 11.2998H14.6667C15.081 11.2998 15.4167 11.6356 15.4167 12.0498C15.4167 12.464 15.081 12.7998 14.6667 12.7998H8.66675C8.25253 12.7998 7.91675 12.464 7.91675 12.0498ZM8.66675 15.2998C8.25253 15.2998 7.91675 15.6356 7.91675 16.0498C7.91675 16.464 8.25253 16.7998 8.66675 16.7998H10.6667C11.081 16.7998 11.4167 16.464 11.4167 16.0498C11.4167 15.6356 11.081 15.2998 10.6667 15.2998H8.66675Z"
                      fill="url(#paint0_linear_247_225)"
                    ></path>
                    <defs>
                      <linearGradient
                        x1="0.464045"
                        y1="6.93069"
                        x2="24.8228"
                        y2="8.18315"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFA3EB"></stop>
                        <stop offset="0.488751" stop-color="#FFECD7"></stop>
                        <stop offset="0.959258" stop-color="#BCDFFF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p class="font-bold">Premium Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ElevateAI Section -->
      <section class="relative">
        <div
          class="absolute left-1/2 top-[264px] w-full max-w-5xl -translate-x-1/2"
        >
          <!-- Image -->
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a15d606b079c71934006cc_globe-svg-2.svg"
            width="1028"
            height="1028"
            alt=""
            class="absolute inset-0 inline-block h-full w-full object-cover md:relative md:object-contain"
            style="visibility: visible"
          />
        </div>
        <!-- Container -->
        <div
          class="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
        >
          <!-- Component -->
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
                class="bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text font-bold text-transparent md:text-5xl lg:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] text-3xl pb-6"
              >
                ElevateAI in Action
              </h2>
              <!-- Content -->
              <p class="text-xl text-[#c4cff5] md:pb-16 lg:pb-24 pb-12">
                Explore real-life instances of how ElevateAI has reshaped
                businesses with pioneering, AI-driven marketing strategies.
                Discover what we can do for you.
              </p>
            </div>
          </div>
          <!-- Image -->
          <img
            class="relative z-[2] inline-block h-full w-full object-cover mix-blend-normal"
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/657856d0336ed52d94d3835f_Elevate%20AI%20in%20Action.png"
            alt="Dashboard Image"
          />
        </div>
        <div
          class="pointer-events-none absolute left-auto top-auto max-w-[1168px] mix-blend-color-dodge blur-[190px] filter bottom-0 md:bottom-[-18%] right-0 md:right-[-37%] w-72 md:w-full"
        >
          <!-- Image -->
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a134f3b87ad4b42cef600a_svg-decor-2.svg"
            width="1176"
            height="1169"
            alt=""
            class="md:relative inset-0 inline-block h-full w-full absolute object-cover md:object-contain"
            style="visibility: visible"
          />
        </div>
      </section>
      <!-- Lightning Section -->
      <section class="bg-[#0f0d1f] px-5 md:px-10">
        <!-- Container -->
        <div class="mx-auto w-full max-w-7xl px-4 py-24 lg:py-40">
          <div
            class="relative z-[2] text-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div class="mx-auto max-w-[720px] p-10">
              <!-- Title -->
              <h2
                class="w-full bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text p-12 text-3xl font-bold text-transparent md:text-5xl lg:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)]"
              >
                Lightning Fast Webflow Dev&nbsp;Made Easy
              </h2>
              <!-- Content -->
              <p class="text-xl text-[#c4cff5]">
                Say goodbye to sluggish workflows! Our toolkit is engineered for
                speed, making every step of your Webflow development process
                lightning-fast.
              </p>
            </div>
            <!-- Button -->
            <a
              color="secondary"
              href="#"
              class="relative inline-block max-w-full overflow-hidden rounded-2xl bg-[linear-gradient(to_right,_#873fbb,_#3e2161_53%,_#873fbb)] p-[1.4px]"
            >
              <div
                class="flex items-center justify-center rounded-2xl bg-[radial-gradient(circle,_rgb(45,_18,_65)_56%,_rgb(53,_21,_77))] p-5 text-center"
              >
                <p
                  class="bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-transparent"
                >
                  Get Started
                </p>
              </div>
              <div
                class="absolute bottom-auto left-0 right-auto top-0 h-10 w-10 bg-[#c4cff5] blur-[60px] filter"
              ></div>
            </a>
            <div class="p-4"></div>
            <p class="text-[#c4cff5]">No credit card required.</p>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer Section -->
    <footer class="block">
      <div class="px-5 md:px-10">
        <div class="relative z-[1] mx-auto w-full max-w-7xl">
          <!-- Container -->
          <div class="py-16 md:py-24 lg:pb-[3.75rem] lg:pt-[7.5rem]">
            <div
              class="flex grid-cols-[auto] flex-col justify-between gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-[max-content_auto_auto_auto_auto] lg:flex-row lg:gap-10"
            >
              <div class="mr-0 flex max-w-[22.5rem] flex-col gap-8 lg:mr-10">
                <div class="flex flex-col gap-6">
                  <!-- Logo -->
                  <a
                    href="https://www.flowspark.co/"
                    class="inline-block w-full max-w-[13rem] bg-[#00000000]"
                  >
                    <img
                      src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/659ffd86a0aeacb3785fbfba_elevate-ai-logo.svg"
                      loading="lazy"
                      alt=""
                      class="relative inset-[0%] inline-block h-full w-full max-w-full object-cover md:object-contain"
                    />
                  </a>
                  <!-- Content -->
                  <p class="text-[#c4cff5]">
                    Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                    amet luctus
                  </p>
                </div>
                <!-- Community Section -->
                <div
                  class="mb-8 flex w-full max-w-[13rem] items-center gap-4 lg:mb-0 lg:mt-12"
                >
                  <!-- Facebook -->
                  <a
                    href="#"
                    class="mx-auto flex h-6 w-6 max-w-full flex-col items-center justify-center bg-[#00000000] text-[#6b658e]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 25"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                      class="overflow-hidden"
                    >
                      <path
                        d="M12 2.38525C9.4791 2.3853 7.05619 3.36173 5.23968 5.10965C3.42317 6.85757 2.35426 9.24111 2.25723 11.7601C2.1602 14.2792 3.0426 16.7379 4.71928 18.6204C6.39595 20.5028 8.73657 21.6627 11.25 21.8567V14.3853H9C8.80109 14.3853 8.61032 14.3063 8.46967 14.1657C8.32902 14.025 8.25 13.8343 8.25 13.6353C8.25 13.4364 8.32902 13.2457 8.46967 13.105C8.61032 12.9644 8.80109 12.8853 9 12.8853H11.25V10.6353C11.2509 9.83997 11.5673 9.07744 12.1297 8.51503C12.6921 7.95261 13.4546 7.63625 14.25 7.63534H15.75C15.9489 7.63534 16.1397 7.71436 16.2803 7.85501C16.421 7.99566 16.5 8.18643 16.5 8.38534C16.5 8.58425 16.421 8.77502 16.2803 8.91567C16.1397 9.05632 15.9489 9.13534 15.75 9.13534H14.25C13.8523 9.1358 13.471 9.29398 13.1898 9.57518C12.9086 9.85639 12.7505 10.2377 12.75 10.6353V12.8853H15C15.1989 12.8853 15.3897 12.9644 15.5303 13.105C15.671 13.2457 15.75 13.4364 15.75 13.6353C15.75 13.8343 15.671 14.025 15.5303 14.1657C15.3897 14.3063 15.1989 14.3853 15 14.3853H12.75V21.8567C15.2634 21.6627 17.604 20.5028 19.2807 18.6203C20.9574 16.7379 21.8398 14.2792 21.7427 11.7601C21.6457 9.24112 20.5768 6.85758 18.7603 5.10966C16.9438 3.36174 14.5209 2.38531 12 2.38525V2.38525Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <!-- Instagram -->
                  <a
                    href="#"
                    class="mx-auto flex h-6 w-6 max-w-full flex-col items-center justify-center bg-[#00000000] text-[#6b658e]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 25"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                      class="overflow-hidden"
                    >
                      <path
                        d="M12 15.1353C13.6569 15.1353 15 13.7921 15 12.1353C15 10.4784 13.6569 9.13525 12 9.13525C10.3431 9.13525 9 10.4784 9 12.1353C9 13.7921 10.3431 15.1353 12 15.1353Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M16.125 2.76025H7.875C6.4831 2.76183 5.14866 3.31546 4.16443 4.29968C3.18021 5.28391 2.62658 6.61835 2.625 8.01025V16.2603C2.62658 17.6522 3.18021 18.9866 4.16443 19.9708C5.14866 20.955 6.4831 21.5087 7.875 21.5103H16.125C17.5169 21.5087 18.8513 20.955 19.8356 19.9708C20.8198 18.9866 21.3734 17.6522 21.375 16.2603V8.01025C21.3734 6.61835 20.8198 5.28391 19.8356 4.29968C18.8513 3.31546 17.5169 2.76183 16.125 2.76025V2.76025ZM12 16.6353C11.11 16.6353 10.24 16.3713 9.49993 15.8769C8.75991 15.3824 8.18314 14.6796 7.84254 13.8573C7.50195 13.0351 7.41283 12.1303 7.58647 11.2573C7.7601 10.3844 8.18868 9.58261 8.81802 8.95327C9.44736 8.32394 10.2492 7.89535 11.1221 7.72172C11.995 7.54809 12.8998 7.6372 13.7221 7.9778C14.5443 8.31839 15.2471 8.89517 15.7416 9.63519C16.2361 10.3752 16.5 11.2452 16.5 12.1353C16.4987 13.3283 16.0241 14.4721 15.1805 15.3157C14.3369 16.1594 13.1931 16.6339 12 16.6353V16.6353ZM16.875 8.38525C16.6525 8.38525 16.435 8.31927 16.25 8.19566C16.065 8.07204 15.9208 7.89634 15.8356 7.69077C15.7505 7.48521 15.7282 7.25901 15.7716 7.04078C15.815 6.82255 15.9222 6.62209 16.0795 6.46476C16.2368 6.30742 16.4373 6.20028 16.6555 6.15687C16.8738 6.11346 17.1 6.13574 17.3055 6.22089C17.5111 6.30604 17.6868 6.45023 17.8104 6.63524C17.934 6.82024 18 7.03775 18 7.26025C18 7.55862 17.8815 7.84477 17.6705 8.05575C17.4595 8.26673 17.1734 8.38525 16.875 8.38525Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <!-- Slack -->
                  <a
                    href="#"
                    class="mx-auto flex h-6 w-6 max-w-full flex-col items-center justify-center bg-[#00000000] text-[#6b658e]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 25 26"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                      class="overflow-hidden"
                    >
                      <path
                        d="M21.5949 12.6353C22.1773 12.1235 22.5486 11.4134 22.6364 10.6431C22.7242 9.87273 22.5223 9.09726 22.07 8.46755C21.6177 7.83783 20.9473 7.39889 20.1892 7.23613C19.4312 7.07337 18.6397 7.19843 17.9687 7.58697V5.60404C17.9691 4.96907 17.776 4.34906 17.415 3.82667C17.054 3.30428 16.5424 2.90434 15.9483 2.68016C15.3543 2.45598 14.706 2.41821 14.0899 2.5719C13.4738 2.72559 12.9192 3.06342 12.5 3.54037C11.9882 2.95792 11.2781 2.58668 10.5078 2.49886C9.73741 2.41105 8.96195 2.61294 8.33223 3.06526C7.70251 3.51758 7.26357 4.18798 7.10081 4.94604C6.93806 5.7041 7.06311 6.49559 7.45166 7.16654H5.46873C4.83376 7.16613 4.21375 7.35928 3.69136 7.72025C3.16897 8.08122 2.76902 8.59286 2.54484 9.18694C2.32066 9.78102 2.2829 10.4293 2.43659 11.0454C2.59028 11.6615 2.92813 12.2161 3.40508 12.6353C2.82262 13.147 2.45137 13.8572 2.36355 14.6275C2.27573 15.3979 2.47762 16.1733 2.92994 16.8031C3.38226 17.4328 4.05267 17.8717 4.81073 18.0345C5.56878 18.1972 6.36028 18.0722 7.03123 17.6836V19.6665C7.03082 20.3015 7.22398 20.9215 7.58495 21.4439C7.94592 21.9663 8.45755 22.3662 9.05163 22.5904C9.64571 22.8146 10.294 22.8524 10.9101 22.6987C11.5262 22.545 12.0808 22.2072 12.5 21.7302C13.0117 22.3127 13.7219 22.6839 14.4922 22.7717C15.2626 22.8595 16.038 22.6576 16.6677 22.2053C17.2975 21.753 17.7364 21.0826 17.8991 20.3245C18.0619 19.5665 17.9369 18.775 17.5483 18.104H19.5312C20.1662 18.1045 20.7862 17.9113 21.3086 17.5503C21.831 17.1894 22.2309 16.6777 22.4551 16.0836C22.6793 15.4896 22.7171 14.8413 22.5634 14.2252C22.4097 13.6091 22.0718 13.0545 21.5949 12.6353V12.6353ZM8.59373 5.60404C8.59373 5.18964 8.75835 4.79221 9.05138 4.49919C9.3444 4.20616 9.74183 4.04154 10.1562 4.04154C10.5706 4.04154 10.9681 4.20616 11.2611 4.49919C11.5541 4.79221 11.7187 5.18964 11.7187 5.60404V7.16654H10.1562C9.74198 7.16607 9.34482 7.00129 9.0519 6.70837C8.75898 6.41545 8.59421 6.0183 8.59373 5.60404ZM3.90623 10.2915C3.90671 9.87729 4.07148 9.48013 4.3644 9.18721C4.65732 8.89429 5.05448 8.72951 5.46873 8.72904H10.1562C10.5705 8.72951 10.9676 8.89429 11.2606 9.18721C11.5535 9.48013 11.7183 9.87729 11.7187 10.2915V11.854H5.46873C5.05448 11.8536 4.65732 11.6888 4.3644 11.3959C4.07148 11.1029 3.90671 10.7058 3.90623 10.2915ZM16.4062 19.6665C16.4062 20.0809 16.2416 20.4784 15.9486 20.7714C15.6556 21.0644 15.2581 21.229 14.8437 21.229C14.4293 21.229 14.0319 21.0644 13.7389 20.7714C13.4459 20.4784 13.2812 20.0809 13.2812 19.6665V18.104H14.8437C15.258 18.1045 15.6551 18.2693 15.9481 18.5622C16.241 18.8551 16.4058 19.2523 16.4062 19.6665V19.6665ZM19.5312 16.5415H14.8437C14.4295 16.5411 14.0323 16.3763 13.7394 16.0834C13.4465 15.7904 13.2817 15.3933 13.2812 14.979V13.4165H19.5312C19.9456 13.4165 20.3431 13.5812 20.6361 13.8742C20.9291 14.1672 21.0937 14.5646 21.0937 14.979C21.0937 15.3934 20.9291 15.7909 20.6361 16.0839C20.3431 16.3769 19.9456 16.5415 19.5312 16.5415Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <!-- Twitter -->
                  <a
                    href="#"
                    class="mx-auto flex h-6 w-6 max-w-full flex-col items-center justify-center bg-[#00000000] text-[#6b658e]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 25 26"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                      class="overflow-hidden"
                    >
                      <path
                        d="M23.9899 7.71892L21.0442 10.6647C20.4561 17.489 14.701 22.7915 7.81248 22.7915C6.39408 22.7915 5.22516 22.5666 4.3381 22.1231C3.62222 21.7652 3.32897 21.381 3.2562 21.2717C3.19092 21.1738 3.1486 21.0624 3.13241 20.9458C3.11622 20.8293 3.12658 20.7106 3.1627 20.5986C3.19883 20.4865 3.25979 20.3842 3.34103 20.299C3.42228 20.2139 3.52171 20.1482 3.6319 20.1069C3.65703 20.0974 5.96082 19.2126 7.44979 17.5279C6.52365 16.8684 5.70852 16.0655 5.03509 15.1495C3.69642 13.3327 2.2806 10.1777 3.13756 5.46424C3.16307 5.32396 3.22648 5.19334 3.32091 5.08653C3.41535 4.97971 3.53721 4.90078 3.6733 4.85827C3.80939 4.81576 3.95452 4.8113 4.09296 4.84538C4.2314 4.87946 4.35788 4.95076 4.45869 5.05158C4.49312 5.08591 7.74405 8.29093 11.7182 9.32619L11.7187 8.72862C11.7271 7.47777 12.2319 6.28145 13.122 5.4026C14.0121 4.52375 15.2148 4.0343 16.4656 4.04183C17.2782 4.05309 18.074 4.27491 18.7753 4.68564C19.4765 5.09637 20.0592 5.68195 20.4665 6.3852L23.4375 6.38525C23.592 6.38525 23.743 6.43107 23.8715 6.51691C24 6.60275 24.1001 6.72476 24.1593 6.86752C24.2184 7.01027 24.2339 7.16735 24.2037 7.3189C24.1736 7.47044 24.0992 7.60965 23.9899 7.71892Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <!-- Footer Menu -->
              <div
                class="md:flex gap-[7.5rem] grid grid-cols-[1fr_1fr] bg-[#00000000] text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
              >
                <!-- Solution Menu Item -->
                <div class="flex flex-col gap-7 font-semibold no-underline">
                  <p class="text-[#c4cff5] text-base mr-4 my-4">Solution</p>
                  <a href="#">Marketing</a>
                  <a href="#">Analytics</a>
                  <a href="#">Commerce</a>
                  <a href="#">Insights</a>
                </div>
                <!-- Support Menu Item -->
                <div class="flex flex-col gap-7 font-semibold no-underline">
                  <p class="text-[#c4cff5] text-base mr-4 my-4">Support</p>
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Pricing</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Documentation</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Guides</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >API&nbsp;Status</a
                  >
                </div>
                <!-- Docs Menu Item -->
                <div class="flex flex-col gap-7 font-semibold no-underline">
                  <p class="text-[#c4cff5] text-base mr-4 my-4">Docs</p>
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Pricing</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >API&nbsp;Guide</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >API Status</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Dev Guide</a
                  >
                </div>
                <!-- Company Menu Item -->
                <div class="flex flex-col gap-7 font-semibold no-underline">
                  <p class="text-[#c4cff5] text-base mr-4 my-4">Company</p>
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >About</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Blog</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Jobs</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Press</a
                  >
                  <a
                    href="#"
                    class="bg-[#00000000] pb-0 pt-0 text-sm font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                    >Partners</a
                  >
                </div>
              </div>
            </div>
            <div
              class="mb-0 lg:mt-[6.25rem] w-full border-b-[1.7px] border-solid border-b-[#241a3a] mt-16"
            ></div>
            <!-- NewsLetter Section -->
            <div
              class="flex lg:flex-row justify-between pb-[3.75rem] pt-[3.75rem] flex-col lg:gap-0 gap-8"
            >
              <div class="flex flex-col items-start gap-2 text-[#c4cff5]">
                <!-- Title -->
                <h5 class="md:text-xl font-bold leading-normal text-base">
                  Join our newsletter
                </h5>
                <!-- Content -->
                <p class="text-sm">Keep up to date with everything ElavateAI</p>
              </div>
              <div class="mb-[15px] w-full max-w-[25rem]">
                <form
                  class="relative max-w-full overflow-hidden rounded-lg border border-solid border-[#27203a]"
                >
                  <input
                    class="block h-[38px] w-full bg-[#1e1830] p-6 align-middle text-[14px] leading-[1.42857] text-[#333333]"
                    maxlength="256"
                    name="email-5"
                    data-name="Email 5"
                    placeholder="Enter your email"
                    type="email"
                    id="email-5"
                    required=""
                  />
                  <!-- Button -->
                  <button
                    type="submit"
                    class="absolute bottom-[0%] left-[auto] right-[0%] top-[0%] m-0 inline-block rounded-none border border-solid border-[#7536ab] bg-[radial-gradient(circle,_rgb(52,_28,_80)_47%,_rgb(61,_30,_94))] px-6 py-[0.6rem] text-center font-semibold text-white no-underline [appearance:button]"
                  >
                    Join
                  </button>
                </form>
                <div
                  class="hidden bg-[#dddddd] p-5 text-center"
                  tabindex="-1"
                  role="region"
                  aria-label="Email Form success"
                >
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div
                  class="mt-2.5 hidden bg-[#ffdede] p-2.5"
                  tabindex="-1"
                  role="region"
                  aria-label="Email Form failure"
                >
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full border-b-[1.7px] border-solid border-b-[#241a3a] lg:mt-0 mt-16"
            ></div>
            <div
              class="flex md:flex-row md:items-center justify-between pt-[1.875rem] flex-col items-start md:gap-0 gap-8"
            >
              <!-- Copyright -->
              <p class="text-[#635e81] mb-0">
                © Copyright 2021. All rights reserved.
              </p>
              <div
                class="flex sm:gap-10 text-left font-semibold sm:flex-row flex-col gap-4"
              >
                <a
                  href="#"
                  class="inline-block bg-[#00000000] p-0 font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                  >Terms of Service</a
                >
                <a
                  href="#"
                  class="inline-block bg-[#00000000] p-0 font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                  >License</a
                >
                <a
                  href="#"
                  class="inline-block bg-[#00000000] p-0 font-medium text-[#635e81] no-underline [transition:color_0.25s_ease_0s]"
                  >Privacy Policy</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
