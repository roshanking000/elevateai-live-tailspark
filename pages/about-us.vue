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
      <!-- Mission Section -->
      <section class="relative">
        <!-- Image -->
        <div
          class="absolute -bottom-2/4 left-1/2 w-full max-w-5xl -translate-x-1/2"
        >
          <img
            src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65a15d606b079c71934006cc_globe-svg-2.svg"
            width="1028"
            height="1028"
            alt=""
            class="absolute inset-0 inline-block h-full w-full object-cover md:relative md:object-contain"
            style="visibility: visible"
          />
        </div>
        <div
          class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <!-- Container -->
          <div
            class="relative z-10 flex flex-col items-center gap-6 text-center md:gap-14 p-28 sm:p-40 lg:p-[15rem]"
          >
            <!-- Title -->
            <h1
              class="bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)] bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:bg-[linear-gradient(1deg,_rgb(83,_51,_122),_rgb(255,_255,_255)_52%)]"
            >
              Meet ElevateAI
            </h1>
            <!-- Content -->
            <p class="w-full max-w-lg text-[#b3aed2]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
              purus sit amet luctus venenatis, lectus
            </p>
          </div>
          <div
            class="lg:grid w-full lg:grid-cols-2 gap-6 flex flex-col-reverse md:gap-10"
          >
            <!-- Image -->
            <div
              class="relative h-full overflow-hidden rounded-2xl aspect-[16_/_9] w-full"
            >
              <img
                src="https://assets-global.website-files.com/657856d0336ed52d94d3834d/65ae47c178ae17b8b49af4ad_mission-img.webp"
                width="1240"
                height="956"
                alt=""
                class="absolute inset-0 inline-block h-full w-full object-cover md:absolute md:object-cover"
                style="visibility: visible"
              />
            </div>
            <div
              class="flex flex-col gap-5 rounded-2xl bg-[#3630714d] lg:p-20 text-[#b1b1b1] mix-blend-screen md:px-10 sm:px-5 sm:py-10"
            >
              <!-- Mission Title -->
              <h2 class="text-3xl font-bold text-white md:text-5xl">
                Our Mission
              </h2>
              <!-- Mission Content -->
              <p>
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus. <br />
                <br />Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
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
