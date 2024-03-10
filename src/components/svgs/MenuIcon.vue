<template>
  <svg
    class="menu-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="19"
    viewBox="0 0 22 19"
    fill="none"
  >
    <path
      class="bar-1 bar"
      d="M1 1.5H21"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      class="bar-2 bar"
      d="M1 9.5H21"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      class="bar-3 bar"
      d="M1 17.5H21"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.menu-icon .bar {
  stroke: var(--main-color);
  transition: .3s ease;
}

.menu-icon.open .bar-1 {
  transform: translate(4px, 1px) rotate(45deg);
}

.menu-icon.open .bar-2 {
  opacity: 0;
}

.menu-icon.open .bar-3 {
  transform: translate(-9px, 5px) rotate(-45deg);
}
</style>