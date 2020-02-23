import { Layout } from "Component/Layout";
import { TopHeader } from "Component/Header";
import Ball from "Component/Ball";
import { Grid } from "Component/Grid";
import { TodoCard } from "Component/Card";

const Todo = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>To do</h2>
      </TopHeader>
      <Grid>
        <section>
          <h3>Plan</h3>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Developer</span> Meeting for next
                version.
              </h3>
            </header>
            <p>
              <span className="date-type">At...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
        </section>
        <section>
          <h3>Active</h3>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Developer</span> Meeting for next
                version.
              </h3>
            </header>
            <p>
              <span className="date-type">At...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
        </section>
        <section>
          <h3>Done</h3>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Developer</span> Meeting for next
                version.
              </h3>
            </header>
            <p>
              <span className="date-type">At...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
          <TodoCard>
            <header>
              <h3>
                <span className="role">Developer</span> Meeting for next
                version.
              </h3>
            </header>
            <p>
              <span className="date-type">At...</span> 2/13 월요일 03시 30분
            </p>
          </TodoCard>
        </section>
      </Grid>
    </Layout>
  );
};

export default Todo;
