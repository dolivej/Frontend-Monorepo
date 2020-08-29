import "@locnest/component-library/lib/styles/componentstyles.sass";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "./index.css";

import { graphql } from "gatsby";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ScrollOut from "scroll-out";
import React from "react";
import { useState, useEffect } from "react";
import { timeTracker, getMax } from "../data/helperMethods";

import {
  Pricing,
  PostPreview,
  Collection,
  LogoShowcase,
  Context,
  FAQ,
  ExpandableTag,
  Slider,
  DataBox,
} from "@locnest/component-library";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Timer from "../components/Timer";
import Chatbot from "../components/Chatbot";
import Quote from "../components/quote";

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

import { mySkills, myLogos } from "../data/index";
import Profile from "../data/pictures/profile.png";
import divider from "../data/pictures/divider.svg";
import landingImg from "../data/pictures/background1.svg";
import loadtime from "../data/pictures/loadtime.png";
import dependancyCalls from "../data/pictures/dependancyCalls.png";
import exceptions from "../data/pictures/exceptions.png";
import userFlowImg from "../data/pictures/UserFlow.png";
import userAmount from "../data/pictures/UserAmount.png";
import eventsAmount from "../data/pictures/eventsAmount.png";
import user from "../data/pictures/user.svg";
import data from "../data/pictures/data.svg";
import learning from "../data/pictures/learning.svg";
import siteHealthAnalytics from "../data/pictures/siteHealthAnalytics.svg";
import userAnalytics from "../data/pictures/userAnalytics.svg";
import example from "../data/pictures/example.svg";
import divider2 from "../data/pictures/divider2.svg";

let tagsConst = [
  {
    tagName: "React",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon: "https://www.drupal.org/files/project-images/react.png",
    size: 2,
    tagColor: "#00bae3",
    textColor: "white",
  },
  {
    tagName: "Gatsby",
    tagLink:
      "https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element",

    icon:
      "data:image/png;base64,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",
    size: 2,
    tagColor: "#860ac9",
    textColor: "white",
  },
];

