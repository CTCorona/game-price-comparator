import { error } from '@sveltejs/kit';
import { newsOptions, NEWS_URL } from '../utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const news = await fetch(NEWS_URL, newsOptions).then((res) => res.json());

  if (!news) {
    throw error(404, 'Not found');
  }

  return news;
};
