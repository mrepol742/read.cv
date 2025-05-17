import { promises as fs } from 'fs';
import CaseStudy from './CaseStudy';

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const cvFile = await fs.readFile(process.cwd() + '/public/content/profileData.json', 'utf8');
  const cv = JSON.parse(cvFile);

  const slug = (await params).slug;
  const file = await fs.readFile(process.cwd() + `/public/content/${slug}.md`, 'utf8');

  return (
    <div>
      <CaseStudy cv={cv} markdownText={file} />
    </div>
  );
}
