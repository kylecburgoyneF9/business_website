<template>
	<div class="social-links">
		<a href="https://github.com/kylecburgoyneF9" target="_blank">
			<SvgGithub />
		</a>
		<a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank">
			<SvgYoutube />
		</a>
		<a href="https://www.instagram.com/kylecburgoyne/" target="_blank">
			<SvgInstagram />
		</a>
		<a href="https://www.linkedin.com/in/kyle-burgoyne-4824927b/" target="_blank">
			<SvgLinkedin />
		</a>
	</div>
</template>

<script setup>
import SvgGithub from "./svgs/Github.vue";
import SvgYoutube from "./svgs/Youtube.vue";
import SvgInstagram from "./svgs/Instagram.vue";
import SvgLinkedin from "./svgs/Linkedin.vue";
</script>
<style scoped>
.social-links a {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: var(--main-color);
    border: .2rem solid var(--main-color);
    border-radius: 50%;
    font-size: 20px;
    color: var(--main-color);
    z-index: 1;
    overflow: hidden;
    transition: .5s;
    margin-right: 1rem;
}

.social-links a:hover {
    color: var(--bg-color);
    box-shadow: 0 0 1rem var(--main-color);
    scale: 1.15;
}

.social-links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--main-color);
    z-index: -1;
    transition: .5s;
}

.social-links a:hover::before {
    width: 100%;
}</style>