<template>
    <footer class="footer">
        <SocialLinks class="footer-icons"/>
        <div class="footer-iconTop">
            <a href="#">
                <SvgUpArrow />
            </a>
        </div>
    </footer>
</template>
<script setup>
import SocialLinks from './SocialLinks.vue'
import SvgUpArrow from './svgs/UpArrow.vue'
</script>
<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 9%;
  background: var(--dk-blue);
}

.footer  a {
  margin: 1rem;
}

.footer-text,
.footer-iconTop {
  position: relative;
}

.footer-text p {
  font-size: 1.6rem;
}

.footer-iconTop a {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: .8rem;
  background: var(--main-color);
  border: .2rem solid var(--main-color);
  border-radius: .6rem;
  z-index: 1;
  overflow: hidden;
}

.footer-iconTop a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: white;
  z-index: -1;
  transition: .5s;
}

.footer-iconTop a:hover::before {
  width: 100%;
}

.footer-iconTop a i {
  font-size: 2.4rem;
  color: var(--bg-color);
  transition: .5s;
}

.footer-iconTop a:hover i {
  color: var(--main-color);
}

@media (max-width: 991px) {
  .footer {
    padding: 2rem 4%;
  }
}

@media (max-width: 462px) {

  .footer p {
    margin-top: 2rem;
    text-align: center;
  }
}

</style>