<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <header class="bg-gradient-to-l text-white px-2 sticky-header flex items-center " style="height: 5vh">

        <!-- Desktop View Social Media and Category Section -->
        <div class="flex-container ">
            <div
                class="flex justify-center items-center space-x-4 left-div sm:text-md md:text-lg lg:text-xl xl:text-xxl xxl:text-xxxxl">
                <a href="https://www.linkedin.com" target="_blank">
                    <i class="fa fa-linkedin "></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                    <i class="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank">
                    <i class="fa fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com" target="_blank">
                    <i class="fa fa-tiktok"></i>
                </a>
            </div>
            <div
                class="navbar center-div sm:text-sm md:text-md lg:text-lg xl:text-xl xxl:text-2xl  text-white  flex items-center">
                <div class="nav-link dropdown">
                    <span class="dropdown-text">
                        <NuxtLink to="/" class="text-white relative flex items-center group">
                            Home
                            <span class="material-icons ml-1 transition-transform transform group-hover:-rotate-180">
                                expand_more
                            </span>
                        </NuxtLink>
                    </span>
                    <div class="dropdown-content ">
                        <div class="dropdown-row">
                            <NuxtLink to="/business">Business</NuxtLink>
                            <!-- <NuxtLink to="/business">Subpage 2</NuxtLink>
                            <NuxtLink to="/business">Subpage 3</NuxtLink> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="nav-link dropdown">
                    <span class="dropdown-text">
                        <NuxtLink to="/" class="text-white relative flex items-center group">
                            Our Businesses
                            <span class="material-icons ml-1 transition-transform transform group-hover:-rotate-180">
                                expand_more
                            </span>
                        </NuxtLink>
                    </span>
                    <div class="dropdown-content">
                        <div class="dropdown-row">
                            <NuxtLink to="/business">Subpage 1</NuxtLink>
                            <NuxtLink to="/business">Subpage 2</NuxtLink>
                            <NuxtLink to="/business">Subpage 3</NuxtLink>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="nav-link dropdown">
                    <span class="dropdown-text">
                        <NuxtLink to="/" class="text-white relative flex items-center group">
                            Investor Relations
                            <span class="material-icons ml-1 transition-transform transform group-hover:-rotate-180">
                                expand_more
                            </span>
                        </NuxtLink>
                    </span>
                    <div class="dropdown-content">
                        <div class="dropdown-row">
                            <NuxtLink to="/business">Subpage 1</NuxtLink>
                            <NuxtLink to="/business">Subpage 2</NuxtLink>
                            <NuxtLink to="/business">Subpage 3</NuxtLink>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="nav-link dropdown">
                    <span class="dropdown-text">
                        <NuxtLink to="/" class="text-white relative flex items-center group">
                            Sustainability
                            <span class="material-icons ml-1 transition-transform transform group-hover:-rotate-180">
                                expand_more
                            </span>
                        </NuxtLink>
                    </span>
                    <div class="dropdown-content">
                        <div class="dropdown-row">
                            <NuxtLink to="/business">Subpage 1</NuxtLink>
                            <NuxtLink to="/business">Subpage 2</NuxtLink>
                            <NuxtLink to="/business">Subpage 3</NuxtLink>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="nav-link dropdown">
                    <span class="dropdown-text">
                        <NuxtLink to="/" class="text-white relative flex items-center group">
                            Media
                            <span class="material-icons ml-1 transition-transform transform group-hover:-rotate-180">
                                expand_more
                            </span>
                        </NuxtLink>
                    </span>
                    <div class="dropdown-content">
                        <div class="dropdown-row">
                            <NuxtLink to="/business">Subpage 1</NuxtLink>
                            <NuxtLink to="/business">Subpage 2</NuxtLink>
                            <NuxtLink to="/business">Subpage 3</NuxtLink>
                        </div>
                    </div>
                </div> -->
                <div class="nav-link">
                    <NuxtLink to="/" class="text-white relative flex items-center group">
                        Career

                    </NuxtLink>
                </div>
                <div class="nav-link">
                    <NuxtLink to="/" class="text-white relative flex items-center group">
                        Contact Us

                    </NuxtLink>
                </div>
            </div>
            <div class="flex justify-center items-center space-x-8 right-div">
                <i class="fas fa-search "></i>
                <NuxtLink to="/">Logo</NuxtLink>
            </div>
        </div>
    </header>
    <slot></slot>
</template>
<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);




const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
    console.log('showDropdown', showDropdown.value)
};

</script>
<style scoped>
.bg-gradient-to-l {
    background: linear-gradient(to left, #ff9800, #c2410c);
}


.navbar {
    display: flex;
    justify-content: center;
}

.nav-link {
    padding-right: 20px;
    padding-left: 20px;
    position: relative;
    text-shadow: none;
    height: 100%;
    display: flex;
    align-items: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    right: 10%;
    padding: 10px;
    width: 250px;
    backdrop-filter: blur(8px);
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
    font-size: 15px;
    /* Adjust the size as needed */

}

.nav-link:hover .dropdown-text .arrow {
    transform: rotateX(180deg);

}


.nav-link:hover {
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

.flex-container {
    display: flex;
    width: 100%;
}

.left-div {
    flex: 15%;
}

.center-div {
    flex: 70%;
}

.right-div {
    flex: 15%;
}

.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    /* Adjust the z-index based on your needs */
}
</style>
