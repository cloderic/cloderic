import { H1 } from '../../components/base';
import Link from '../../components/link';
import listContent from './utils/listContent';
import sortBy from 'lodash.sortby';
import { DateTime } from 'luxon';

export const metadata = {
  title: 'Content Archive'
};

export default async function Page() {
  const content = (await listContent({ parseFrontmatter: true }))
    .filter(({ date, hidden }) => date != null && !hidden)
    .map(({ date, ...otherProperties }) => ({
      date: DateTime.fromJSDate(date, { zone: 'UTC' }),
      ...otherProperties
    }));
  const sortedContent = sortBy(content, 'date').reverse();
  return (
    <>
      <H1 noanchor>Content Archive</H1>
      <ul>
        {sortedContent.map(({ slug, title, date }, index) => (
          <li key={index}>
            <time dateTime={date.toISODate()}>
              {date.toFormat('yyyy/MM/dd')}
            </time>
            {' - '}
            <Link href={`/content/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
