import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
      </Head>
      <AppLayout>
        {"sedfdfdulki"}
        <Component />
        {/* app.js 넥스트에서 넣어주는 프롭스가 컴포넌트로 받음 페이지스에 있는거 * 한번에 app.js로*/}
      </AppLayout>
    </>
  );

  NodeBird.propTypes = {
    Component: PropTypes.node,
  };
};

export default NodeBird;
