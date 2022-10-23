<script lang="ts">
  import { page } from '$app/stores';
  import logo from '@assets/images/logo-controller-euro.png';
  import { scrollToElement } from '$lib/_utils';
  import { onMount } from 'svelte';
  import { redirect } from '@sveltejs/kit';
  import { afterNavigate, goto } from '$app/navigation';

  const NAV_HEIGHT = 80;
  let navElement: HTMLElement;
  let isActive: boolean = false;

  onMount(() => {
    document.addEventListener('scroll', (e) => {
      navElement.offsetTop > NAV_HEIGHT ? (isActive = true) : (isActive = false);
    });
  });
</script>

<nav class={isActive ? 'active' : ''} bind:this={navElement}>
  <div>
    <ul>
      <li>
        <a href="/#news">Games</a>
      </li>
    </ul>
  </div>
  <div>
    <a href="/">
      <img src={logo} alt="" />
    </a>
  </div>
  <div>
    <ul>
      <li>
        <a href="/#news">News</a>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  nav {
    position: sticky;
    top: 0;
    height: 80px;
    background-color: white;
    z-index: 9999;
    display: grid;
    grid-template-columns: 250px 80px 250px;
    text-align: center;
    gap: 30px;
    place-content: center;
    align-items: center;
    transition: box-shadow 300ms var(--easing-cubic-in);

    &.active {
      box-shadow: var(--shadow-md);
    }
  }
</style>
