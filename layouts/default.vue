<script lang="ts" setup>

</script>

<template>
    <aside class="w-2/12 fixed min-h-screen shadow shadow-white border-l border-l-gray-600 p-4 z-50">
        <nav class="flex flex-col">
            <div class="logo">
                <img class="w-32 h-20 invert p-3" src="@/assets/images/Apple.png" alt="apple" />
            </div>
            <ul class="text-sm list-none border-b-[0.1px] border-gray-400 ">
                <div>
                    <h6 class="text-gray-500 text-xs px-2">News Feed</h6>
                    <li class="text-white flex items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <Icon name="mdi:compass"  size="22" class="mr-3" color="white"  />
                        Browse
                    </li>
                    <li class="text-white flex items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <Icon name="fluent:data-trending-28-filled" size="22" class="mr-3" color="white"  />
                        Trending
                    </li>
                    <li class="text-white flex items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <Icon name="iconamoon:profile-circle-light" size="22" class="mr-3" color="white"  />
                        Following
                    </li>
                    <li class="text-white flex items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <Icon name="material-symbols:auto-videocam"  size="22" class="mr-3" color="white"  />
                        Your Video
                    </li>
                </div>
            </ul>
            <!-- TODO: MAKE THE list COMPONENT -->
            <ul class="text-sm list-none border-b-[0.1px] border-gray-400 overflow-y-scroll">
                <div>
                    <h6 class="text-gray-500 text-xs px-2 py-3">Following</h6>
                    <!-- TODO: MAKE THE LIST_ITEM COMPONENT -->
                    <li class="text-white flex justify-between items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <div>
                            <Icon name="material-symbols:account-circle-full"  size="22" class="mr-3" color="white"  />
                            Amirreza
                        </div>
                        <Icon name="material-symbols:wifi" size="12" class="mr-3" color="white"  />
                    </li>
                    <li class="text-white flex justify-between items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <div>
                            <Icon name="material-symbols:account-circle-full"  size="22" class="mr-3" color="white"  />
                            Payman
                        </div>
                        <Icon name="material-symbols:wifi" size="12" class="mr-3" color="white"  />
                    </li>
                    <li class="text-white flex justify-between items-center font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <div>
                            <Icon name="material-symbols:account-circle-full"  size="22" class="mr-3" color="white"  />
                            Jahan
                        </div>
                        <Icon name="ic:baseline-mode-standby"  size="12" class="mr-3" color="white"  />
                    </li>
                    <li class="text-white flex justify-between items-center  font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <div>
                            <Icon name="material-symbols:account-circle-full"  size="22" class="mr-3" color="white"  />
                            Kian
                        </div>
                        <Icon name="ic:baseline-mode-standby"  size="12" class="mr-3" color="white"  />
                    </li>
                    <li class="text-white flex justify-between items-center  font-semibold w-full my-3 p-2 hover:bg-red-500 hover:rounded-full hover:cursor-pointer">
                        <div>
                            <Icon name="material-symbols:account-circle-full"  size="22" class="mr-3" color="white"  />
                            Kian
                        </div>
                        <Icon name="ic:baseline-mode-standby"  size="12" class="mr-3" color="white"  />
                    </li>
                </div>
            </ul>
            <div class="w-full text-center my-4">
                <span class="text-gray-400 text-xs font-light">Design: Amirreza Jolani Mameghani</span>
            </div>
        </nav>
    </aside>
    <slot />
</template>

