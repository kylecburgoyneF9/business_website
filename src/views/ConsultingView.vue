<template>
    <section class="interior-hero">
        <BackgroundVideo fileName="0226.mp4" />
        <div class="interior-hero-content">
            <h1>Consulting Services</h1>
            <h3>Fractional CFO & Tech Advisory Services</h3>
            <p>My team delivers fractional CFO and AI Automation services designed to directly impact the bottom
                line with <strong> high ROI opportunities</strong>. We do this by combining specialized finance and
                accounting expertise with today’s array of automation, integration and AI technologies. Scroll for more
                and connect with me today. </p>
            <div class="interior-hero-content-btns">
                <router-link to="#consulting-fractional-cfo" class="btn" scroll="{ behavior: 'smooth' }">Fractional CFO
                    Services</router-link>
                <router-link to="#consulting-integration-solutions" class="btn" scroll="{ behavior: 'smooth' }">
                    FP&A Automation and Integration</router-link>
            </div>
        </div>

        <SocialLinks />
    </section>

    <!-- 'about' section design and elements -->
    <section class="consulting-about" id="my-career">
        <h2 class="heading">My <span>Career</span></h2>
        <div class="consulting-about-content">
            <p>I am very grateful to have started my career with KPMG in 2015. There are few better ‘primers’ for the
                business world than a year or two with a Big 4 accounting firm. Writing this, it’s incredible thinking
                back about the person I used to be at the time. In those early years, I became increasingly interested
                in finance and financial modeling, specifically. I took a treasury role with a large mining company and
                I remember enrolling in investment banking and a renewable energy financial modeling courses in my free
                time. </p>
            <p>My natural proclivity for challenge and learning took me to Silicon Valley (April 2018) as the second (of
                7) employee for a burgeoning ‘fintech’ startup (DRV). I don’t think I’ve ever worked harder, slept less,
                or learned more during that period. While the story doesn’t end with a multi-million dollar exit, I am
                proud to say that I contributed meaningfully to the development and financing of a community solar array
                that is presently generating power for Boulder residents in Colorado. I prepared countless tax equity
                models through the due diligence and capital raising processes. I had ‘drafted, re-drafted, and
                re-re-drafted’ numerous legal agreements to properly paper the deal. My two most notable moments with
                DRV were (i) getting through the Boulder project, having worked alongside the best tax equity attorneys
                in the country and (ii) working directly with Go-Fund-Me founder, Andy Ballaster. </p>
            <p>Shortly after the pandemic began, I decided to relieve myself of my responsibilities with DRV and take a
                short break from full-time work. During this time, I made my initial heavily investment into coding
                (Python). After 6-months, I was picked up by a talented founder where I acted as his executive
                chief-of-staff to handle anything that needed supervision or improvement throughout his waste management
                business. This was my first taste of direct operations management. This experience was particularly
                important in understanding elements true ‘success’ as SRE was able to reach certain financial goals
                during and after my tenure. I pull lessons from this experience and their founder’s methodology on a
                daily basis. </p>
            <p>Post SRE, I had a short stint with another fintech startup but ultimately, I decided to take another
                break from full-time work, where I began, again, heavily investing in my technology prowess. At the
                time, making money with automated trading was a fruitful pursuit. As such, I spent another 100+ hours in
                codebases - engineering trading scripts. This second knowledge investment was the first time I really
                started ‘seeing into the matrix’. I found myself on a higher (‘flatter’) part of the coding learning
                curve where learning accelerates and fulfillment rapidly propagates. I began my current role, as a
                senior controller within Aramark Destinations, in June ’22 but maintained a strong learning regime. This
                website, itself, is the byproduct of a high-code html, css, and JavaScript (Vue3.js) learning exercise.
            </p>
            <p>D3 Finance is the simple culmination of my deep cross-functional experience and technical capability. The
                ‘D3 Difference’ is our rare intersectional expertise (operations, finance, and technology) for making
                your business goals a reality. Let me show you what the D3 Difference could mean for your business
                today. </p>
            <p>See my CV download below for more details. Contact me today!</p>
        </div>
        <a href="/Kyle_Burgoyne_CV_2024.pdf" class="universal-btn" download>Download CV</a>
    </section>


    <section class="services-split-text-image-section">
        <div class="border-div">
            <div class="services-split-text-image">
                <div class="services-split-text-image-img" id="consulting-fractional-cfo">
                    <img src="../assets/Home/Finance.jpg" alt="">
                </div>
                <div class="services-split-text-image-content">
                    <h3>Fractional CFO Services</h3>
                    <p>CEOs and founders carry immense responsibility. Entrust your financial strategy to a seasoned
                        expert and allow yourself to focus on steering your business toward success. As a data-driven
                        tactician, I provide tailored recommendations to empower your decision-making process. Here are
                        the services we offer:</p>
                    <ul class="styled-list">
                        <li><strong>Bookkeeping:</strong> We will get your books where they need to be using the latest
                            AI accounting tools.</li>
                        <li><strong>CFO Strategy Development:</strong>We will be your partner in creating a roadmap for
                            your
                            company’s financial future and support you in executing on that roadmap. </li>
                        <li><strong>Cash Flow and Profitability Management:</strong>Our team will do the heavy lifting
                            to improve your visibility into your business’s spending and overall profitability. </li>
                        <li><strong>Financial Modeling:</strong> Construct robust financial models to evaluate various
                            business scenarios
                            and investment opportunities, enabling informed strategic decision-making and risk
                            assessment.</li>
                    </ul>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-img" id="consulting-fractional-cfo">
                    <img src="../assets/Home/Computer2.jpg" alt="">
                </div>
                <div class="services-split-text-image-content" id="consulting-integration-solutions">
                    <h3>FP&A Automation and Integration</h3>
                    <p>CFOs and Controllers, if your FP&A function is spending too much time manually manipulating data,
                        losing visibility into the business, or struggling, daily, with your legacy systems, please
                        reach out to me. These frictions are costing you in hard dollars, turnover, time, and
                        opportunity. Our cross-functional expertise places us in a niche position to deliver specialized
                        value to finance and accounting teams. Here are the services we offer:</p>
                    <ul class="styled-list">
                        <li><strong>Manual Workflow Automation:</strong> Utilizing automation technologies, we
                            streamline data
                            entry
                            processes, minimizing manual errors and expediting workflow efficiency, allowing your team
                            to focus on high-value tasks.</li>
                        <li><strong>Excel + AI Integrations:</strong> The integration of excel and OpenAI can unlock
                            tremendous value within a multitude of accounting and finance workflows. </li>
                        <li><strong>PDF Data Extraction:</strong> We implement data extraction processes to convert PDFs
                            into useable data outputs. </li>
                        <li><strong>Data Pipelines:</strong> We provide solutions that extract, organize, collate, and
                            analyze data within siloed systems; saving you time and unlocking new insights. </li>
                    </ul>
                    <a href="#contact" class="universal-btn">Work Together</a>

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
</style>