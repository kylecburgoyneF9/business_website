<template>
    <video ref="videoRef" class="background-video" playsinline loop muted>
        <source :src="imageUrl" type="video/mp4">
    </video>
</template>

<script setup>
import { toRefs, ref, onMounted, onUnmounted } from 'vue'

// Get file url
const props = defineProps({
    fileName: String,
})
const { fileName } = toRefs(props)
const imageUrl = new URL(`../assets/videos/${fileName.value}`, import.meta.url).href


// Intersection Observer for play/pause
const videoRef = ref(null)
const obs = ref()

const initObserver = () => {
    const options = { threshold: 0.5 }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play()
            }
            else {
                entry.target.pause()
            }
        })
    }, options)

    observer.observe(videoRef.value)
    obs.value = observer
}

onMounted(() => {
    initObserver()
})

onUnmounted(() => {
    if (obs.value) obs.value.disconnect();
})
</script>

<style scoped>
.background-video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}
</style>