const Template = (props: any) => {
  return (
    <div style={{ gridArea: props.gridId, width: "100%", height: "100%" }}>
      <PostPreview {...props.data} />
    </div>
  );
};

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ScrollOut({
      once: true,
    });
  }, []);

  return (
    <Layout>
      <SEO title="About" lang="en" />
      <Context.Consumer>
        {({ logger, userFlow, setUserFlow }: any) => {
          const logButtonClick = (name: string, path: string) => {
            setTimeout(function() {
              if (logger.loggerService) {
                userFlow.push({
                  name: "Clicked Button",
                  properties: { buttonName: name, path: path, group: "test" },
                });
                setUserFlow(userFlow);
                logger.loggerService.trackEvent({
                  name: "Clicked Button",
                  properties: { buttonName: name, path: path, group: "test" },
                });
              }
            }, 4000);
          };

          const sectionView = (
            name: string,
            duration: number,
            loggerTemp: any
          ) => {
            if (loggerTemp.loggerService) {
              userFlow.push({
                name: "Viewed " + name,
                properties: { duration: duration, group: "test" },
              });
              setUserFlow(userFlow);
              loggerTemp.loggerService.trackEvent({
                name: "Viewed " + name,
                properties: { duration: duration, group: "test" },
              });
            }
          };

          const timerStart = (loggerTemp: any) => {
            let time = 0;
            let landingTime = 0;
            let skillsTime = 0;
            let projectsTime = 0;
            let analyticsTime = 0;

            const incrementTimer = () => {
              time = time + 1;
              if (time > 3600) {
                time = 0;
              }
              //console.log(time)
              landingTime = timeTracker(
                time,
                landingTime,
                "landing",
                (value: any) => {
                  sectionView("landing", value, loggerTemp);
                }
              );
              skillsTime = timeTracker(
                time,
                skillsTime,
                "skills",
                (value: any) => {
                  sectionView("skills", value, loggerTemp);
                }
              );
              projectsTime = timeTracker(
                time,
                projectsTime,
                "projects",
                (value: any) => {
                  sectionView("projects", value, loggerTemp);
                }
              );
              analyticsTime = timeTracker(
                time,
                analyticsTime,
                "analytics",
                (value: any) => {
                  sectionView("analytics", value, loggerTemp);
                }
              );
            };
            setInterval(incrementTimer, 1000);
          };

          return (
            <div style={{ backgroundColor: "white" }}>
              {logger.loggerService && (
                <Timer runFunction={timerStart} loggerTemp={logger} />
              )}

              <div id="landing">
                <section
                  className="hero is-medium is-primary"
                  style={{
                    height: "90vh",
                    width: "99vw",
                    background:
                      "url(" + landingImg + ") no-repeat center center",
                    WebkitBackgroundSize: "cover",
                    MozBackgroundSize: "cover",
                    OBackgroundSize: "cover",
                  }}
                >
                  <Slider
                    color="white"
                    thickness="2px"
                    slides={[
                      <div className="hero-body-custom">
                        <div
                          className="container"
                          data-scroll
                          style={{ padding: "20px" }}
                        >
                          <div
                            className="columns mobileContainer"
                            style={{
                              backgroundColor: "white",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                              borderRadius: "5px",
                            }}
                          >
                            <div
                              className="column is-5 mobileCenter"
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={Profile}
                                className="imgMobile"
                                style={{
                                  border: "solid 1px white",
                                  boxShadow:
                                    "2px 4px 23px -1px rgba(0,0,0,0.2)",
                                }}
                              />
                            </div>
                            <div className="column">
                              <div
                                className="landingText"
                                style={{
                                  height: "300px",
                                }}
                              >
                                <h1
                                  className="title is-1"
                                  style={{ color: "black" }}
                                >
                                  Hi, im David.
                                </h1>
                                <br />
                                <h2
                                  className="subtitle is-3"
                                  style={{ color: "black", marginTop: "-20px" }}
                                >
                                  <b
                                    className="is-primary-background"
                                    style={{
                                      padding: "5px",
                                      lineHeight: 1.3,
                                    }}
                                  >
                                    User Focused and Data Driven.
                                  </b>
                                </h2>
                                <div className="columns">
                                  <div
                                    className="column is-2"
                                    style={{ minWidth: "135px" }}
                                  >
                                    {typeof window !== "undefined" &&
                                      ScrollLink && (
                                        <ScrollLink
                                          activeClass="skills"
                                          to="skills"
                                          spy={true}
                                          smooth={true}
                                          offset={100}
                                          duration={1000}
                                        >
                                          <button
                                            className="is-primary is-rounded button"
                                            onClick={() => {
                                              logButtonClick(
                                                "landing-skills",
                                                "/#skills"
                                              );
                                            }}
                                          >
                                            My Skills
                                          </button>
                                        </ScrollLink>
                                      )}
                                  </div>
                                  <div
                                    className="column is-2"
                                    style={{ minWidth: "135px" }}
                                  >
                                    {typeof window !== "undefined" &&
                                      ScrollLink && (
                                        <ScrollLink
                                          activeClass="projects"
                                          to="projects"
                                          spy={true}
                                          smooth={true}
                                          offset={100}
                                          duration={1000}
                                        >
                                          <button
                                            className="is-primary is-rounded button is-outlined"
                                            onClick={() => {
                                              logButtonClick(
                                                "landing-projects",
                                                "/#projects"
                                              );
                                            }}
                                          >
                                            My Projects
                                          </button>
                                        </ScrollLink>
                                      )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Brandon Yanuziello"
                          img="https://mma.prnewswire.com/media/944656/Locnest_Is_Toronto_the_next_Switzerland____Locnest_says_Yes___an.jpg?p=twitter"
                          quote={
                            <p>
                              One of the best things about David is his{" "}
                              <b
                                style={{
                                  backgroundColor: "#fad052",
                                }}
                              >
                                ability to understand business value
                              </b>{" "}
                              and how technology helps drive that value . With
                              minimal requirements and design he was{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                able to produce high quality components and
                                delivered a vast array of features that will
                                help us drive our business forward.
                              </b>{" "}
                            </p>
                          }
                          title="Locnest - Senior Developer"
                        />
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Chris Lynk"
                          img="https://pbs.twimg.com/profile_images/1267848304093691904/w5v5Ny_F_400x400.png"
                          quote={
                            <p>
                              David is{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                an excellent learner and was able to come up to
                                speed quickly
                              </b>{" "}
                              on the various technologies we work with despite
                              being a relatively junior co-op student. He{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                integrated well into our office culture and was
                                able to leverage the relationships he has built
                              </b>{" "}
                              to progress on his objectives.
                            </p>
                          }
                          title="IBM Cloud - Platform UI Development Manager"
                        />
                      </div>,
                      <div
                        className="hero-body-custom"
                        style={{ marginTop: "-60px" }}
                      >
                        <Quote
                          name="Jason Zhang"
                          img="https://www.imaginecommunications.com/sites/default/files/media-images/imagine_running_man.png"
                          quote={
                            <p>
                              David showed{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                excellent performance
                              </b>{" "}
                              during his work term. He understood his job duties
                              and picked up the skills/technology very quickly
                              and was{" "}
                              <b style={{ backgroundColor: "#fad052" }}>
                                able to complete tasks with a little guidelines.
                              </b>
                            </p>
                          }
                          title="Imagine Communications - Senior Developer"
                        />
                      </div>,
                    ]}
                  />
                </section>
              </div>

              <div
                id="skills"
                style={{
                  textAlign: "center",
                  marginTop: "5em",
                  paddingBottom: "2em",
                }}
              >
                <div
                  style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    borderTop: "solid 1px #fad052",
                    borderBottom: "solid 1px #fad052",
                    padding: "3vw",
                  }}
                >
                  <div id="aboutText" data-scroll>
                    <h3 className="title is-2">About Me</h3>
                    <section className="section">
                      <div className="container has-text-centered py-4">
                        <div className="columns">
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={user} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">User Focused</h4>
                            <p className="block">
                              In my eyes the key to a great product lies within
                              a great understanding of the user.
                            </p>
                          </div>
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={data} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">Data Driven</h4>
                            <p className="block">
                              I love to unlock insights within data and use data
                              to guide decisions and validate success!
                            </p>
                          </div>
                          <div className="column">
                            <div className="level">
                              <div className="level-item">
                                <figure className="image is-128x128">
                                  <img src={learning} alt="" />
                                </figure>
                              </div>
                            </div>
                            <h4 className="title is-4">Always Growing</h4>
                            <p className="block">
                              The more I learn, the more I realize how little I
                              know. Every day I improve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div
                    id="aboutSkills"
                    data-scroll
                    style={{ marginTop: "50px" }}
                  >
                    <Pricing {...mySkills} />
                  </div>

                  <div id="aboutJobs" data-scroll style={{ marginTop: "50px" }}>
                    <LogoShowcase {...myLogos} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "url(" + divider2 + ") no-repeat center center",
                  backgroundSize: "cover",
                  height: "1300px",
                  width: "100%",
                  overflow: "hidden",
                  WebkitBackgroundSize: "cover",
                  MozBackgroundSize: "cover",
                  OBackgroundSize: "cover",
                  WebkitBoxShadow: "2px 0px 30px 13px rgba(81,81,81,0.55)",
                  boxShadow: "2px 0px 30px 13px rgba(81,81,81,0.55)",
                  marginTop: "5em",
                }}
              >
                <div id="projects" style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "1200px",
                      marginTop: "20px",
                      paddingBottom: "70px",
                      marginBottom: "20px",
                      textAlign: "center",
                      padding: "10%",
                    }}
                  >
                    <h1
                      data-scroll
                      className="title is-2"
                      style={{
                        backgroundColor: "white",
                        padding: "10px",
                        maxWidth: "300px",
                        margin: "0 auto",
                        marginBottom: "20px",
                        borderRadius: "7px",
                      }}
                    >
                      Projects
                    </h1>
                    <div
                      data-scroll
                      style={{
                        height: "95%",
                        width: "100%",
                        display: "inline-block",
                        maxWidth: "1175px",
                      }}
                    >
                      <Collection
                        sizemap="'a b' 'a b'"
                        minMobileHeight="520px"
                        data={[
                          {
                            data: {
                              tags: tagsConst,
                              image:
                                "https://i.ibb.co/WFNZqj0/screely-1597790880239.png",
                              brief: "Optimizing customer service.",
                              title: "Chatbot",
                              about:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
                              links: [
                                { text: "Read More", link: "link" },
                                { text: "Github", link: "link" },
                              ],
                            },
                            gridId: "a",
                          },
                          {
                            data: {
                              tags: tagsConst,
                              image:
                                "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/750-X-400-2x.jpg",
                              brief: "Brief Description",
                              title: "Project Name",
                              about:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
                              links: [
                                { text: "Read More", link: "link" },
                                { text: "Github", link: "link" },
                              ],
                            },
                            gridId: "b",
                          },
                        ]}
                        spacing={"20px"}
                        template={Template}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="analytics"
                style={{
                  textAlign: "center",
                  marginTop: "5em",
                  minHeight: "100vh",
                }}
              >
                <div
                  style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    borderTop: "solid 1px #fad052",
                    padding: "10%",
                    textAlign: "center",
                  }}
                  data-scroll
                >
                  <div style={{ maxWidth: "1100px", marginBottom: "100px" }}>
                    <h3 className="title is-2">Site Analytics</h3>
                    <p>
                      After working on the analytics team at IBM I came to
                      realize the buisness value that analytics provide. Being
                      able to track user flows, site performance and API
                      requests allows for you to guide and quantify the growth
                      of your website and buisness.
                      <br />
                      <br />
                      While I have worked with many analytics tools like
                      Amplitude and New Relic, in my own site I used Microsofts
                      App Insights to grow my portfolio and also because it
                      allows me to track both{" "}
                      <strong> Site Health Analytics </strong> and{" "}
                      <strong> User Experience Analytics.</strong>
                    </p>
                  </div>

                  <FAQ
                    picture={userAnalytics}
                    title="User Flow Analytics"
                    data-scroll
                  >
                    <p>
                      Track metrics like{" "}
                      <strong>
                        {" "}
                        # of monthly users, # visits per page, # user events
                        (like button clicks), user flows (like checkout or
                        signup flows) .
                      </strong>
                      <br />
                      <br />
                      Metrics like these can help you identify where design
                      changes need to be made to increase conversions, visits or
                      time spent on sections.
                    </p>

                    <h3
                      className="title is-4"
                      style={{ paddingTop: "70px", color: "#fad052" }}
                    >
                      {" "}
                      Stats for August:{" "}
                    </h3>
                    <section className="info-tiles">
                      <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={userFlowImg} />
                            </figure>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={userAmount} />
                            </figure>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <figure className="is-square">
                              <img src={eventsAmount} />
                            </figure>
                          </article>
                        </div>
                      </div>
                    </section>
                  </FAQ>
                  <FAQ
                    picture={siteHealthAnalytics}
                    title="Site Health Analytics"
                    data-scroll
                  >
                    <div>
                      <p>
                        Track metrics like{" "}
                        <strong>
                          {" "}
                          page/component load times, # requests, # of failed
                          requests, exceptions and errors .
                        </strong>
                        <br />
                        <br />
                        Metrics like these can help you identify where code
                        needs to be optimized or you can use it to set up alerts
                        in case of 3rd part outages or errors.
                      </p>

                      <h3
                        className="title is-4"
                        style={{ paddingTop: "70px", color: "#fad052" }}
                      >
                        {" "}
                        Stats for August:{" "}
                      </h3>
                      <section className="info-tiles">
                        <div className="tile is-ancestor has-text-centered">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={loadtime} />
                              </figure>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={dependancyCalls} />
                              </figure>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <figure className="is-square">
                                <img src={exceptions} />
                              </figure>
                            </article>
                          </div>
                        </div>
                      </section>
                    </div>
                  </FAQ>
                  <FAQ
                    picture={example}
                    title="Example: Your Live User Flow"
                    data-scroll
                  >
                    <p>
                      <strong>
                        If you do not have adblock, below you should see some
                        live tracking of your journey on my site!
                      </strong>
                    </p>
                    <br />
                    <div>
                      <section className="info-tiles">
                        <div className="tile is-ancestor has-text-centered">
                          <div className="tile is-parent">
                            <DataBox
                              title="Most Viewed Section"
                              timeFrame="This Session"
                              isNegative={false}
                              value={"" + getMax(userFlow, "views").name}
                              subtitle="Number of Views (Sum)"
                              showArrow={false}
                              subValue={"" + getMax(userFlow, "views").value}
                            />
                          </div>
                          <div className="tile is-parent">
                            <DataBox
                              title="Longest Viewed Section"
                              timeFrame="This Session"
                              isNegative={false}
                              value={"" + getMax(userFlow, "time").name}
                              subtitle="Time Viewed (Max)"
                              showArrow={false}
                              subValue={
                                "" + getMax(userFlow, "time").value + " seconds"
                              }
                            />
                          </div>
                        </div>
                      </section>

                      <div style={{ paddingTop: "30px" }}>
                        <div
                          className="customScrollBar"
                          style={{
                            maxWidth: "1000px",
                            height: "150px",
                            borderTop: "solid 2px black",
                            borderBottom: "solid 2px black",
                            boxShadow:
                              "inset -1px 2px 5px 0px rgba(0,0,0,0.75)",

                            overflowX: "scroll",
                            overflowY: "hidden",
                          }}
                        >
                          <div
                            style={{
                              width: (userFlow.length + 1) * 200 + "px",
                              paddingTop: "60",
                            }}
                          >
                            {userFlow.map((event: any, index: number) => {
                              let icon;
                              let detail;
                              let color;

                              if (event.name === "Clicked Nav") {
                                icon = "fa-route";
                                detail = '"' + event.properties.path + '"';
                                color = "yellow";
                              } else if (event.name === "Clicked Button") {
                                icon = "fa-hand-point-down";
                                detail =
                                  '"' + event.properties.buttonName + '"';
                                color = "orange";
                              } else if (event.name.includes("Viewed")) {
                                icon = "fa-eye";
                                detail = event.properties.duration + " seconds";
                                color = "lightblue";
                              }

                              return (
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    paddingTop: "40px",
                                  }}
                                >
                                  <ExpandableTag
                                    picture={icon}
                                    title={event.name}
                                    backgroundColor={color}
                                  >
                                    {detail}
                                  </ExpandableTag>
                                  {index !== userFlow.length && (
                                    <i
                                      className="fa fa-arrow-right"
                                      style={{ padding: "5px" }}
                                    />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FAQ>
                </div>
              </div>

              <div style={{ position: "sticky", bottom: "0" }}>
                <Chatbot
                  messageList={[]}
                  popupRound={"4px 4px 0px 0px"}
                  iconRound={"25%"}
                />
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    </Layout>
  );
};

export default IndexPage;
