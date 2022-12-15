<script setup>
import {ref} from 'vue'

definePageMeta({
  layout: 'dashboard',
})
// import Sidebar from '../../partials/Sidebar.vue'
// import Header from '../../partials/Header.vue'
// import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
// import AccountPanel from '../../partials/settings/AccountPanel.vue'

// export default {
//   name: 'Account',
//   components: {
//     // Sidebar,
//     // Header,
//     // SettingsSidebar,
//     // AccountPanel,
//   },
//   setup() {
//     const sidebarOpen = ref(false)
//
//     return {
//       sidebarOpen,
//     }
//   },
// }
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <!--    <Sidebar :sidebar-open="sidebarOpen" @close-sidebar="sidebarOpen = false" /> -->

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <!--      <Header :sidebar-open="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" /> -->

      <main>
        <div class="py-8 w-full max-w-9xl mx-auto p-6 md:p-0">
          <!-- Page header -->
          <div class="">

            <div>

              <div class="mb-4">
                <!-- Title -->
                <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">
                  Account Settings ✨
                </h1>
              </div>


              <!-- Content -->
              <div class="bg-white mb-8">
                <div class="flex flex-col md:flex-row md:-mr-px gap-16">
                  <!--              <SettingsSidebar /> -->
                  <!--              <AccountPanel /> -->
                  <div class="flex flex-1 max-w-3xl flex-col md:-mr-px">
                    <div class="border-b border-slate-200">

                    </div>

                    <div class="py-6 space-y-12">
                      <!--                <h2 class="text-2xl text-slate-800 font-bold mb-5">My Account</h2>-->
                      <!-- Picture -->
                      <section>
                        <div class="flex items-center">
                          <div class="mr-4">
                            <img class="w-20 h-20 rounded-full bg-blue-300" src="../../assets/images/user-avatar-80.png"
                                 width="80"
                                 height="80" alt="User upload"/>
                          </div>
                          <button class="px-2 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">
                            Change
                          </button>
                        </div>
                      </section>
                      <!-- Business Profile -->
                      <section>
                        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Profile Information</h3>
                        <div class="text-sm">Here is where you find and update the basic user information</div>
                        <div class="grid col-span-2 gap-2 mt-5 w-full md:w-1/2">
                          <div class="col-span-2">
                            <label class="block text-sm font-medium mb-1" for="username">Username</label>
                            <input id="name" class="form-input rounded w-full" type="text"/>
                          </div>
                          <div class="col-span-1">
                            <label class="block text-sm font-medium mb-1" for="business-id">First Name</label>
                            <input id="business-id" class="form-input rounded w-full" type="text"/>
                          </div>
                          <div class="col-span-1">
                            <label class="block text-sm font-medium mb-1" for="location">Last Name</label>
                            <input id="location" class="form-input rounded w-full" type="text"/>
                          </div>
                        </div>
                      </section>
                      <!-- Email -->
                      <section>
                        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h3>
                        <div class="text-sm">Update your email to ensure account recovery works.</div>
                        <div class="flex flex-wrap mt-5">
                          <div class="mr-2">
                            <!--                      <label class="sr-only" for="email"></label>-->
                            <input id="email" class="form-input rounded w-64" type="email"/>
                          </div>
                          <button
                              class="px-2 py-1 rounded border-slate-200 border-2 shadow-sm hover:border-slate-300 shadow-sm text-indigo-500 font-semibold">
                            Change
                          </button>
                        </div>
                      </section>
                      <!-- Password -->
                      <section>
                        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Password</h3>
                        <div class="text-sm">You can set a permanent password if you don't want to use temporary login
                          codes.
                        </div>
                        <div class="mt-5">
                          <button
                              class="px-2 py-2 rounded border-slate-200 border-2 shadow-sm text-indigo-500 font-semibold">
                            Set New Password
                          </button>
                        </div>
                      </section>
                    </div>
                    <!-- Panel footer -->
                    <footer>
                      <div class="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div class="flex self-end">
                          <button
                              class="px-2 py-2 rounded border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-semibold">
                            Cancel
                          </button>
                          <button
                              class="px-2 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white ml-3 font-semibold">
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </footer>
                  </div>

                  <div style="height: -webkit-fill-available" class=" sm:items-center bg-gray-100 flex flex-col gap-2 rounded-lg p-4">
                    <button class="px-2 py-2 w-64 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">
                      My Account
                    </button>
                    <button
                        class="px-2 py-1 w-64 bg-white rounded border-slate-200 border-2 shadow-sm hover:border-slate-300 shadow-sm text-indigo-500 font-semibold">
                      My Notifications
                    </button>
                    <button
                        class="px-2 py-1 w-64 bg-white rounded border-slate-200 border-2 shadow-sm hover:border-slate-300 shadow-sm text-indigo-500 font-semibold">
                      Billing & Invoices
                    </button>
                  </div>


                </div>
              </div>
            </div>
<!--            <div>-->
<!--              <div class="bg-gray-400 rounded-lg w-full">Test</div>-->
<!--            </div>-->
          </div>

        </div>
      </main>
    </div>
  </div>
</template>
