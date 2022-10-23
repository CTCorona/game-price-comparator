<script lang="ts">
  import type { HtmlTag } from '@types';

  export let id: string = '';
  export let as: HtmlTag = 'div';
  export let isFullWidth: boolean = false;
</script>

<svelte:element
  this={as}
  {id}
  style:scroll-margin-top="80px"
  class={`grid ${isFullWidth ? 'isFullWidth' : ''}`}
>
  <slot />
</svelte:element>

<style lang="scss">
  .grid {
    grid-column: 2 / -2;

    &.isFullWidth {
      grid-column: 1 / -1;
      max-width: var(--width-screen);
    }
  }
</style>
