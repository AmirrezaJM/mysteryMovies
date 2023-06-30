<script lang="ts" setup>
// ** VARIABLES
// const navbarDropdown = ref(false);
const colorMode = useColorMode();
// ** Computed 
const changeMode = computed(() => {
    return colorMode.preference === 'light' ? 'dark' : 'light';
})

// ** FUNCTION 
// const isOpen = () => {
//     !navbarDropdown.value;
// }
</script>

<template>
    <div class="relative">
        <div class="w-10/12 ms-[16.65%] min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 overflow-y-scroll">
            <main class="mx-4 contents">
                <header class="mx-3 my-4">
                    <nav class="flex items-center justify-between">
                        <div>
                            <button class="mx-auto w-8 h-8">
                                <Icon @click="changeMode" name="material-symbols:dark-mode-outline" size="18" color="white" />
                            </button>
                        </div>
                        <!--  <div class="mx-2 flex items-center cursor-pointer">
                            <Icon  name="material-symbols:dark-mode-outline" size="18" color="white" />
                            <div class="mx-3 relative">
                                <Icon @click="isOpen" id="dropdownNavbar" name="tabler:language" size="18" color="white" />
                                <div  class="z-10 top-[30px] absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-400"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Farsi</a>
                                        </li>
                                    </ul>
                                </div>
                            </div> 

                        </div> -->
                        <div class="flex items-center justify-center">
                            <div class="relative">
                                <Icon class="absolute top-1/3 left-3" name="mdi:magnify" size="18" color="gray" />
                                <input type="text" placeholder="search"
                                    class="border shadow bg-gray-900 focus:border-green-100 outline-none focus:ring-1 focus:ring-offset-1 focus:ring-green-700 text-white rounded-full pl-[30px] px-3 py-2" />
                            </div>
                        </div>
                    </nav>
                </header>
                <!-- TODO: MAKE COMPONENT -->
                <section class="">
                    <div class="w-full h-40">
                        <div></div>
                    </div>
                </section>
                <div class="mx-8">
                    <!-- TODO: MAKE LIST OF MOVIES -->
                    <section class="flex justify-between">
                        <div>
                            <h1 class="text-3xl font-semibold text-white">Continue Watching</h1>
                        </div>
                        <div>
                            <select
                                class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="pets" id="pet-select">
                                <option value="">--Please choose an option--</option>
                                <option value="Newest">Newest</option>
                                <option value="Popular">Popular</option>
                            </select>
                        </div>
                    </section>
                    <section class="w-full flex justify-between">
                        <!-- TODO: MOVIE LIST COMPONENT -->
                        <section class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <div class="shadow rounded-xl w-full bg-gray-700 dark:bg-gray-100">
                                <img src="@/assets/images/avatar.png" class="rounded-tr-xl rounded-tl-xl w-full h-48"
                                    alt="image" />
                                <div class="p-4">
                                    <h4 class="text-white font-semibold">Avatar</h4>
                                    <p class="text-white">The way of water</p>
                                </div>
                            </div>
                            <div class="shadow rounded-xl w-full bg-gray-700">
                                <img src="@/assets/images/avatar.png" class="rounded-tr-xl rounded-tl-xl w-full h-48"
                                    alt="image" />
                                <div class="p-4">
                                    <h4 class="text-white font-semibold">Avatar</h4>
                                    <p class="text-white">The way of water</p>
                                </div>
                            </div>
                            <div class="shadow rounded-xl w-full bg-gray-700">
                                <img src="@/assets/images/avatar.png" class="rounded-tr-xl rounded-tl-xl w-full h-48"
                                    alt="image" />
                                <div class="p-4">
                                    <h4 class="text-white font-semibold">Avatar</h4>
                                    <p class="text-white">The way of water</p>
                                </div>
                            </div>
                            <div
                                class="shadow rounded-xl w-full bg-gray-700 transition-transform duration-200 hover:cursor-pointer hover:scale-95">
                                <img src="@/assets/images/avatar.png" class="rounded-tr-xl rounded-tl-xl w-full h-48"
                                    alt="image" />
                                <div class="p-4">
                                    <div class="mb-2">
                                        <h4 class="text-white font-semibold">Avatar</h4>
                                        <p class="text-white tracking-wider">The way of water</p>
                                    </div>
                                    <div class="flex items-center">
                                        <Icon name="tabler:language" size="32" color="white" />
                                        <div class="px-2 line-clamp-none leading-3">
                                            <h5 class="text-sm text-white">Amirreza</h5>
                                            <span class="text-xs text-gray-400">Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </main>
        </div>
    </div>
</template>
