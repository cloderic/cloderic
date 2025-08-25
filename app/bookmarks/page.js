import loadContent from '../content/utils/loadContent';
import listContent from '../content/utils/listContent';
import { H1, H2 } from '../../components/title';
import HomeLink from '../../components/homeLink';
import sortBy from 'lodash.sortby';
import ContentList from '../../components/contentList';

export const metadata = {
  title: 'Bookmarks',
  alternates: {
    canonical: '/bookmarks'
  }
};

export default async function Bio({}) {
  const bookmarksMdx = await loadContent('app/bookmarks/bookmarks.md');

  return (
    <div className="max-w-prose">
      <H1>{bookmarksMdx.frontmatter.title}</H1>
      {bookmarksMdx.content}
      <footer className="mt-4 text-center">
        <HomeLink />
      </footer>
    </div>
  );
}
