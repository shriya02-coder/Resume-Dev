import { View } from "@react-pdf/renderer";
import {
  ResumePDFSection,
  ResumePDFBulletList,
} from "components/Resume/ResumePDF/common";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import type { ResumeCustom } from "lib/redux/types";


export const ResumePDFCustom = ({
  heading,
  custom,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  custom: ResumeCustom;
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  const { descriptions } = custom;

  return (
    <ResumePDFSection heading={heading}>
      <View
        style={{
          marginTop: spacing["0"],
          // marginBottom: spacing["1"],
          borderTopWidth: 0.5, //Width of the border
          borderTopColor: themeColor,
          borderTopStyle: 'solid',
          
        }}
      />
      <View style={{ ...styles.flexCol }}>
        <ResumePDFBulletList
          items={descriptions}
          showBulletPoints={showBulletPoints}
        />
      </View>
    </ResumePDFSection>
  );
};
