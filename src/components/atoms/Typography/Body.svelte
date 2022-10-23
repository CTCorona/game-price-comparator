<script lang="ts">
  export let isBold: boolean = false;
</script>

<p class="body" style:font-variation-settings={`'wght' ${isBold ? '700' : '400'}`}>
  <slot />
</p>

<style lang="scss">
  .body {
    line-height: var(--line-height-normal);
  }
</style>
