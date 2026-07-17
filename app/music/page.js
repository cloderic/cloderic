import { H1, H2 } from '../../components/title';
import { Mdx } from '../../components/markdown';
import HomeLink from '../../components/homeLink';
import HeroImage from '../../components/heroImage';
import Audio from '../../components/players/audio';
import listContent from '../content/utils/listContent';
import ContentList from '../../components/contentList';
import sortBy from 'lodash.sortby';

import banner from './two-clouds-away.jpeg';

export const metadata = {
  title: 'Music',
  description: 'Music recordings archive',
  alternates: {
    canonical: '/music'
  }
};

export default async function Music() {
  const tracks = (await listContent({ parseFrontmatter: true }))
    .filter(
      ({ categories = [], audioTracks }) =>
        categories.find((c) => c === 'music') && audioTracks
    )
    .map(({ slug, audioTracks }) =>
      audioTracks.map((track) => ({
        ...track,
        learnMoreHref: `/content/${slug}`
      }))
    )
    .flat();
  const shows = (
    await listContent({ parseFrontmatter: true })
  ).filter(({ categories = [] }) => categories.find((c) => c === 'live_music'));
  return (
    <div className="max-w-prose">
      <HeroImage
        src={banner}
        alt="Two Clouds Away (Clodéric's band at University) playing live on stage"
      />
      <H1 noanchor>Music</H1>
      <H2 noanchor>Recordings</H2>
      <Mdx>
        I've been _on and off_ playing music since, well, forever. This page is
        my public archive of the tunes I've recorded...
      </Mdx>
      <Audio tracks={tracks} className="mt-4" />
      <H2 noanchor>Live Shows</H2>
      <ContentList items={sortBy(shows, 'date').reverse()} />
      <footer className="mt-4 text-center">
        <HomeLink />
      </footer>
    </div>
  );
}
