import RichText from "../RichText";

type CaseStudyProps = {
  cv: any,
  markdownText: string,
};
const CaseStudy: React.FC<CaseStudyProps> = ({
  cv,
  markdownText,
}) => {
  return (
    <RichText text={markdownText} />
  );
}

export default CaseStudy;
