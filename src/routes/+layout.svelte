<script lang="ts">
  import Header from '@components/Header/Header.svelte';
</script>

<Header />
<main>
  <slot />
</main>

<footer>footer stuff</footer>

<style global lang="scss">
  main {
    --widthContainer: -720px;
    --gap: 24px;
    display: grid;
    grid-template-columns:
      calc(var(--widthContainer) - var(--gap) + 50vw) repeat(12, 1fr)
      calc(var(--widthContainer) - var(--gap) + 50vw);
    column-gap: var(--gap);

    @media (max-width: 1600px) {
      --widthContainer: -550px;
      --gap: 16px;

      column-gap: var(--gap);
      grid-template-columns:
        calc(var(--widthContainer) - var(--gap) + 50vw) repeat(8, 1fr)
        calc(var(--widthContainer) - var(--gap) + 50vw);
    }
  }
</style>
