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
            class="text-sm font-bold uppercase text-[#7a3eb4] transition hover:text-[#7a3eb4] hover:outline-0"
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
    <main class="text-white bg-auto overflow-clip min-h-screen">
      <!-- Signup Section -->
      <section class="relative">
        <div class="px-5 md:px-10">
          <!-- Container -->
          <div class="relative z-10 mx-auto w-full max-w-7xl pb-20 pt-40 md:pt-48 lg:pb-20 lg:pt-60">
            <!-- Component -->
            <div class="">
              <div
                class="relative z-10 mx-auto lg:flex lg:flex-row w-full max-w-none grid-cols-2 items-center justify-between gap-12 flex flex-col"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                <div class="flex w-full max-w-lg flex-col items-center gap-12">
                  <!-- Title -->
                  <h1
                    class="relative z-[2] text-center text-3xl font-bold md:text-5xl"
                  >
                    Start your <br />14-day free trial
                  </h1>
                  <div class="mb-4 w-full max-w-[354px]">
                    <form
                      name="wf-form-Signup-Form"
                      method="get"
                      class="flex flex-col"
                    >
                      <div class="relative">
                        <input
                          class="block h-9 min-h-[48px] w-full rounded-md border border-solid border-black bg-white bg-auto bg-no-repeat py-3 pl-16 pr-3 align-middle text-sm text-black bg-[24px] mb-[1rem]"
                          maxlength="256"
                          name="Username"
                          placeholder="Username"
                          type="text"
                          required=""
                        />
                        <img
                          class="absolute top-3 left-6"
                          src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65ae5c3719f5f282716bd7d6_signup-svg1.svg"
                        />
                      </div>

                      <div class="relative">
                        <input
                          class="block h-9 min-h-[48px] w-full rounded-md border border-solid border-black bg-white bg-auto bg-no-repeat py-3 pl-16 pr-3 align-middle text-sm text-black bg-[24px] mb-[1rem]"
                          maxlength="256"
                          name="Password"
                          placeholder="Password (min 8 characters)"
                          type="password"
                          required=""
                        />
                        <img
                          class="absolute top-3 left-6"
                          src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65ae5c37e4c8c7ec4af023b3_signup-svg2.svg"
                        />
                      </div>
                      <label
                        class="mb-1 mt-2.5 flex items-center text-xs font-medium"
                      >
                        <input
                          type="checkbox"
                          class="w-5 h-5 mr-3"
                          name="Terms-Checkbox"
                          required=""
                        />
                        <span
                          class="inline-block cursor-pointer font-normal"
                          for="Terms-Checkbox"
                          >I agree with Terms &amp; Conditions</span
                        >
                      </label>
                      <a
                        color="secondary"
                        href="#"
                        class="relative mb-7 mt-12 inline-block max-w-full overflow-hidden rounded-2xl p-[1.4px] bg-[linear-gradient(to_right,_#873fbb,_#3e2161_53%,_#873fbb)]"
                      >
                        <div
                          class="flex items-center justify-center rounded-2xl !bg-[radial-gradient(circle_at_50%_50%,_rgb(62,_33,_97)_51%,_rgb(84,_45,_125)_94%)] px-6 py-5 text-center"
                        >
                          <p
                            class="bg-[linear-gradient(to_right,_#c4cff5,_#fcfce7_47%,_#c4cff5)] bg-clip-text font-['Plus_Jakarta_Sans',_sans-serif] font-bold text-transparent"
                          >
                            Join Flowspark
                          </p>
                        </div>
                        <div
                          class="absolute bottom-auto left-0 right-auto top-0 h-10 w-10 bg-[#c4cff5] blur-[60px] filter"
                          style="
                            will-change: transform;
                            transform: translate3d(175%, 25%, 0px)
                              scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
                              rotateZ(0deg) skew(0deg, 0deg);
                            transform-style: preserve-3d;
                            opacity: 0;
                          "
                        ></div>
                      </a>

                      <div class="relative z-[2] text-center text-sm">
                        Already have an account? &nbsp;<a
                          href="#"
                          class="font-bold text-white"
                          >Login now</a
                        >
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="flex h-auto w-full max-w-[480px] flex-col items-start gap-8 overflow-hidden rounded-2xl border border-solid border-[#ffffff33] bg-[#302c7c4d] md:p-10 px-5 lg:max-w-[544px]"
                >
                  <div class="rounded-lg bg-[#472cb5] p-1">
                    <div class="h-10 w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 40 40"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        class="overflow-hidden"
                      >
                        <g clip-path="url(#clip0_5465_3776)">
                          <path
                            d="M7.63833 28.8686C5.92167 27.0452 5 25.0002 5 21.6852C5 15.8519 9.095 10.6236 15.05 8.03857L16.5383 10.3352C10.98 13.3419 9.89333 17.2436 9.46 19.7036C10.355 19.2402 11.5267 19.0786 12.675 19.1852C15.6817 19.4636 18.0517 21.9319 18.0517 25.0002C18.0517 26.5473 17.4371 28.0311 16.3431 29.125C15.2492 30.219 13.7654 30.8336 12.2183 30.8336C10.43 30.8336 8.72 30.0169 7.63833 28.8686ZM24.305 28.8686C22.5883 27.0452 21.6667 25.0002 21.6667 21.6852C21.6667 15.8519 25.7617 10.6236 31.7167 8.03857L33.205 10.3352C27.6467 13.3419 26.56 17.2436 26.1267 19.7036C27.0217 19.2402 28.1933 19.0786 29.3417 19.1852C32.3483 19.4636 34.7183 21.9319 34.7183 25.0002C34.7183 26.5473 34.1038 28.0311 33.0098 29.125C31.9158 30.219 30.4321 30.8336 28.885 30.8336C27.0967 30.8336 25.3867 30.0169 24.305 28.8686Z"
                            fill="currentColor"
                          ></path>
                        </g>
                        <defs>
                          <clipPath>
                            <rect
                              width="40"
                              height="40"
                              fill="currentColor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <p class="text-xl">
                    I recently tried the free trial subscription of ElevateAI,
                    and I am blown away by the impact it had on my company
                    workflow. The 14-day trial was a game-changer, offering a
                    taste of what this platform can do.
                  </p>
                  <div class="text-[#ffffff66]">
                    <p class="text-lg font-bold text-white">John Robert</p>
                    <p class="text-sm">Senior Java Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Image -->
        <div
          class="pointer-events-none absolute bottom-[0%] left-[auto] right-[0%] top-[auto]"
        >
          <div class="w-full mix-blend-color-dodge blur-[300px] filter">
            <img
              src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a00dd207047d6f84b90ddc_hero-gradient-svg.svg"
              alt=""
              class="md:relative inset-0 inline-block h-full w-full object-cover absolute md:object-contain"
              style="visibility: visible"
            />
          </div>
        </div>
      </section>
    </main>
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
