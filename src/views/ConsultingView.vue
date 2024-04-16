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
            <p>[placeholder]</p>
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
                        <li>Financial Strategy Development: Craft and execute financial strategies that align with your
                            business objectives, driving sustainable growth and profitability.</li>
                        <li>Budgeting and Forecasting: Develop accurate budgets and financial forecasts to provide a
                            roadmap for informed decision-making and resource allocation.</li>
                        <li>Financial Analysis and Reporting: Analyze financial data to derive actionable insights and
                            prepare comprehensive reports for key stakeholders, facilitating informed decision-making
                            and strategic planning.</li>
                        <li>Cash Flow Management: Monitor cash flow dynamics and optimize liquidity management
                            strategies to ensure smooth business operations and financial stability.</li>
                        <li>Financial Modeling: Construct robust financial models to evaluate various business scenarios
                            and investment opportunities, enabling informed strategic decision-making and risk
                            assessment.</li>
                        <li>Data Analytics: Harness the power of data analytics to assess, capture, and analyze key
                            business metrics, empowering executives with actionable insights for driving performance and
                            innovation.</li>
                        <li>Department Buildout: Strategically structure and expand FP&A departments to enhance
                            organizational capabilities and support business growth, optimizing resources and fostering
                            a data-driven culture.</li>
                    </ul>
                    <a href="#contact" class="universal-btn">Work Together</a>
                </div>
            </div>
            <div class="services-split-text-image">
                <div class="services-split-text-image-content" id="consulting-integration-solutions">
                    <h3>FP&A Automation and Integration</h3>
                    <p>CFOs and Controllers, if your FP&A function is spending too much time manually manipulating data,
                        losing visibility into the business, or struggling, daily, with your legacy systems, please
                        reach out to me. These frictions are costing you in hard dollars, turnover, time, and
                        opportunity. Our cross-functional expertise places us in a niche position to deliver specialized
                        value to finance and accounting teams. Here are the services we offer:</p>
                    <ul>
                        <li>Data Extraction: Leveraging automation and AI capabilities, we extract data from various
                            sources including PDFs, websites, web-based applications, and legacy systems, ensuring
                            comprehensive access to critical information.</li>
                        <li>Data Collation: By consolidating data from disparate systems, we uncover valuable insights
                            that drive informed decision-making and business optimization, unlocking the full potential
                            of your organization's data assets.</li>
                        <li>Data Accessibility: We enhance data accessibility through user-friendly platforms and
                            streamlined protocols, ensuring stakeholders have seamless access to pertinent information
                            whenever and wherever needed.</li>
                        <li>Entry Automation: Utilizing advanced automation technologies, we streamline data entry
                            processes, minimizing manual errors and expediting workflow efficiency, allowing your team
                            to focus on high-value tasks.</li>
                        <li>Data Reporting: Our comprehensive reporting solutions encompass dynamic visualizations and
                            interactive dashboards, providing actionable insights and trends to guide strategic planning
                            and facilitate data-driven decision-making across your organization.</li>
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