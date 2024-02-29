
<template>
    <section class="consulting-header">
        <div class="consulting-header-content">
            <h1>Consulting Services</h1>
            <h3>Fractional CFO & Technology Specialist</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at cupiditate laborum quae facere
                debitis ipsam quasi, natus quibusdam officiis fugit repellat veniam totam asperiores doloremque nobis.
            </p>
            <div class="consulting-header-content-btns">
                <router-link to="#consulting-fractional-cfo" scroll="{ behavior: 'smooth' }" class="btn">Fractional CFO
                    Services</router-link>
                <router-link to="#consulting-automation-solutions" scroll="{ behavior: 'smooth' }" class="btn">Automations
                    Solution</router-link>
                <router-link to="#consulting-integration-services" scroll="{ behavior: 'smooth' }" class="btn">Integrations
                    Solutions</router-link>
                <router-link to="#consulting-web-development" scroll="{ behavior: 'smooth' }" class="btn">Web Development
                    Services</router-link>
            </div>
        </div>
    </section>

    <!-- 'about' section design and elements -->
    <section class="consulting-about" id="my-career">
        <h2 class="heading">My <span>Journey</span></h2>

        <div class="consulting-about-img">
            <img src="../assets/Home/Self.jpeg" alt="">
            <span class="circle-spin"></span>
        </div>

        <div class="consulting-about-content">
            <h3>Life Coach & Fractional CFO</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
                eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
                molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
                odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
            </p>
            <div class="btn-box btns">
                <a href="#" class="btn">Read More</a>
            </div>
        </div>
    </section>


    <section class="consulting-services-section">
        <div class="border-div" style="margin-bottom: 6rem;">
            <div class="consulting-services">
                <div class="consulting-services-img" id="consulting-fractional-cfo">
                    <img src="../assets/Home/Finance.jpg" alt="">
                </div>
                <div class="consulting-services-content">
                    <h3>Fractional CFO Services</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa necessitatibus, minima quod nemo
                        deserunt nam in praesentium voluptatibus amet distinctio enim dolores excepturi accusamus ad
                        expedita numquam sunt est a tenetur eligendi. Voluptatibus, architecto quia.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-content" id="consulting-automation-solutions">
                    <h3>Automation Solutions</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa necessitatibus, minima quod nemo
                        deserunt nam in praesentium voluptatibus amet distinctio enim dolores excepturi accusamus ad
                        expedita numquam sunt est a tenetur eligendi. Voluptatibus, architecto quia.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
                <div class="consulting-services-img">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-img">
                    <img src="../assets/Home/Computer4.jpg" alt="">
                </div>
                <div class="consulting-services-content" id="consulting-integration-services">
                    <h3>Integration Solutions</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa necessitatibus, minima quod nemo
                        deserunt nam in praesentium voluptatibus amet distinctio enim dolores excepturi accusamus ad
                        expedita numquam sunt est a tenetur eligendi. Voluptatibus, architecto quia.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-content" id="consulting-web-development">
                    <h3>Web & Application Development</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa necessitatibus, minima quod nemo
                        deserunt nam in praesentium voluptatibus amet distinctio enim dolores excepturi accusamus ad
                        expedita numquam sunt est a tenetur eligendi. Voluptatibus, architecto quia.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
                <div class="consulting-services-img">
                    <img src="../assets/Home/Computer2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- 'contact' section design and elements -->
    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>
        <form action="#">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" placeholder="Full Name" required>
                </div>
                <div class="input-field">
                    <input type="email" placeholder="Email Address" required>
                </div>
            </div>
            <div class="input-box">
                <div class="input-field">
                    <input type="tel" placeholder="Mobile Number" required>
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Email Subject" required>
                </div>
            </div>
            <div class="textarea-field">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
            </div>
            <div class="btn-box btns">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </section>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped></style>