import { View } from "@react-pdf/renderer";
import {
  ResumePDFIcon,
  type IconType,
} from "components/Resume/ResumePDF/common/ResumePDFIcon";
import { styles, spacing } from "components/Resume/ResumePDF/styles";
import {
  ResumePDFLink,
  ResumePDFSection,
  ResumePDFText,
} from "components/Resume/ResumePDF/common";
import type { ResumeProfile } from "lib/redux/types";

export const ResumePDFProfile = ({
  profile,
  themeColor,
  isPDF,
}: {
  profile: ResumeProfile;
  themeColor: string;
  isPDF: boolean;
}) => {
  const { name, email, phone, url, summary, location, github, linkedin } = profile;
  const iconProps = { email, phone, location, url, github, linkedin };
  const iconEntries = Object.entries(iconProps).filter(([key, value]) => !!value); // Array of [key, value] pairs with non-null values.

  return (
    <ResumePDFSection style={{ marginTop: spacing["4"] }}>
     
      <ResumePDFText bold={true} themeColor={themeColor} style={{ fontSize: "20pt", alignSelf: "center" }}>
        {name}
      </ResumePDFText>
      {summary && <ResumePDFText style={{ alignSelf: "center" }}>{summary}</ResumePDFText>}
      
      <View style={{ ...styles.flexRowBetween, flexWrap: "wrap", marginTop: spacing["0.5"] }}>
        {iconEntries.map(([key, value], index) => {
          let iconType = key as IconType;
          if (key === "github" && value.includes("github")) {
            iconType = "url_github";
          }
          if (key === "linkedin" && value.includes("linkedin")) {
            iconType = "url_linkedin";
          }

          const shouldUseLinkWrapper = ["email", "url", "phone", "github", "linkedin"].includes(key);
          const Wrapper = ({ children }: { children: React.ReactNode }) => {
            if (!shouldUseLinkWrapper) return <>{children}</>;

            let src = "";
            switch (key) {
              case "email":
                src = `mailto:${value}`;
                break;
              case "phone":
                src = `tel:${value.replace(/[^\d+]/g, "")}`;
                break;
              default:
                src = value.startsWith("http") ? value : `https://${value}`;
            }

            return <ResumePDFLink src={src} isPDF={isPDF}>{children}</ResumePDFLink>;
          };

          return (
            <View key={key} style={{ ...styles.flexRow, gap: spacing["0"] }}>
              <ResumePDFIcon type={iconType} isPDF={isPDF} />
              <Wrapper>
                <ResumePDFText style={{ gap: spacing["0.5"] }}>{value}</ResumePDFText>
              </Wrapper>
              {index < iconEntries.length - 1 && (
                <ResumePDFText style={{ marginLeft: spacing["1"], marginRight: spacing["1"] }}>|</ResumePDFText>
              )}
            </View>
          );
        })}
      </View>

      <View
        style={{
          marginTop: spacing["2"],
          // marginBottom: spacing["1"],
          borderTopWidth: 0.5, //Width of the border
          borderTopColor: themeColor,
          borderTopStyle: 'solid',
          
        }}
      />


    </ResumePDFSection>
  );
};
