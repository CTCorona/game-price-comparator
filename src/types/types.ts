export type HtmlTag = 'div' | 'section' | 'article';

export interface NewsProps {
  date: string;
  description: string;
  image: string;
  link: string;
  title: string;
}
