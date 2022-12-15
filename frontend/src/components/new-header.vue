<template>
  <header
    class="global-header top-0 left-0 z-100 w-full md:fixed md:has-scroll:bg-cream transition-transform md:transition duration-300 md:mt-banner text-red md:text-gray-900"
    data-controller="toggle toggle2" data-toggle-disable-scroll=""
  >
    <div
      class="wrap container !items-center mx-auto flex justify-between top-0 left-0 w-full z-100 relative md:items-start md:px-4 md:h-32 lg:h-auto enabled:flex-col enabled:fixed enabled:h-full enabled:bg-red enabled:p-8 before:block md:before:hidden enabled:before:hidden before:fixed before:w-screen before:h-10 before:py-4 before:box-content before:top-0 before:left-0 before:z-40 before:transition before:duration-300 has-scroll:before:bg-cream before:mt-banner"
      data-target="toggle.toggleable"
    >
      <button
        class="md:hidden enabled:hidden transition duration-300 fixed left-0 top-0 p-4 z-40 h-10 box-content mt-banner"
        data-action="toggle#enable" data-target="toggle.toggleable"
      >
        <svg viewBox="0 0 15 12" class="w-6 h-6 m-auto">
          <path
            fill-rule="evenodd" clip-rule="evenodd"
            d="M.92 2C.4 2 0 1.566 0 1c0-.566.4-1 .92-1h9.16c.52 0 .92.434.92 1 0 .566-.4 1-.92 1H.92Zm9.13 8c.52 0 .95.434.95 1 0 .566-.4 1-.92 1H.92C.4 12 0 11.566 0 11c0-.566.4-1 .92-1h9.13Zm3.98-5A.98.98 0 0 1 15 6c0 .566-.408 1-.94 1H.94C.407 7 0 6.566 0 6c0-.566.408-1 .94-1h13.09Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <nav
        class="hidden enabled:flex md:flex flex-col md:flex-row flex-grow md:py-4 font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
        data-target="toggle.toggleable"
      >
        <div class="md:mr-4 mb-10 md:mb-0 flex justify-between items-center">
          <a href="/shop" aria-label="Dizzie" class="text-pink-100 md:text-red inline-block">
            <img class="h-6" src="../assets/images/eventralize-logo-highres.png">
          </a>

          <button
            id="close-nav-button" data-action="toggle#disable"
            class="md:hidden p-2 bg-white text-red rounded-full"
          >
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
            >
              <path
                d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="group" data-controller="toggle tabs" data-action="mouseleave->toggle#disable">
          <button
            class="w-full md:w-auto md:font-bold py-1 md:p-2 md:group-hover:text-red active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red md:hidden"
            data-action="toggle#toggle"
          >
            <div class="flex justify-between items-baseline w-full">
              Aisles
              <svg
                class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button
            class="hidden md:flex items-center md:font-bold md:p-2 hover:text-red focus:text-red group-hover:text-red hover:bg-purple-500 hover:text-white rounded-lg"
          >
            <MegaMenu />
          </button>
          <div
            class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
            data-target="toggle.toggleable"
          >
            <div
              class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
            >
              <button class="text-white ml-8" data-action="toggle#disable">
                <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                  <path
                    d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                  />
                </svg>
              </button>

              <button
                class="p-2 bg-white text-red rounded-full mr-8"
                data-action="toggle#disable forward-event#forward"
                data-controller="forward-event" data-forward-event-selector="#close-nav-button"
              >
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                >
                  <path
                    d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-10 md:mt-0 pt-8 md:pt-0">
              <div
                class="md:absolute z-100 md:pt-4 md:-mt-2 md:-ml-4 before:hidden md:before:block before:mt-2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:absolute before:left-0 before:top-0 before:ml-14"
              >
                <div class="md:bg-white md:rounded-4 md:shadow-card md:px-6 md:py-4">
                  <div class="md:my-2">
                    <div
                      class="flex flex-col md:flex-row justify-start items-start font-bold md:text-gray-400 md:border-b border-gray-200 md:gap-10 md:mb-6"
                    >
                      <button
                        class="md:enabled:text-red md:border-b border-transparent hover:border-red enabled:border-red py-1 md:pt-0 md:pb-4 flex justify-between items-baseline w-full md:w-auto active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        data-target="tabs.toggleable" data-group-id="pantry"
                        data-action="tabs#show mouseover->tabs#show"
                      >
                        <span>Pantry</span>
                        <svg
                          class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button
                        class="md:enabled:text-red md:border-b border-transparent hover:border-red enabled:border-red py-1 md:pt-0 md:pb-4 flex justify-between items-baseline w-full md:w-auto active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        data-target="tabs.toggleable" data-group-id="household"
                        data-action="tabs#show mouseover->tabs#show"
                      >
                        <span>Household</span>
                        <svg
                          class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <button
                        class="md:enabled:text-red md:border-b border-transparent hover:border-red enabled:border-red py-1 md:pt-0 md:pb-4 flex justify-between items-baseline w-full md:w-auto active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        data-target="tabs.toggleable" data-group-id="personal"
                        data-action="tabs#show mouseover->tabs#show"
                      >
                        <span>Personal</span>
                        <svg
                          class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <div class="md:hidden mt-6 text-pink-100">
                        Shop by
                      </div>
                      <button
                        class="md:enabled:text-red md:border-b border-transparent hover:border-red enabled:border-red py-1 md:pt-0 md:pb-4 flex justify-between items-baseline w-full md:w-auto active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        data-target="tabs.toggleable" data-group-id="diets-values"
                        data-action="tabs#show mouseover->tabs#show"
                      >
                        <span>Diet &amp; values</span>
                        <svg
                          class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button
                        class="md:enabled:text-red md:border-b border-transparent hover:border-red enabled:border-red py-1 md:pt-0 md:pb-4 flex justify-between items-baseline w-full md:w-auto active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        data-target="tabs.toggleable" data-group-id="packaging"
                        data-action="tabs#show mouseover->tabs#show"
                      >
                        <span>Packaging</span>
                        <svg
                          class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    <div
                      class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
                      data-group-id="pantry" data-target="tabs.toggleable"
                    >
                      <div
                        class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
                      >
                        <button class="text-white ml-8" data-action="tabs#hideAll">
                          <svg
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                          >
                            <path
                              d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                            />
                          </svg>
                        </button>

                        <button
                          class="p-2 bg-white text-red rounded-full mr-8"
                          data-action="tabs#hideAll toggle#disable forward-event#forward"
                          data-controller="forward-event" data-forward-event-selector="#close-nav-button"
                        >
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                            <path
                              d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="mt-10 md:mt-0 pt-8 md:pt-0">
                        <a
                          href="/c/pantry"
                          class="active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        >
                          All pantry
                        </a>

                        <div class="flex md:grid flex-col grid-cols-4 gap-8 md:gap-x-14 md:gap-y-6 mt-6">
                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Essentials
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/pasta"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Pasta
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/rice"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Rice
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/noodles"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Noodles
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/grains"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Grains
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/cereal"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Cereal
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/beans-pulses"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Beans &amp; Pulses
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Drinks
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/tea"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Tea
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/coffee"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Coffee
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/hot-chocolate"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Hot Chocolate
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Snacks
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/dried-fruit"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Dried fruit
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/nuts"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Nuts
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/seeds"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Seeds
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/chocolate-sweet-snacks"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Chocolate &amp; Sweet Snacks
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/gummy-sweets"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Gummy Sweets
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/savoury"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Savoury
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/crackers"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Crackers
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Ingredients
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/herbs-spices"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Herbs &amp; Spices
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/seasoning-gravy%20"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Seasoning &amp; Blends
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/dehydrated-vegetables-powders"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Dehydrated Vegetables &amp; Powders
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/stock-gravy"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Stock &amp; Gravy
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/meat-alternatives"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Meat Alternatives
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Baking
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/flour"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Flour
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/baking-essentials"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Baking Essentials
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/sugar-sweeteners"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Sugar &amp; Sweeteners
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/baking-mixes"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Baking Mixes
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
                      data-group-id="household" data-target="tabs.toggleable"
                    >
                      <div
                        class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
                      >
                        <button class="text-white ml-8" data-action="tabs#hideAll">
                          <svg
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                          >
                            <path
                              d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                            />
                          </svg>
                        </button>

                        <button
                          class="p-2 bg-white text-red rounded-full mr-8"
                          data-action="tabs#hideAll toggle#disable forward-event#forward"
                          data-controller="forward-event" data-forward-event-selector="#close-nav-button"
                        >
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                            <path
                              d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="mt-10 md:mt-0 pt-8 md:pt-0">
                        <a
                          href="/c/household"
                          class="active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        >
                          All household
                        </a>

                        <div class="flex md:grid flex-col grid-cols-4 gap-8 md:gap-x-14 md:gap-y-6 mt-6">
                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Cleaning
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/dishwashing"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Dishwashing
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/laundry"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Laundry
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/surface-cleaners"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Surface Cleaners
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/cleaning-accessories"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Cleaning Accessories
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/pumps-triggers"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Pumps &amp; Triggers
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Household Essentials
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/toilet-roll"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Toilet Roll
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/kitchen-roll"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Kitchen Roll
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/bin-liners"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Bin Liners
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/food-wraps-sheets"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Food Wraps &amp; Sheets
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Homeware
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/food-storage"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Food Storage
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/on-the-go"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  On The Go
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/coffee-tea-accessories"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Coffee &amp; Tea Accessories
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/candles"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Candles
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Pet
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/dog"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Dog
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
                      data-group-id="personal" data-target="tabs.toggleable"
                    >
                      <div
                        class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
                      >
                        <button class="text-white ml-8" data-action="tabs#hideAll">
                          <svg
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                          >
                            <path
                              d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                            />
                          </svg>
                        </button>

                        <button
                          class="p-2 bg-white text-red rounded-full mr-8"
                          data-action="tabs#hideAll toggle#disable forward-event#forward"
                          data-controller="forward-event" data-forward-event-selector="#close-nav-button"
                        >
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                            <path
                              d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="mt-10 md:mt-0 pt-8 md:pt-0">
                        <a
                          href="/c/personal"
                          class="active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        >
                          All personal
                        </a>

                        <div class="flex md:grid flex-col grid-cols-4 gap-8 md:gap-x-14 md:gap-y-6 mt-6">
                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Bath &amp; Shower
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/body-wash"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Body Wash
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/soap"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Soap
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/hand-wash"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Hand Wash
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/sponges-exfoliaters"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Sponges &amp; Exfoliators
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Dental
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/toothbrushes"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Toothbrushes
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/toothpaste"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Toothpaste
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/mouthwash-floss"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Mouthwash &amp; Floss
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Haircare
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/shampoo"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Shampoo
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/conditioner"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Conditioner
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Skincare
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/body"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Body
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/face"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Face
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/cleansing-pads-cloths"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Cleansing Pads &amp; Cloths
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Period Care
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/pads"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Pads
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/tampons"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Tampons
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/period-cups"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Period Cups
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Personal Essentials
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/deodorant"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Deodorant
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/shaving"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Shaving
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/cotton-pads-buds"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Cotton Pads &amp; Buds
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/tissues"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Tissues
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Wellbeing
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/vitamins"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Vitamins
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/protein-superfood-powders"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Protein &amp; Superfood Powders
                                </a>
                              </li>

                              <li>
                                <a
                                  href="/c/first-aid"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  First Aid
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h4 class="text-pink-100 md:text-red">
                              Baby &amp; Parent
                            </h4>

                            <ul class="ml-6 md:ml-0">
                              <li>
                                <a
                                  href="/c/bathtime"
                                  class="py-1 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                                >
                                  Bathtime
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
                      data-group-id="diets-values" data-target="tabs.toggleable"
                    >
                      <div
                        class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
                      >
                        <button class="text-white ml-8" data-action="tabs#hideAll">
                          <svg
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                          >
                            <path
                              d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                            />
                          </svg>
                        </button>

                        <button
                          class="p-2 bg-white text-red rounded-full mr-8"
                          data-action="tabs#hideAll toggle#disable forward-event#forward"
                          data-controller="forward-event" data-forward-event-selector="#close-nav-button"
                        >
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                            <path
                              d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="mt-10 md:mt-0 pt-8 md:pt-0">
                        <ul class="flex flex-col md:flex-row justify-start md:gap-8">
                          <li>
                            <a
                              href="/diet/dairy_free"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Dairy free
                            </a>
                          </li>

                          <li>
                            <a
                              href="/diet/fair_trade"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Fair trade
                            </a>
                          </li>

                          <li>
                            <a
                              href="/diet/gluten_free"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Gluten free
                            </a>
                          </li>

                          <li>
                            <a
                              href="/diet/organic"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Organic
                            </a>
                          </li>

                          <li>
                            <a
                              href="/diet/vegan"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Vegan
                            </a>
                          </li>

                          <li>
                            <a
                              href="/diet/wheat_free"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Wheat free
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
                      data-group-id="packaging" data-target="tabs.toggleable"
                    >
                      <div
                        class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
                      >
                        <button class="text-white ml-8" data-action="tabs#hideAll">
                          <svg
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                          >
                            <path
                              d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                            />
                          </svg>
                        </button>

                        <button
                          class="p-2 bg-white text-red rounded-full mr-8"
                          data-action="tabs#hideAll toggle#disable forward-event#forward"
                          data-controller="forward-event" data-forward-event-selector="#close-nav-button"
                        >
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                          >
                            <path
                              d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                            <path
                              d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div class="mt-10 md:mt-0 pt-8 md:pt-0">
                        <ul class="flex flex-col md:flex-row justify-start md:gap-8">
                          <li>
                            <a
                              href="/packaging/compostable"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Compostable
                            </a>
                          </li>

                          <li>
                            <a
                              href="/packaging/plastic_free"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Plastic free
                            </a>
                          </li>

                          <li>
                            <a
                              href="/packaging/recyclable"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Recyclable
                            </a>
                          </li>

                          <li>
                            <a
                              href="/packaging/refill"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Refill at Home
                            </a>
                          </li>

                          <li>
                            <a
                              href="/packaging/returnable"
                              class="block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                            >
                              Return to Refill
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/new"
          class="md:font-bold py-1 md:p-2 active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red hover:underline underline-offset-8 decoration-purple-500 decoration-2 decoration-dashed"
        >
          New
        </a>
        <a
          href="/popular"
          class="md:font-bold py-1 md:p-2 active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red hover:underline underline-offset-8 decoration-purple-500 decoration-2 decoration-dashed"
        >
          Popular ✨
        </a>
      </nav>

      <div
        class="md:absolute top-0 left-0 w-full h-full enabled:hidden flex-grow pointer-events-none"
        data-target="toggle.toggleable"
      >
        <div class="hidden enabled:block md:block enabled" data-target="toggle2.toggleable">
          <div data-controller="search" data-search-suggest-url="/search/suggest" class="group">
            <form
              action="/search"
              class="h-10 top-4 fixed p-4 pl-14 left-0 top-0 w-full z-40 group-enabled:h-full group-enabled:fixed group-enabled:bg-cream group-enabled:z-50 group-enabled:p-0 group-enabled:m-0 group-enabled:pointer-events-auto md:!h-10 md:!p-4 md:!mt-14 md:!mx-auto md:!relative md:!bg-transparent md:justify-center md:!transform-none lg:!px-0 lg:!my-0 lg:w-[20vw] mt-banner"
              data-target="search.form"
              data-action="submit->search#submit keydown->search#keydown click@window->search#hideIfOutside addToBasket@window->search#clearPreviousQuery"
              data-custom-submit-handler="true"
            >
              <div
                class="h-10 group-enabled:h-14 md:group-enabled:h-10 relative z-40 bg-gray-50 rounded-lg flex shadow focus-within:ring-2 focus-within:ring-indigo-200 group-enabled:rounded-none md:group-enabled:rounded-full w-full pointer-events-auto"
              >
                <button
                  type="submit" data-target="search.submit"
                  class="group-enabled:hidden md:group-enabled:block px-4 border-none bg-transparent z-40 py-0 w-12 text-red"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"
                    class="fill-current w-4 h-4 object-contain"
                  >
                    <path
                      d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                    />
                  </svg>
                </button>

                <button
                  type="button" data-target="search.close" data-action="search#hide"
                  class="group-enabled:flex text-red md:group-enabled:hidden hidden btn btn-secondary self-stretch items-center justify-center left-0 top-0 bottom-0 border-none bg-transparent z-40 py-0 w-12"
                >
                  <svg
                    viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full object-contain"
                  >
                    <path
                      d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                    />
                  </svg>
                </button>

                <input
                  class="search-input bg-transparent focus:[box-shadow:none] focus:outline-none mb-0.5 w-full border-0 border-none shadow-none"
                  type="text"
                  name="q"
                  placeholder="Search 100+ events" data-target="search.input"
                  data-action="focus->search#show input->search#update" autocomplete="off"
                >

                <button
                  type="button" data-target="search.clear" data-action="search#clear"
                  class="hidden btn btn-secondary absolute w-auto right-0 top-0 bottom-0 border-none z-40 text-gray-900 py-0"
                >
                  <svg
                    width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class=""
                  >
                    <path
                      d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div
                class="hidden group-enabled:block md:absolute w-full md:pt-1 text-gray-900 pointer-events-auto z-40 left-0 2lg:left-auto md:px-4 2lg:px-0"
                data-target="search.suggestions"
              >
                <div class="search-suggestions bg-white w-full md:w-auto p-3 md:rounded-4">
                  <ul class="flex divide-y divide-gray-200 flex-col bg-white w-full font-normal">
                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="pasta" href="/search?q=pasta"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            pasta
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="miniml" href="/search?q=miniml"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            miniml
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="chocolate" href="/search?q=chocolate"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            chocolate
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="coffee" href="/search?q=coffee"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            coffee
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="flour" href="/search?q=flour"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            flour
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="oats" href="/search?q=oats"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            oats
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        class="p-3 w-full block transition duration-300 hover:bg-cream active:bg-cream focus:bg-cream flex justify-between items-center"
                        data-action="search#setLoading search#storeQuery" data-target="search.suggestion"
                        data-query="soap" href="/search?q=soap"
                      >
                        <div class="flex items-center mr-5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-3 h-3">
                            <path
                              d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
                            />
                          </svg>

                          <div class="ml-3">
                            soap
                          </div>
                        </div>
                        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-3">
                          <path
                            d="M 1.7347592,6.93374 C 1.0138592,6.93155 0.44115915,7.5042 0.44365915,8.22513 0.44765915,8.9448 1.0198592,9.51627 1.7389592,9.51635 L 10.530729,9.50608 7.4458092,12.591 c -0.50082,0.5008 -0.498,1.3183 0.00329,1.8196 0.50141,0.5014 1.31872,0.5041 1.81957,0.0033 L 15.460708,8.22182 9.3367792,2.09789 c -0.50129,-0.50129 -1.31876,-0.50411 -1.81957,-0.00329 -0.50082,0.50082 -0.498,1.31829 0.00329,1.81957 l 3.0191398,3.01915 z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          class="flex justify-end w-full enabled:hidden md:hidden fixed p-4 z-40 enabled"
          data-target="toggle2.toggleable"
        >
          <a href="/shop" aria-label="Dizzie" class="block absolute left-1/2 -translate-x-1/2 pointer-events-auto">
            <img src="../assets/images/eventralize_logo_web.png">
          </a>

          <button data-action="toggle2#enable" class="h-10 pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="fill-current w-5 h-5">
              <path
                d="M16.3 14.2L11.9 10.6C12.7 9.5 13.2 8.1 13.2 6.6 13.2 3 10.2 0 6.6 0 3 0 0 3 0 6.6 0 10.3 3 13.2 6.6 13.2 8.1 13.2 9.5 12.7 10.6 11.9L14.1 16.4C15 17.3 16 17.1 16.6 16.4 17.1 15.7 17.2 15 16.3 14.2ZM6.6 11.2C4.1 11.2 2 9.1 2 6.6 2 4.1 4.1 2 6.6 2 9.1 2 11.2 4.1 11.2 6.6 11.2 9.1 9.1 11.2 6.6 11.2Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        data-target="toggle.toggleable"
        class="hidden enabled:block md:block md:py-4 font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
      >
        <div data-controller="toggle" data-action="mouseleave->toggle#disable mouseenter->toggle#enable" class="group ">
          <button
            class="w-full md:w-auto md:font-bold py-1 md:p-2 md:group-hover:text-red active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
            data-action="toggle#enable"
          >
            <div class="flex justify-between items-baseline w-full">
              About
              <svg
                class="stroke-current w-4 h-4 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <div
            class="md:hidden md:enabled:block pointer-events-none enabled:pointer-events-auto transition duration-200 translate-x-full enabled:translate-x-0 md:transform-none md:enabled:transform-none fixed md:static bottom-0 left-0 w-screen md:w-auto h-full md:h-auto bg-red md:bg-transparent overflow-auto p-8 md:p-0 z-100 overflow-x-hidden font-heading md:font-body text-xl md:text-base text-white md:text-gray-900"
            data-target="toggle.toggleable"
          >
            <div
              class="md:hidden flex justify-between items-center mb-10 h-10 fixed left-0 top-0 py-8 w-full box-content bg-red"
            >
              <button class="text-white ml-8" data-action="toggle#disable">
                <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
                  <path
                    d="M14.1696 6.93374C14.8905 6.93155 15.4632 7.5042 15.4607 8.22513C15.4567 8.9448 14.8845 9.51627 14.1654 9.51635L5.37363 9.50608L8.45855 12.591C8.95937 13.0918 8.95655 13.9093 8.45526 14.4106C7.95385 14.912 7.13654 14.9147 6.63569 14.4139L0.443651 8.22182L6.56758 2.09789C7.06887 1.5966 7.88634 1.59378 8.38715 2.0946C8.88797 2.59542 8.88515 3.41289 8.38386 3.91417L5.36472 6.93332L14.1696 6.93374Z"
                  />
                </svg>
              </button>

              <button
                class="p-2 bg-white text-red rounded-full mr-8" data-action="toggle#disable forward-event#forward"
                data-controller="forward-event" data-forward-event-selector="#close-nav-button"
              >
                <svg
                  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4"
                >
                  <path
                    d="M2.04742 2.05302L7.9944 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.9527 2.05302L2.00572 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-10 md:mt-0 pt-8 md:pt-0">
              <div
                class="md:absolute z-100 md:pt-4 md:-mt-2 md:-ml-4 before:hidden md:before:block before:mt-2 before:w-4 before:h-4 before:bg-white before:rotate-45 before:absolute before:left-0 before:top-0 before:ml-7"
              >
                <div class="md:bg-white md:rounded-4 md:shadow-card md:px-6 md:py-4">
                  <ul>
                    <li>
                      <a
                        class="py-1 md:p-0 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        href="/how-it-works"
                      >How it works</a>
                    </li>

                    <li>
                      <a
                        class="py-1 md:p-0 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        href="/refill-pass"
                      >Delivery</a>
                    </li>

                    <li>
                      <a
                        class="py-1 md:p-0 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        href="/mission"
                      >Our mission</a>
                    </li>

                    <li>
                      <a
                        class="py-1 md:p-0 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        href="/trade"
                      >Trade</a>
                    </li>

                    <li>
                      <a
                        class="py-1 md:p-0 block active:text-pink-100 md:hover:text-red md:active:text-red md:focus:text-red"
                        href="https://help.getdizzie.com/en"
                      >Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="enabled:hidden fixed md:static bottom-0 left-0 z-40 w-screen md:w-auto flex flex-col justify-end md:py-4 hidden md:block"
        data-target="toggle.toggleable"
      >
        <div
          class="p-8 pt-4 md:p-0 bg-white md:bg-transparent flex justify-between items-stretch rounded-t-4 md:rounded-none shadow-card md:shadow-none w-full"
        >
          <a
            href="/shop"
            class="md:font-bold py-1 md:p-2 md:hidden flex flex-col items-center justify-between text-xs md:text-base hover:text-red focus:text-red group-hover:text-red"
          >

            <svg width="21" height="20" viewBox="0 0 21 20">
              <path
                d="M 5.489589,7.7115901 C 4.8901822,8.6053482 3.8394801,9.1355648 2.7194879,9.0283487 v 9.9708173 h 9.5284291 v -7.446487 c 0,-0.274864 0.216376,-0.500974 0.491243,-0.500974 h 4.13544 c 0.274864,0 0.491242,0.226122 0.491242,0.500974 v 7.446487 h 0.874271 V 9.0283487 c -1.119892,0.1081867 -2.170569,-0.4220274 -2.770101,-1.3167586 -1.189082,1.7777851 -3.801091,1.7777851 -4.990274,0 -1.1890823,1.7777851 -3.8010915,1.7777851 -4.9902738,0 z M 1.7176904,8.7622673 C 0.34244579,8.1141056 -0.27647294,6.3850755 0.11631152,5.8841268 L 4.1739033,0.24561629 C 4.2625979,0.09844313 4.4195196,0 4.6056867,0 H 16.354289 c 0.156921,0 0.304107,0.07894863 0.40254,0.20662728 L 20.833883,5.8645999 C 21.246154,6.3850605 20.617507,8.1141156 19.24226,8.7622025 V 19.499026 C 19.24226,19.773891 19.016138,20 18.741286,20 H 2.2187389 C 1.9438746,20 1.7177653,19.773878 1.7177653,19.499026 Z M 13.240233,18.998068 h 3.133642 V 12.052604 H 13.240233 Z M 10.980961,1.0018923 v 4.6958478 h 3.762168 L 13.063777,1.0018923 Z M 9.9790141,5.6977401 V 1.0018923 H 7.8961486 L 6.2167967,5.6977401 Z M 14.114454,1.0018923 15.80451,5.6977401 h 3.68432 L 16.099934,1.0018923 Z M 5.1554153,5.6977401 6.8454714,1.0018923 H 4.861064 L 1.4721689,5.6977401 H 5.1564882 Z M 9.8807057,6.6899563 H 6.0893451 c 0.6091627,1.7972721 3.1832957,1.7972721 3.7913606,0 z m 4.9902743,0 h -3.791361 c 0.609163,1.7972721 3.183296,1.7972721 3.791361,0 z m 4.990274,0 h -3.791361 c 0.609163,1.7972721 3.183296,1.7972721 3.791361,0 z M 4.3699462,7.5057413 C 4.605814,7.2796195 4.7822177,7.0047677 4.8904068,6.6899563 H 1.0990462 c 0.4717306,1.3752446 2.2105416,1.8070281 3.270875,0.815785 z"
                fill="currentColor"
              />
              <path
                d="M 5.6465331,15.029328 H 8.7801757 V 12.052629 H 5.6465331 Z m 3.6246855,0.992216 h -4.125709 c -0.2748643,0 -0.5009736,-0.226122 -0.5009736,-0.500974 v -3.968764 c 0,-0.274865 0.2261218,-0.500974 0.5009736,-0.500974 h 4.125709 c 0.2748643,0 0.5009736,0.226122 0.5009736,0.500974 v 3.968764 c 0,0.274865 -0.2261218,0.500974 -0.5009736,0.500974 z"
                fill="currentColor"
              />
              <path
                d="m 14.556917,15.432792 c 0,-0.657893 1.001947,-0.657893 1.001947,0 0,0.756325 0.166668,1.659839 -0.500974,1.659839 -0.667648,0 -0.500973,-0.903514 -0.500973,-1.659839 z"
                fill="currentColor"
              />
            </svg>
            <span>Shop</span>

          </a>

          <div class="flex grow justify-evenly">
            <!--            <a -->
            <!--                href="/refills" -->
            <!--                class="md:font-bold py-1 md:p-2 flex flex-col md:flex-row items-center justify-between whitespace-nowrap text-xs md:text-base hover:text-red focus:text-red group-hover:text-red" -->
            <!--            > -->

            <!--              <svg width="16" height="18" viewBox="0 0 16 18" class="mr-2"> -->
            <!--                <path -->
            <!--                    d="M 4.5916857,3.9100209 C 5.5655852,3.1723256 6.7481774,2.7297085 8.0002226,2.7297085 11.269854,2.7297085 13.913073,5.5329504 13.913073,9 H 16 C 16,4.3524019 12.382659,0.51638667 8,0.51638667 c -1.7391062,0 -3.339084,0.59015623 -4.660916,1.62292953 L 1.947799,0 0,5.9752134 h 5.9825255 z" -->
            <!--                    fill="currentColor" -->
            <!--                /> -->
            <!--                <path -->
            <!--                    d="m 16,12.024433 h -5.982692 l 1.391324,2.065546 C 10.434705,14.827674 9.25208,15.270292 8,15.270292 4.730278,15.270292 2.0869856,12.46705 2.0869856,9 H 0 c 0,4.647598 3.6174416,8.483613 8.0002226,8.483613 1.7391546,0 3.3391774,-0.590156 4.6610454,-1.622929 L 14.052592,18 Z" -->
            <!--                    fill="currentColor" -->
            <!--                /> -->
            <!--              </svg> -->
            <!--              <span class="md:hidden xl:block">Your refills</span> -->
            <!--              <span class="hidden md:block xl:hidden">Refills</span> -->

            <!--            </a> -->

            <a
              href="/sign-in"
              class="md:font-bold py-1 md:p-2 flex flex-col items-center justify-between text-xs md:text-base hover:text-red focus:text-red group-hover:text-red"
            >

              <svg
                width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" style=""
                class="md:hidden"
              >
                <path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.45 4.73333C3.45 2.26612 5.46612 0.25 7.93333 0.25C10.4005 0.25 12.4167 2.26612 12.4167 4.73333C12.4167 7.20055 10.4005 9.21667 7.93333 9.21667C5.46622 9.21667 3.45 7.20146 3.45 4.73333ZM7.93333 1.75C6.29454 1.75 4.95 3.09455 4.95 4.73333C4.95 6.37282 6.29444 7.71667 7.93333 7.71667C9.57212 7.71667 10.9167 6.37212 10.9167 4.73333C10.9167 3.09455 9.57212 1.75 7.93333 1.75Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.25 14.3333C0.25 10.9772 3.02272 8.25 6.39712 8.25H9.46954C12.8439 8.25 15.6167 10.9772 15.6167 14.3333V16.5897C15.6167 17.2383 15.086 17.75 14.4515 17.75H1.41516C0.805286 17.75 0.25 17.2822 0.25 16.5897V14.3333ZM6.39712 9.75C3.83428 9.75 1.75 11.8224 1.75 14.3333V16.25H14.1167V14.3333C14.1167 11.8224 12.0324 9.75 9.46954 9.75H6.39712Z"
                  fill="currentColor"
                />
              </svg>
              <span>Sign in</span>

            </a>

          </div>
          <div class="flex grow justify-evenly">
            <!--            <a -->
            <!--                href="/refills" -->
            <!--                class="md:font-bold py-1 md:p-2 flex flex-col md:flex-row items-center justify-between whitespace-nowrap text-xs md:text-base hover:text-red focus:text-red group-hover:text-red" -->
            <!--            > -->

            <!--              <svg width="16" height="18" viewBox="0 0 16 18" class="mr-2"> -->
            <!--                <path -->
            <!--                    d="M 4.5916857,3.9100209 C 5.5655852,3.1723256 6.7481774,2.7297085 8.0002226,2.7297085 11.269854,2.7297085 13.913073,5.5329504 13.913073,9 H 16 C 16,4.3524019 12.382659,0.51638667 8,0.51638667 c -1.7391062,0 -3.339084,0.59015623 -4.660916,1.62292953 L 1.947799,0 0,5.9752134 h 5.9825255 z" -->
            <!--                    fill="currentColor" -->
            <!--                /> -->
            <!--                <path -->
            <!--                    d="m 16,12.024433 h -5.982692 l 1.391324,2.065546 C 10.434705,14.827674 9.25208,15.270292 8,15.270292 4.730278,15.270292 2.0869856,12.46705 2.0869856,9 H 0 c 0,4.647598 3.6174416,8.483613 8.0002226,8.483613 1.7391546,0 3.3391774,-0.590156 4.6610454,-1.622929 L 14.052592,18 Z" -->
            <!--                    fill="currentColor" -->
            <!--                /> -->
            <!--              </svg> -->
            <!--              <span class="md:hidden xl:block">Your refills</span> -->
            <!--              <span class="hidden md:block xl:hidden">Refills</span> -->

            <!--            </a> -->
            <a
                href="/create-event"
                class="md:font-bold py-1 md:p-2 flex flex-col justify-between text-xs md:text-base hover:text-red focus:text-red group-hover:text-red"
            >
              <div class="rounded-full bg-eventPurple text-white font-semibold border-2 border-white py-4 px-6 shadow">
                Create
              </div>
            </a>

          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
