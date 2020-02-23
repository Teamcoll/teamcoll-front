import { Layout } from "Component/Layout";
import { TopHeader } from "Component/Header";
import Ball from "Component/Ball";

const Todo = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>To do</h2>
      </TopHeader>
    </Layout>
  );
};

export default Todo;
