<script lang="ts">
  export let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  export let style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined = undefined;
  export let weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = 700;

  const classes = `heading heading-${style ? style : tag}`;
</script>

<svelte:element this={tag} class={classes} style:font-variation-settings={`'wght' ${weight}`}>
  <slot />
</svelte:element>

<style lang="scss">
  .heading {
    &-h1 {
      font-size: var(--font-size-7xl);
    }

    &-h2 {
      font-size: var(--font-size-6xl);
    }
    &-h3 {
      font-size: var(--font-size-5xl);
    }
    &-h4 {
      font-size: var(--font-size-4xl);
    }
    &-h5 {
      font-size: var(--font-size-3xl);
      line-height: var(--line-height-snug);
    }
    &-h6 {
      font-size: var(--font-size-2xl);
    }
  }
</style>
