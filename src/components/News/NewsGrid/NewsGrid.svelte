<script lang="ts">
  import Heading from '@components/atoms/Typography/Heading.svelte';
  import Body from '@components/atoms/Typography/Body.svelte';
  import type { NewsProps } from '@types';
  import NewsCard from '../NewsCard/NewsCard.svelte';

  export let news: NewsProps[];
</script>

<Heading tag="h3">Latest news about gaming!</Heading>
<ul class="news-grid">
  {#each news as item}
    <NewsCard card={item} />
  {/each}
</ul>

<style lang="scss">
  .news-grid {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 30px;
  }
</style>
