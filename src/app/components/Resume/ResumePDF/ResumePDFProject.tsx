// import { View } from "@react-pdf/renderer";
// import {
//   ResumePDFSection,
//   ResumePDFBulletList,
//   ResumePDFText,
// } from "components/Resume/ResumePDF/common";
// import { styles, spacing } from "components/Resume/ResumePDF/styles";
// import type { ResumeProject } from "lib/redux/types";

// export const ResumePDFProject = ({
//   heading,
//   projects,
//   themeColor,
// }: {
//   heading: string;
//   projects: ResumeProject[];
//   themeColor: string;
// }) => {
//   return (
//     <ResumePDFSection themeColor={themeColor} heading={heading}>
//       {projects.map(({ project, projectlink, descriptions }, idx) => (
//         <View key={idx}>
//           <View
//             style={{
//               ...styles.flexRowBetween,
//               marginTop: spacing["0.5"],
//             }}
//           >
//             <ResumePDFText bold={true}>{project}</ResumePDFText>
//             <ResumePDFText>{projectlink}</ResumePDFText>
//           </View>
//           <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
//             <ResumePDFBulletList items={descriptions} />
//           </View>
//         </View>
//       ))}
//     </ResumePDFSection>
//   );
// };


import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
  ResumePDFText,
  ResumePDFLink,
} from "components/Resume/ResumePDF/common";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeProject } from "lib/redux/types";

export const ResumePDFProject = ({
  heading,
  projects,
  themeColor,
  isPDF,
}: {
  heading: string;
  projects: ResumeProject[];
  themeColor: string;
  isPDF: boolean;
}) => {
  return (
    <ResumePDFSection heading={heading}>
      <View
        style={{
          marginTop: spacing["0"],
          borderTopWidth: 0.5,
          borderTopColor: themeColor,
          borderTopStyle: 'solid',
        }}
      />
      {projects.map(({ project, projectlink, descriptions }, idx) => {
      // Check if projectlink is defined and is a string before calling startsWith.
      const formattedLink = (typeof projectlink === 'string' && projectlink.startsWith("http")) 
                            ? projectlink 
                            : `https://${projectlink}`;
      
      return (
        <View key={idx}>
          <View
            style={{
              ...styles.flexRowBetween,
              marginTop: spacing["0.5"],
            }}
          >
            <ResumePDFText bold={true}>{project}</ResumePDFText>
            {projectlink && (
              // Use ResumePDFLink to make the project link clickable.
              <ResumePDFLink src={formattedLink} isPDF={isPDF}>
                View Project
              </ResumePDFLink>
            )}
          </View>
          <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
            <ResumePDFBulletList items={descriptions} />
          </View>
        </View>
      );
    })}

    </ResumePDFSection>
  );
};
