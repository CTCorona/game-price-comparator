<script lang="ts">
  import Body from '@components/atoms/Typography/Body.svelte';
  import Heading from '@components/atoms/Typography/Heading.svelte';
  import type { NewsProps } from '@types';
  import { format } from 'date-fns';

  export let card: NewsProps;
  const { image, title, description, date, link } = card;

  const getFormattedData = (date: string) => {
    return format(new Date(date), 'E, d MMM yyyy | hh:mm aaa');
  };
</script>

<li>
  <img src={image} alt={title} />
  <a href={link} target="_blank">
    <span class="date">{getFormattedData(date)}</span>
    <Heading tag="h3" style="h5">{title}</Heading>
    <Body>{description}</Body>
  </a>
</li>

<style lang="scss">
  li {
    overflow: hidden;
    background-color: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    perspective: 1px;
    transform-origin: top;
    transition: transform 350ms var(--easing-exponential-out),
      box-shadow 350ms var(--easing-exponential-out);

    a {
      padding: 10px 20px 30px;
      display: block;
    }
    img {
      height: 250px;
      width: 100%;
      object-position: center;
      object-fit: cover;
    }

    :global(h3) {
      color: var(--color-gray-8);
      margin: 5px 0 15px;
    }
    span {
      font-size: var(--font-size-sm);
      color: var(--color-gray-8);
      font-variation-settings: 'wght' 600;
    }

    :global(p) {
      color: var(--color-gray-7);
    }

    :global(p),
    :global(h3) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
    @media (hover: hover) {
      &:hover {
        transform: perspective(1px) scale(0.98);
        backface-visibility: hidden;
        transform-origin: top;
        box-shadow: var(--shadow-xl);
      }
    }
  }
</style>
