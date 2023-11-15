<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="bg-gradient-to-l text-white p-4 flex items-center justify between" style="height: 10vh">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Mobile View Dropdown Button -->
            <button class="text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl" v-if="isMobile"
                @click="toggleDropdown">
                <i class="fas fa-bars" style="font-size:24px"></i>
            </button>
            <!-- Mobile View Dropdown Menu -->
            <div class="mobile-menu" v-if="showDropdown" >
                <div class="flex items-center space-x-4">
                    <a href="https://www.linkedin.com" target="_blank">
                        <i class="fa fa-linkedin" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <i class="fa fa-facebook" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <i class="fa fa-instagram" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <i class="fa fa-youtube" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank">
                        <i class="fa fa-tiktok" style="font-size:24px"></i>
                    </a>
                </div>
                <div class="flex space-x-4 flex-grow justify-center">
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/about">About Us
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/business">Our
                        Businesses
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/investor">Investor
                        Relations
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/sustainability">
                        Sustainability
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/media">Media
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/career">Career
                    </NuxtLink>
                    <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/contact">Contact
                        Us
                    </NuxtLink>
                </div>
            </div>
            <!-- Desktop View Social Media and Category Section -->
            <div class="flex-container">
                <div class="flex items-center space-x-4 left-div" v-if="isDesktop">
                    <a href="https://www.linkedin.com" target="_blank">
                        <i class="fa fa-linkedin" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <i class="fa fa-facebook" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <i class="fa fa-instagram" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.youtube.com" target="_blank">
                        <i class="fa fa-youtube" style="font-size:24px"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank">
                        <i class="fa fa-tiktok" style="font-size:24px"></i>
                    </a>
                </div>
                <div class="navbar center-div">
                    <div class="nav-link dropdown" v-if="isDesktop">
                        <span class="dropdown-text">
                            <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/about">
                                About Us
                            </NuxtLink>
                            <i class="fas fa-chevron-down arrow"></i>
                        </span>
                        <div class="dropdown-content ">
                            <div class="dropdown-row">
                                <NuxtLink to="/business">Subpage 1</NuxtLink>
                                <NuxtLink to="/business">Subpage 2</NuxtLink>
                                <NuxtLink to="/business">Subpage 3</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="nav-link dropdown" v-if="isDesktop">
                        <span class="dropdown-text">
                            <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/business">
                                Our Businesses
                            </NuxtLink>
                            <i class="fas fa-chevron-down arrow"></i>
                        </span>
                        <div class="dropdown-content">
                            <div class="dropdown-row">
                                <NuxtLink to="/business">Subpage 1</NuxtLink>
                                <NuxtLink to="/business">Subpage 2</NuxtLink>
                                <NuxtLink to="/business">Subpage 3</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="nav-link dropdown" v-if="isDesktop">
                        <span class="dropdown-text">
                            <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/investor">
                                Investor Relations
                            </NuxtLink>
                            <i class="fas fa-chevron-down arrow"></i>
                        </span>
                        <div class="dropdown-content">
                            <div class="dropdown-row">
                                <NuxtLink to="/business">Subpage 1</NuxtLink>
                                <NuxtLink to="/business">Subpage 2</NuxtLink>
                                <NuxtLink to="/business">Subpage 3</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="nav-link dropdown" v-if="isDesktop">
                        <span class="dropdown-text">
                            <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg"
                                to="/sustainability">
                                Sustainability
                            </NuxtLink>
                            <i class="fas fa-chevron-down arrow"></i>
                        </span>
                        <div class="dropdown-content">
                            <div class="dropdown-row">
                                <NuxtLink to="/business">Subpage 1</NuxtLink>
                                <NuxtLink to="/business">Subpage 2</NuxtLink>
                                <NuxtLink to="/business">Subpage 3</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="nav-link dropdown" v-if="isDesktop">
                        <span class="dropdown-text">
                            <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/media">
                                Media
                            </NuxtLink>
                            <i class="fas fa-chevron-down arrow"></i>
                        </span>
                        <div class="dropdown-content">
                            <div class="dropdown-row">
                                <NuxtLink to="/business">Subpage 1</NuxtLink>
                                <NuxtLink to="/business">Subpage 2</NuxtLink>
                                <NuxtLink to="/business">Subpage 3</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="nav-link" v-if="isDesktop">
                        <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/career">Career
                        </NuxtLink>
                    </div>
                    <div class="nav-link" v-if="isDesktop">
                        <NuxtLink class="text-white text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg" to="/contact">
                            Contact
                            Us
                        </NuxtLink>
                    </div>
                </div>
                <div class="flex items-center space-x-8 right-div">
                    <i class="fas fa-search text-white text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl"></i>
                    <NuxtLink class="text-white text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl" to="/">Logo</NuxtLink>
                </div>
            </div>
        </div>
    </header>
    <slot></slot>
