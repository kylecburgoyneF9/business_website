<template>
    <section class="interior-hero">
        <BackgroundVideo fileName="0226.mp4" />
        <div class="interior-hero-content">
            <h1>Consulting Services</h1>
            <h3>Fractional CFO & Technical Advisory Services</h3>
            <p>My team delivers fractional CFO and technical advisory services designed to directly impact the bottom
                line with <strong> high ROI opportunities</strong>. We do this by combining specialized finance and
                accounting expertise with today’s array of automation, integration and AI technologies. Scroll for more
                and connect with me today. </p>
            <div class="interior-hero-content-btns">
                <router-link to="#consulting-fractional-cfo" class="btn" scroll="{ behavior: 'smooth' }">Fractional CFO
                    Services</router-link>
                <router-link to="#consulting-automation-solutions" class="btn"
                    scroll="{ behavior: 'smooth' }">Specialized Business
                    Tooling</router-link>
                <router-link to="#consulting-integration-services" class="btn" scroll="{ behavior: 'smooth' }">
                    FP&A Automation and Integration</router-link>
            </div>
        </div>

        <SocialLinks />
    </section>

    <!-- 'about' section design and elements -->
    <section class="consulting-about" id="my-career">
        <h2 class="heading">My <span>Career</span></h2>
        <div class="consulting-about-content">
            <p>With nearly a decade of experience bridging the gap between technology and finance/accounting teams, I
                have honed a unique skill set that allows me to serve as the intermediary between these critical
                functions. My expertise lies in understanding both the intricacies of financial operations and the
                potential of cutting-edge technology solutions. Leveraging this cross-functional knowledge, I excel in
                identifying opportunities for process improvement, automation, and integration, thereby streamlining
                operations and enhancing decision-making capabilities.</p>
            <p>As a seasoned professional, I specialize in providing direct-to-bottom-line value through strategic
                insights and practical solutions. Whether it's optimizing financial workflows, implementing automation
                tools, or integrating disparate IT systems, I am adept at translating complex technical concepts into
                actionable strategies that drive business growth. My ability to communicate effectively with both
                finance/accounting and technology teams enables me to facilitate collaboration and alignment, ensuring
                that organizational objectives are met efficiently and effectively.</p>
            <p>In today's rapidly evolving business landscape, the intersection of finance/accounting and technology has
                never been more crucial. With my proven track record of success in navigating this intersection, I am
                well-positioned to help businesses harness the power of technology to achieve their financial goals and
                drive sustainable growth.</p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <a href="/Kyle_Burgoyne_CV_2024.pdf" class="universal-btn" download>Download CV</a>
    </section>


    <section class="services-split-text-image-section">
        <div class="border-div" style="margin-bottom: 6rem;">
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
                    <ul>
                        <li>Financial Strategy Development: Create and implement financial strategies aligned with
                            business goals.</li>
                        <li>Budgeting and Forecasting: Develop budgets and financial forecasts to guide business
                            decisions.</li>
                        <li>Financial Analysis and Reporting: Analyze financial data and prepare reports for key
                            decision makers.</li>
                        <li>Cash Flow Management: Monitor cash flow and optimize liquidity to support business
                            operations.</li>
                        <li>Financial Modeling: Build financial models to evaluate business scenarios and investment
                            opportunities.</li>
                        <li>Data Analytics: Assess, capture, and analyze key data points for the business to improve
                            executive-level decision making.</li>
                    </ul>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-img img-responsive1">
                    <img src="../assets/Home/Computer1.jpg" alt="">
                </div>
                <div class="services-split-text-image-content" id="consulting-automation-solutions">
                    <h3>Specialized Business Tooling</h3>
                    <p>[placeholder] Here are the services we offer:</p>
                    <ul>
                        <li>[placeholder]</li>
                        <li>[placeholder]</li>
                    </ul>
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
                    <h3>FP&A Automation and Integration</h3>
                    <p>CFOs and Controllers, if your FP&A function is spending too much time manually manipulating data,
                        losing visibility into the business, or struggling, daily, with your legacy systems, please
                        reach out to me. These frictions are costing you in hard dollars, turnover, time, and
                        opportunity. Our cross-functional expertise places us in a niche position to deliver specialized
                        value to finance and accounting teams. Here are the services we offer:</p>
                    <ul>
                        <li>Ad-hoc Engagement: Capture emerging opportunities throughout your finance and accounting
                            ecosystems with today’s suite of AI tools.</li>
                        <li>Legacy Refurbishment: ‘Upgrade’ your legacy systems, or ‘remedy’ disparate ones, to feel
                            effortless and powerful without changing any of your underlying infrastructure.</li>
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