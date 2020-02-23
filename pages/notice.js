import { Layout } from "Component/Layout";
import { TopHeader } from "Component/Header";
import Ball from "Component/Ball";

const Notice = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>Notice</h2>
      </TopHeader>
    </Layout>
  );
};

export default Notice;
