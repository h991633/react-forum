import React from "react";
import moment from "moment";
import { Switch, Route, Link } from "react-router-dom";
import Forum from "./Forum.js";
import ForumList from "./ForumList.js";
import Login from "./Login.js";
import Logout from "./Logout.js";

import Register from "./Register.js";
// import LoginCheck from "./LoginCheck";
import { Layout, Menu, Divider,Result } from "antd";
import {
  FileTextOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.css";
import Article from "./Article.js";
function LoginCheck(props) {
  if (!props.isLogIn) {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/login" style={{ marginRight: 10 }}>
          登入
        </Link>
        /
        <Link style={{ marginLeft: 10 }} to="/register">
          註冊
        </Link>
      </div>
    );
  }
  if (props.isLogIn) {
    return (
      <div style={{ textAlign: "center" }}>
        <Link style={{ marginRight: 10 }} to="/addArticle">
          新增文章
        </Link>
        <Link style={{ marginLeft: 10 }} to="/logout" >
          登出
        </Link>
      </div>
    );
    
  }
  return "";
}
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [
        {
          category: "GongFu",
          article: [
            {
              title: "忍者村",
              content:
                "忍者是個古老的職業\n據傳日本隱藏著許多忍者村\n每個忍者村最強的領導可成為影 戰力非常高\n殺人於無形\n有這樣的特種部隊\n為何二戰還會輸？",
              id: 0,
              author: "霸哥",
              expiredDate: moment("2020-06-05 15:25"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
            {
              title: "少林寺",
              content:
                "武僧是個古老的職業\n據傳中國隱藏著許多少林寺\n每個少林寺最強的領導可成為方丈 戰力非常高\n殺人於無形\n有這樣的特種部隊\n為何二戰還會死傷慘重？",
              id: 1,
              author: "范鈞皓",
              expiredDate: moment("2020-06-05 15:26"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
          ],
        },
        {
          category: "Bluff",
          article: [
            {
              title: "女僕裝",
              content: `在人生的歷程中，女僕裝的出現是必然的。 現在，正視女僕裝的問題，是非常非常重要的。 因為，我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。 儘管如此，我們仍然需要對女僕裝保持懷疑的態度。 話雖如此，莎士比亞曾經提過，人的一生是短的，但如果卑劣地過這一生，就太長了。 這段話對世界的改變有著深遠的影響。 對於一般人來說，女僕裝究竟象徵著什麼呢? 司各特曾說過一句意義深遠的話，拌著眼淚的愛情是最動人的。 這段話讓我的心境提高了一個層次。 愛迪生曾經認為，我的人生哲學是工作，我要提示大自然的奧秘，並以此為人類造福。 我們在世的短暫一生中，我不知道還有什麼比這種服務更好的了。 這段話讓我的心境提高了一個層次。 我們不得不面對一個非常尷尬的事實，那就是，女僕裝改變了我的命運。 鄧拓告訴我們，越是沒有本領的就越加自命不凡。 這句話幾乎解讀出了問題的根本。 俗話說的好，掌握思考過程，也就掌握了女僕裝。 我們要從本質思考，從根本解決問題。 喬萬尼奧里相信，女人最可貴的兩種品質，那就是：辨別善惡的能力和羞恥心。 請諸位將這段話在心中默念三遍。`,
              id: 0,
              author: "霸哥",
              expiredDate: moment("2020-06-05 15:25"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
            {
              title: "前端網頁框架",
              content: `  蘇霍姆林斯基曾經說過，真正的教育是登上童年微妙的真相之巔。 這讓我的思緒清晰了。 前端網頁框架對我來說，已經成為了我生活的一部分。 總結來說，問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。 面對如此難題，我們必須設想周全。 我們不得不相信，我想，把前端網頁框架的意義想清楚，對各位來說並不是一件壞事。 我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。 從這個角度來看，既然，前端網頁框架的發生，到底需要如何實現，不前端網頁框架的發生，又會如何產生。 格比爾深信，廚師一多，反而做不出好的飯菜。 這不禁令我深思。 我們可以很篤定的說，這需要花很多時間來嚴謹地論證。 可是，即使是這樣，前端網頁框架的出現仍然代表了一定的意義。 現在，正視前端網頁框架的問題，是非常非常重要的。 因為，要想清楚，前端網頁框架，到底是一種怎麼樣的存在。 帶著這些問題，我們一起來審視前端網頁框架。 回過神才發現，思考前端網頁框架的存在意義，已讓我廢寢忘食。 若沒有前端網頁框架的存在，那麼後果可想而知。 我們要學會站在別人的角度思考。 前端網頁框架的存在，令我無法停止對他的思考。 前端網頁框架絕對是史無前例的。 薩迪曾經提到過，誰若想在厄運時得到援助，就應在平日待人以寬。 他會這麼說是有理由的。 在人生的歷程中，前端網頁框架的出現是必然的。 生活中，若前端網頁框架出現了，我們就不得不考慮它出現了的事實。 前端網頁框架因何而發生? 海涅在不經意間這樣說過，人生是疾病，世界是醫院，而死是我們的醫生。 這讓我對於看待這個問題的方法有了巨大的改變。 若無法徹底理解前端網頁框架，恐怕會是人類的一大遺憾。 德芳說過一句很有意思的話，毀於虛榮心的女性，比毀於愛情的還要多。 這段話讓我所有的疑惑頓時豁然開朗。 福爾斯特講過一段深奧的話，即將來臨的一天，比過去的一年更為悠長。 但願各位能從這段話中獲得心靈上的滋長。 這樣看來，前端網頁框架，到底應該如何實現。 一般來講，我們都必須務必慎重的考慮考慮。 儘管前端網頁框架看似不顯眼，卻佔據了我的腦海。 愛因斯坦曾經說過，人只有獻身於社會，才能找出那實際上是短暫而有風險的生命的意義。 這段話對世界的改變有著深遠的影響。 本人也是經過了深思熟慮，在每個日日夜夜思考這個問題。 前端網頁框架的出現，重寫了人生的意義。 不要先入為主覺得前端網頁框架很複雜，實際上，前端網頁框架可能比你想的還要更複雜。 看看別人，再想想自己，會發現問題的核心其實就在你身旁。 動機，可以說是最單純的力量。 

                                對我個人而言，前端網頁框架不僅僅是一個重大的事件，還可能會改變我的人生。`,
              id: 1,
              author: "范鈞皓",
              expiredDate: moment("2020-06-05 15:26"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
          ],
        },
        {
          category: "Joke",
          article: [
            {
              title: "[猜謎] 蘇軾的英文名字",
              content: "Sushi",
              id: 0,
              author: "霸哥",
              expiredDate: moment("2020-06-05 15:25"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
            {
              title: "[猜謎] 白狼死掉變什麼？",
              content: "西狼",
              id: 1,
              author: "范鈞皓",
              expiredDate: moment("2020-06-05 15:26"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
          ],
        },
        {
          category: "Gossip",
          article: [
            {
              title: "[問卦] 水冷扇到底有沒有效啊？",
              content:
                "最近台劇做工的人很夯\n老妹我平常每天都在演這部\n工地熱到爆汗\n花了幾千元買號稱冰風暴的水冷扇要給師傅們吹涼涼\n結果吹出來完全熱風啊\n比工地大電風扇還不涼有人買過真的吹出來是涼風的水冷扇嗎\n剛看另一款產品要先冷凍\n開電扇時候掛在電風扇後面\n但看評價也都說沒效\n有什麼降溫好物推薦呢\n",
              id: 0,
              author: "霸哥",
              expiredDate: moment("2020-06-05 15:25"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
            {
              title: "[問卦] 等ptt都變老人什麼板會最熱門呀？",
              content:
                "現在ptt 大部分應該都是壯年\n大概30-40歲最多吧～～\n如果再過個10-20年\n大家都變老了依然沒有新血加入\n什麼板會變熱門呢？\n大家會不會從幹譙主管變成幹譙菜鳥呢",
              id: 1,
              author: "范鈞皓",
              expiredDate: moment("2020-06-05 15:26"),
              commentList: [
                {
                  userId: "甲",
                  content: "test",
                  expiredDate: moment("2020-06-05 15:30"),
                },
                {
                  userId: "乙",
                  content: "測試",
                  expiredDate: moment("2020-06-05 15:50"),
                },
                {
                  userId: "丙",
                  content: "test",
                  expiredDate: moment("2020-06-05 16:30"),
                },
              ],
            },
          ],
        },
      ],
      members: [
        { account: "test", password: "123" ,gender:'男'},
        { account: "甲", password: "123" ,gender:'男'},
        { account: "乙", password: "123" ,gender:'男'},
        { account: "丙", password: "123" ,gender:'女'},
      ],
      isLogIn: false,
      nowLoginAccount: "",
      collapsed: false,
    };
  }
  doLogin = (account) => {
    this.setState((state) => ({ nowLoginAccount: account }));
    this.setState((state) => ({ isLogIn: true }));
  };
  doLogout=()=>{
    this.setState((state) => ({ isLogIn: false,nowLoginAccount: '', }))
  };
  doRegister = (newMember) => {
    this.setState((state) => ({ members: newMember }));
    var newMembers = this.state.members;
    newMembers.push(newMember);
    this.setState(() => ({ members: newMembers }));
    console.log(this.state)
  };
  newWriteArticle = (id, title, content) => {
    const category = id;
    const { total } = this.state;
    var categoryIndex = total.findIndex((item) => item.category === category);
    const articleId = total[categoryIndex].article.length;
    const author = this.state.nowLoginAccount;
    const expiredDate = moment();
    var newTotal = total.map((item, index) =>
      item.category === category
        ? {
            category: category,
            article: [
              ...item.article,
              {
                title,
                content,
                id: articleId,
                author,
                expiredDate,
                commentList: [],
              },
            ],
          }
        : item
    );
    this.setState(() => ({ total: newTotal }));
  };
  updateCommentList = (id, newCommentList) => {
    const { category, articleId } = id;
    const { total } = this.state;
    var categoryIndex = total.findIndex((item) => item.category === category);
    var newArticle = total[categoryIndex];
    newArticle.article[articleId].commentList = newCommentList;
    var newTotal = total.map((item) =>
      item.category === category ? newArticle : item
    );
    this.setState(() => ({ total: newTotal }));
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { total } = this.state;

    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" style={{ fontSize: 25, textAlign: "center" }}>
              <Link to="/" style={{ color: "white" }}>
                留言板
              </Link>
            </div>
            <LoginCheck isLogIn={this.state.isLogIn} />

            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                {this.state.nowLoginAccount} 
              </Menu.Item>
              {/* <Menu.Item key="2" icon={<FileTextOutlined />}>
                <Link to="./Article">1</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">2</Menu.Item>
                <Menu.Item key="4">3</Menu.Item>
                <Menu.Item key="5">4</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">5 1</Menu.Item>
                <Menu.Item key="8">6 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />} />*/}
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header
              className="site-layout-header"
              style={{ padding: 0, textAlign: "center" }}
            >
              期末Demo
            </Header>
            <Content style={{ margin: "0 16px" }}>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item></Breadcrumb.Item>
                <Breadcrumb.Item>
                  <HomeOutlined /> / Home
                </Breadcrumb.Item>
              </Breadcrumb> */}
              <br />
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <div>
                  <Switch>
                    <Route
                      exact
                      path="/addArticle"
                      component={() => (
                        <Article
                          // members={this.state.members}
                          newWriteArticle={this.newWriteArticle}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/login"
                      component={() => (
                        <Login
                          members={this.state.members}
                          doLogin={this.doLogin}
                        />
                      )}
                    />
                    <Route path="/logout" exact>
                      <Logout doLogout={this.doLogout}/>
                    </Route>
                    <Route
                      exact
                      path="/register"
                      component={() => (
                        <Register
                          members={this.state.members}
                          doRegister={this.doRegister}
                        />
                      )}
                    />
                    <Route
                      path="/:category/:articleId/"
                      component={(pathParams) => (
                        <Forum
                          account={this.state.nowLoginAccount}
                          isLogIn={this.state.isLogIn}
                          updateCommentList={this.updateCommentList}
                          total={total}
                          pathParams={pathParams}
                        />
                      )}
                    />
                    <Route
                      path="/:category/"
                      component={(pathParams) => (
                        <ForumList
                          updateCommentList={this.updateCommentList}
                          isLogIn={this.state.isLogIn}
                          total={total}
                          pathParams={pathParams}
                        />
                      )}
                    />
                    <Route path="/" exact>
                    
                      {/* <LoginCheck isLogIn={this.state.isLogIn} /> */}
                      <div>
                        <h2 style={{ color: "red" }}>論壇分類</h2>
                      </div>
                      {total.map((total) => {
                        return (
                          <div>
                            <Divider />
                            <span style={{ fontSize: "40px" }}>
                              <Link
                                key={total.category}
                                style={{ display: "block", padding: 5 }}
                                to={`/${total.category}`}
                              >
                                {total.category}
                              </Link>
                            </span>
                          </div>
                        );
                      })}
                    </Route>

                    <Route>
                                <Result
                                    status="404"
                                    title="404"
                                    subTitle="抱歉，這個頁面不存在"
                                    extra={
                                        <Link to="/" type="primary">
                                            回首頁
                                        </Link>
                                    }
                                />
                            </Route>
                  </Switch>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