</template>
<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';

const isMobile = ref(false);
const showDropdown = ref(false);

onBeforeMount(() => {
    // Check if the viewport width is less than a certain breakpoint (e.g., 768px)
    const viewportWidth = document.documentElement.clientWidth;
    isMobile.value = viewportWidth < 1280;
});

const isDesktop = ref(true);

onMounted(() => {
    // Update isMobile and isDesktop when the window is resized
    window.addEventListener('resize', () => {
        const viewportWidth = document.documentElement.clientWidth;
        isMobile.value = viewportWidth < 1280;
        isDesktop.value = viewportWidth >= 1280;
    });
});

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
    console.log('showDropdown',showDropdown.value)
};

</script>
<style scoped>
.bg-gradient-to-l {
    background: linear-gradient(to left, #ff9800, #c2410c);
}

.mobile-menu {
    display: none;
    flex-direction: column;
    /* top:100%; Adjust the 10px to control the vertical distance */
    right: 100%; /* Adjust the 10px to control the horizontal distance */
    background-color: rgba(255, 255, 255, 0.600);
    backdrop-filter: blur(8px);
    border: 1px solid #ccc;
    border-radius: 5px;
    /* Rounded corners for the dropdown */
    color: #c2410c;
    padding: 10px;
    z-index: 1;
    /* Set a higher z-index for the mobile menu */
}


@media (max-width: 767px) {
    .mobile-menu {
        display: flex;
    }
}

.navbar {
    display: flex;
    justify-content: center;
}

.nav-link {
    padding-right: 20px;
    padding-left: 20px;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    right: 10%;
    padding: 10px;
    width: 250px;
    backdrop-filter: blur(8px);
    /* Add an acrylic-like blur effect */
    background-color: rgba(255, 255, 255, 0.600);
    /* Semi-transparent white background */
    border: 1px solid #ccc;
    border-radius: 5px;
    /* Rounded corners for the dropdown */
    color: #c2410c;
    z-index: 2;
    /* Set a higher z-index for the dropdown content */
}

.dropdown-row {
    display: flex;
    flex-direction: column;
    /* Display links in a row */
    align-items: center;
    /* Vertically center the links */
    gap: 10px;
    /* Adjust the gap between links */
}

/* Apply hover effect to the entire .nav-link */
.nav-link:hover .dropdown-content {
    display: block;
}

/* Add arrow animation on hover */
.dropdown-text .arrow {
    transition: transform 0.35s;
}

.nav-link:hover .dropdown-text .arrow {
    transform: rotateX(180deg);
    /* Flip the arrow on hover */
    /* font-size: 1.2em; */
}

/* Add text animation on hover */
.nav-link .dropdown-text a {
    transition: font-size 0.35s;
    text-shadow: none;
    /* Initially, no box-shadow */
}

.nav-link:hover .dropdown-text a {
    font-size: 1.2em;
    /* Increase text size on hover */
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
    /* Add shadow on hover */
}

.flex-container {
    display: flex;
    width: 100%;
}

.left-div {
    flex: 5%;
}

.center-div {
    flex: 90%;
}

.right-div {
    flex: 5%;
}</style>