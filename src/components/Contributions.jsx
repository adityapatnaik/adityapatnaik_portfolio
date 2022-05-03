import SectionLayout from "../HOC/SectionLayout";
import contributionsImg from "../Images/contributions.png";

const Contributions = () => {
  return (
    <SectionLayout
      heroImg={contributionsImg}
      alt={"Businessman"}
      heading="My Contributions"
      items={[
        "I am responsible for developing end to end fullstack J2EE Spring MVC, Spring Boot, Angular and React, applications at Infosys.",
        " As a feature lead, I was responsible for delivering seven trending features in collaboration with the development, design and testing teams for ISKCON Bangalore’s flagship Android & iOS App, FOLK App. Tech Stack: Flutter, Firebase, Google App Engine, Cloud Pubsub, PostgreSQL, BigQuery, BigTable(as Data Warehouse).",
        "My articles and helpful posts have been read by over 2 million people on medium and stackoverflow."
      ]}
      component="textbox"
    />
  );
};

export default Contributions;
