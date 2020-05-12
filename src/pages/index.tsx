import React, { useState } from "react";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { colors } from "../global-style";
import App from "../components/app";

export default () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? colors.light : colors.dark}>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{ lang: "en-US" }}
        title="Bart Wijnants"
        meta={[
          { name: `description`, content: "About Bart Wijnants" },
          { property: `og:title`, content: "Bart Wijnants" },
          { property: `og:description`, content: "About Bart Wijnants" },
          { property: `og:type`, content: `website` },
          { name: `twitter:card`, content: `summary` },
          { name: `twitter:creator`, content: "Bart Wijnants" },
          { name: `twitter:title`, content: "Bart Wijnants" },
          { name: `twitter:description`, content: "About Bart Wijnants" },
        ]}
      />
      <App theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};
