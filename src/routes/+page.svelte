<script lang="ts">
  import type { PageServerData } from './$types';
  import GridContainer from '@components/atoms/GridContainer/GridContainer.svelte';
  import Heading from '@components/atoms/Typography/Heading.svelte';
  import NewsGrid from '@components/News/NewsGrid/NewsGrid.svelte';

  export let data: PageServerData;
  const news = data && Object.values(data).slice(0, 9);
</script>

<GridContainer as="section" id="search">
  <Heading tag="h1">Want to buy a game? <br />Find the best price to get it!</Heading>
</GridContainer>
<GridContainer as="section" id="news">
  <NewsGrid {news} />
</GridContainer>
