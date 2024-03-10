
<template>
    <section class="interior-hero">
        <BackgroundVideo fileName="0226.mp4" />
        <div class="interior-hero-content">
            <h1>Consulting Services</h1>
            <h3>Fractional CFO & Technology Specialist</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at cupiditate laborum quae facere
                debitis ipsam quasi, natus quibusdam officiis fugit repellat veniam totam asperiores doloremque nobis.
            </p>
            <div class="interior-hero-content-btns">
                <router-link to="#consulting-fractional-cfo" class="btn" scroll="{ behavior: 'smooth' }">Fractional CFO
                    Services</router-link>
                <router-link to="#consulting-automation-solutions"  class="btn" scroll="{ behavior: 'smooth' }">Automations
                    Solution</router-link>
                <router-link to="#consulting-integration-services"  class="btn" scroll="{ behavior: 'smooth' }">Integrations
                    Solutions</router-link>
                <router-link to="#consulting-web-development"  class="btn" scroll="{ behavior: 'smooth' }">Web Development
                    Services</router-link>
            </div>
        </div>

        <SocialLinks />
    </section>

    <!-- 'about' section design and elements -->
    <section class="consulting-about" id="my-career">
        <h2 class="heading">My <span>Career</span></h2>
        <div class="consulting-about-content">
            <p>With a Bachelor of Science in Business Administration and a Certified Public Accountant (CPA) background,
                I've seamlessly transitioned between various roles, showcasing my prowess as a startup and small
                business enthusiast.</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <a href="/Kyle_Burgoyne_CV_2024.pdf" class="universal-btn"
            download>Download CV</a>
    </section>


    <section class="services-split-text-image-section">
        <div class="border-div" style="margin-bottom: 6rem;">
            <div class="services-split-text-image">
                <div class="services-split-text-image-img" id="consulting-fractional-cfo">
                    <img src="../assets/Home/Finance.jpg" alt="">
                </div>
                <div class="services-split-text-image-content">
                    <h3>Fractional CFO Services</h3>
                    <p>Having accumulated 9 years of experience in the business world, I've crafted a diverse range of
                        models, including but not limited to solar tax-equity, solar loan origination, corporate, debt and
                        equity due diligence, private placement, and accounting.</p>

                    <p>Whether you're seeking to enhance your business tools or need support in presenting your business's
                        potential, we can collaborate to achieve your objectives.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-img img-responsive1">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
                <div class="services-split-text-image-content" id="consulting-automation-solutions">
                    <h3>Automation Solutions</h3>
                    <p>Leveraging a powerful combination of Excel, VBA, and Microsoft Power Automation, I
                        specialize in automating a wide array of standard tasks in accounting, finance, marketing, and
                        administration within office environments.</p>

                    <p>Curious if your business is a suitable candidate for streamlined automation? Let's have a
                        consultation to evaluate the potential benefits, such as saving personnel time, enhancing data
                        accuracy, and boosting overall convenience for your business. This way, you'll have a clear
                        understanding of the value this automation can deliver.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
                <div class="services-split-text-image-img img-responsive2">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-img">
                    <img src="../assets/Home/Computer4.jpg" alt="">
                </div>
                <div class="services-split-text-image-content" id="consulting-integration-solutions">
                    <h3>Integration Solutions</h3>
                    <p>Using a suite of high and low code expertise, plus today's incredible array of database, AI, and
                        cloud services, I can help you get the most out of your existing technology stack.</p>
                    <p>If you're spending too much time manually manipulating data on a regular basis or are at the point of
                        lossing visibility into your business due to a lack of communication between your core technology
                        systems, please reach out to me. Almost every company I have worked for (small and large) has
                        operated with such friction/barriers. These frictions are costing you in hard dollars, turnover,
                        time,and opportunity.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-img img-responsive1">
                    <img src="../assets/Home/Computer2.jpg" alt="">
                </div>
                <div class="services-split-text-image-content" id="consulting-web-development">
                    <h3>Web & Application Development</h3>
                    <p>My prevailing development skillset is comprised of Vue3.js, vanilla CSS, HTML, and JavaScript,
                        Web3.js, and Solidity. This is a growing skillset of mine where I am seeking new engagements to
                        build my portfolio. I am presently investing heavily into this part of my professional toolkit.</p>
                    <p>Whether you are looking for a personal/professional-use website, an internal software solution, or a
                        web3 application, I offer a growing range of web and application development services. </p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
                <div class="services-split-text-image-img img-responsive2">
                    <img src="../assets/Home/Computer2.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    
    <ContactForm />
</template>
<script setup>
import { RouterLink } from 'vue-router';
import SocialLinks from '../components/SocialLinks.vue'

</script>
<style scoped>
.consulting-about {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    background: white;
    padding-bottom: 6rem;
}

.consulting-about-content {
    text-align: justify;
}

.consulting-about-content p {
    position: relative;
    font-size: 1.6rem;
    margin: 0rem 0 3rem;
}

.consulting-services {
    display: flex;
    /* Use flexbox layout */
}

.consulting-about {
    min-height: 75vh;
}
</style>