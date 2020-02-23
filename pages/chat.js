import { Layout } from "Component/Layout";
import Ball from "Component/Ball";
import { TopHeader } from "Component/Header";
import { Grid2 } from "Component/Grid";
import { ContactCard } from "Component/Card";

const Chat = () => {
  return (
    <Layout>
      <TopHeader>
        <Ball />
        <h2>Chat</h2>
      </TopHeader>
      <Grid2>
        <section></section>
        <section>
          <h3>Team mate</h3>
          <ContactCard>
            <ul>
              <li>
                <img
                  className="profile"
                  src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png"
                  alt="profile"
                />
                <span className="role">CEO</span> 한승민
              </li>
              <li>
                <img
                  className="profile"
                  src="https://i.ya-webdesign.com/images/headache-clipart-tension-man-24.png"
                  alt="profile"
                />
                <span className="role">Developer</span> 홍진백
              </li>
            </ul>
          </ContactCard>
        </section>
      </Grid2>
    </Layout>
  );
};

export default Chat;
