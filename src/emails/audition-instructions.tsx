import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AuditionInstructionsEmailProps {
  name: string;
}

export const AuditionInstructionsEmail = ({
  name,
}: AuditionInstructionsEmailProps) => (
  <Html>
    <Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `@font-face { font-family: 'Adversal'; src: url('https://synthetica.film/fonts/adversal.otf') format('opentype'); font-weight: 400; font-style: normal; }`,
        }}
      />
    </Head>
    <Preview>SYNTHETICA — Audition Instructions</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={title}>SYNTHETICA</Heading>
        <Hr style={divider} />

        <Text style={greeting}>Hi {name},</Text>

        <Text style={paragraph}>
          Thank you for registering your interest in auditioning for SYNTHETICA
          , a short film produced by Cardiff Film Production Society.
        </Text>

        <Section style={instructionBox}>
          <Heading as="h2" style={instructionTitle}>
            Audition Instructions
          </Heading>

          <Text style={paragraph}>
            During your audition, you will be asked to read an excerpt from the script. You can view the script excerpt here:{" "}
            <Link
              href="https://synthetica.film/docs/audition-excerpt.pdf"
              style={link}
            >
              Audition Script Excerpt (PDF)
            </Link>
            . Please prepare as much as you can beforehand if you have the time!
          </Text>

          <Text style={highlightParagraph}>
            If you are able to audition in person, that would be preferred.
            Please email us at filmproduction@cardiff.ac.uk to arrange a time.
          </Text>

          <Text style={paragraph}>
            If an in-person audition is not possible, it is perfectly alright to record a self-tape
            and upload it to YouTube (unlisted is fine). Then email the YouTube
            link to:
          </Text>

          <Text style={emailLink}>
            <Link href="mailto:filmproduction@cardiff.ac.uk" style={link}>
              filmproduction@cardiff.ac.uk
            </Link>
          </Text>

          <Text style={paragraph}>
            In your email, please include your full name and the role(s) you are
            auditioning for.
          </Text>
        </Section>

        <Hr style={divider} />

        <Text style={paragraph}>
          We look forward to seeing your audition. If you have any questions,
          feel free to reply to this email.
        </Text>

        <Text style={signature}>
          Best,
          <br />
          The SYNTHETICA Team
        </Text>

        <Hr style={divider} />

        <Section style={footerSection}>
          <Img
            src="https://synthetica.film/images/fps_logo.png"
            alt="Cardiff Film Production Society"
            width="120"
            style={footerLogo}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

AuditionInstructionsEmail.PreviewProps = {
  name: "Ada",
} as AuditionInstructionsEmailProps;

export default AuditionInstructionsEmail;

const main = {
  backgroundColor: "#000000",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#0a0a0a",
  border: "1px solid #1a1a1a",
  borderRadius: "4px",
  margin: "0 auto",
  padding: "40px",
  maxWidth: "560px",
};

const title = {
  fontFamily: "Adversal, Helvetica, Arial, sans-serif",
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "400" as const,
  letterSpacing: "0.3em",
  textAlign: "center" as const,
  margin: "0 0 20px",
};

const divider = {
  borderColor: "#222222",
  margin: "24px 0",
};

const greeting = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#e4e4e7",
  fontSize: "16px",
  fontWeight: "300" as const,
  lineHeight: "1.6",
};

const paragraph = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#a1a1aa",
  fontSize: "15px",
  fontWeight: "300" as const,
  lineHeight: "1.7",
  margin: "12px 0",
};

const highlightParagraph = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#d4d4d8",
  fontSize: "15px",
  fontWeight: "300" as const,
  lineHeight: "1.7",
  margin: "16px 0",
  borderLeft: "2px solid #3f3f46",
  paddingLeft: "16px",
};

const instructionBox = {
  backgroundColor: "#111111",
  border: "1px solid #1a1a1a",
  borderRadius: "4px",
  padding: "24px",
  margin: "24px 0",
};

const instructionTitle = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "400" as const,
  letterSpacing: "0.15em",
  textAlign: "center" as const,
  margin: "0 0 16px",
  textTransform: "uppercase" as const,
};

const emailLink = {
  textAlign: "center" as const,
  margin: "12px 0",
};

const link = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "400" as const,
  textDecoration: "underline",
  textUnderlineOffset: "4px",
};

const signature = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  color: "#a1a1aa",
  fontSize: "15px",
  fontWeight: "300" as const,
  lineHeight: "1.7",
  margin: "20px 0",
};

const footerSection = {
  textAlign: "center" as const,
  padding: "8px 0 0",
};

const footerLogo = {
  margin: "0 auto",
  opacity: 0.6,
};
