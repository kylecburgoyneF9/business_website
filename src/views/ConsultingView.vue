
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
        <div class="consulting-header-icons">
            <a href="https://github.com/kylecburgoyneF9" target="_blank"><box-icon type='logo' name='github'></box-icon></a>
            <a href="https://www.youtube.com/channel/UCKlKCP8OuQVRArpZrzTd-xA" target="_blank"><box-icon name='youtube'
                    type='logo'></box-icon></a>
            <a href="https://www.instagram.com/kylecburgoyne/" target="_blank"><box-icon name='instagram-alt'
                    type='logo'></box-icon></a>
            <a href="https://www.linkedin.com/in/kyle-burgoyne-4824927b/" target="_blank"><box-icon name='linkedin'
                    type='logo'></box-icon></a>
        </div>
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


    <section class="consulting-services-section">
        <div class="border-div" style="margin-bottom: 6rem;">
            <div class="consulting-services">
                <div class="consulting-services-img" id="consulting-fractional-cfo">
                    <img src="../assets/Home/Finance.jpg" alt="">
                </div>
                <div class="consulting-services-content">
                    <h3>Fractional CFO Services</h3>
                    <p>Having accumulated 9 years of experience in the business world, I've crafted a diverse range of
                        models, including but not limited to solar tax-equity, solar loan origination, corporate, debt and
                        equity due diligence, private placement, and accounting.</p>

                    <p>Whether you're seeking to enhance your business tools or need support in presenting your business's
                        potential, we can collaborate to achieve your objectives.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-img img-responsive1">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
                <div class="consulting-services-content" id="consulting-automation-solutions">
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
                <div class="consulting-services-img img-responsive2">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-img">
                    <img src="../assets/Home/Computer4.jpg" alt="">
                </div>
                <div class="consulting-services-content" id="consulting-integration-services">
                    <h3>Integration Solutions</h3>
                    <p>Using a suite of high and low code expertise, plus today's incredible array of database, AI, and
                        cloud services, I can help you get the most out of your existing technology stack.</p>
                    <p>If you're spending too much time manually manipulating data on a regular basis or are at the point of
                        lossing visibility into your business due to a lack of communication between your core technology
                        systems, please reach out to me. Almost every company I have worked for (small and large) has
                        operated with such friction/barriers. These frictions are costing you in hard dollars, turnover,
                        time,
                        and opportunity.</p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="consulting-services">
                <div class="consulting-services-img img-responsive1">
                    <img src="../assets/Home/Computer2.jpg" alt="">
                </div>
                <div class="consulting-services-content" id="consulting-web-development">
                    <h3>Web & Application Development</h3>
                    <p>My prevailing development skillset is comprised of Vue3.js, vanilla CSS, HTML, and JavaScript,
                        Web3.js, and Solidity. This is a growing skillset of mine where I am seeking new engagements to
                        build my portfolio. I am presently investing heavily into this part of my professional toolkit.</p>
                    <p>Whether you are looking for a personal/professional-use website, an internal software solution, or a
                        web3 application, I offer a growing range of web and application development services. </p>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
                <div class="consulting-services-img img-responsive2">
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