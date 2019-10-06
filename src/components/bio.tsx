import React from "react";
import Section from "./section";
import Subtitle from "./subtitle";
import Paragraph from "./paragraph";
import Blockquote from "./blockquote";
import ExternalLink from "./external-link";

const Bio = () => (
  <Section>
    <Subtitle>About me</Subtitle>
    <Paragraph>
      As{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Mick_Jagger">
        Mick Jagger
      </ExternalLink>{" "}
      sang it in{" "}
      <ExternalLink href="https://en.wikipedia.org/wiki/Sympathy_for_the_Devil">
        Sympathy For The Devil
      </ExternalLink>
      :
    </Paragraph>
    <Blockquote>
      Please allow me to introduce myself. I'm a man of wealth and taste.
    </Blockquote>
    <Paragraph>
      Well maybe just the first sentence. I'm not quite wealthy and a lot of
      people will strongly advice against my taste.
    </Paragraph>
    <Paragraph>
      I'm Bart, father of 2 boys, developer by trade, retired ice hockey player
      and knowledge sponge.
    </Paragraph>
    <Paragraph>
      I try to live by the{" "}
      <ExternalLink href="https://people.apache.org/~fhanik/kiss.html">
        KISS
      </ExternalLink>{" "}
      principle but sometimes I keep it more stupid than simple.
    </Paragraph>
    <Paragraph>Peace out.</Paragraph>
  </Section>
);

export default Bio;
