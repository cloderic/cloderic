import loadContent from './content/utils/loadContent';
import listContent from './content/utils/listContent';
import { H1, H2 } from '../components/base';
import Link from '../components/link';
import ContentList from '../components/contentList';
import Image from 'next/image';
import sortBy from 'lodash.sortby';

export default async function Home() {
  const welcomeMdx = await loadContent('app/content/welcome.mdx');
  const highlights = (
    await listContent({ parseFrontmatter: true })
  ).filter(({ categories = [] }) =>
    categories.find((category) => category == 'highlights')
  );
  const sortedHighlights = sortBy(highlights, 'date').reverse();

  return (
    <>
      <div className="flex items-center gap-8">
        <Image src="/mars.png" width={150} height={150} alt="Picture of Mars" />
        <div>
          <H1 noanchor>Clodéric Mars</H1>
          <p className="font-title">
            AI Product Engineer / Tech Leader / Public Speaker
          </p>
          <p className="text-5xl">🧑‍🦱🤝🤖</p>
        </div>
      </div>
      {welcomeMdx.content}
      <H2>Highlights</H2>
      <ContentList
        items={sortedHighlights}
        renderDate={({ date }) => date.toFormat('yyyy/MM/dd')}
        renderTitle={({ title }) => title}
        renderSubtitle={({}) => null}
      />
      <H2>All Content</H2>
      <ul>
        <li>
          <Link href="/resume/en">Resume 🇬🇧</Link>
        </li>
        <li>
          <Link href="/resume/fr">CV 🇫🇷</Link>
        </li>
        <li>
          <Link href="/bio">Bio</Link>
        </li>
        <li>
          <Link href="/content/certifications">Certifications</Link>
        </li>
        <li>
          <Link href="/content">Archive</Link>
        </li>
      </ul>
    </>
  );
}
