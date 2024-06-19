import Section from "./Section";
import Heading from "./Heading";

const About = () => {
  return (
    <Section id="about" className="relative py-5 lg:py-20">
      <div className="container">
        <Heading title="Rules and Regulations" />
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold">Competition Guidelines</h2>

            <h3 className="text-lg font-semibold mt-4">Eligibility:</h3>
            <p className="mt-2">
              The competition is open to college students and higher secondary students. Students from any field of study and year of study are eligible to participate.
            </p>

            <h3 className="text-lg font-semibold mt-4">Team Formation:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Teams must consist of a minimum of 2 members (including 1 team leader) and a maximum of 4 members.</li>
              <li>Teams must work on a single track; no mixing of tracks is allowed.</li>
              <li>Teams must consist of either school or college students only; mixed-category teams are prohibited.</li>
              <li>Participants without a team can use the EvoLUMIN Discord server to form teams.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Registration Details:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Registration closes on 11th July 2024 (Thursday)</li>
              <li>Registration must be done through Devfolio.</li>
              <li>Ensure that all registration details, including spelling and credentials, are accurate.</li>
              <li>Ensure that you provide a valid email and phone number for contact.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Idea Submission:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Ideation phase closes on 13th July 2024 (Saturday) at 11:59pm (IST).</li>
              <li>Each team can submit only one idea, which can be edited until the ideation phase closes.</li>
              <li>If multiple track submissions are made, only the most recent one will be evaluated.</li>
              <li>Participants are allowed to utilize a combination of domains to implement their solution.</li>
              <li>Reusing or resubmitting past work is strictly prohibited; teams found doing so will be disqualified.</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Submission Deadlines:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Late submissions will not be entertained.</li>
              <li>The provided PowerPoint (PPT) template should be used.</li>
              <li>The presentation may contain a maximum of 5 slides (excluding team details). It should include:</li>
              <ul className="list-disc list-inside ml-6">
                <li>Track and domain</li>
                <li>Problem statement</li>
                <li>Idea title</li>
                <li>Idea description (proposed solution)</li>
              </ul>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Important Dates:</h3>
            <ul className="list-disc list-inside mt-2">
              <li>Registration Deadline: 11th July 2024</li>
              <li>Ideation Phase Deadline: 13th July 2024</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Contact Information:</h3>
            <p className="mt-2">
              For any queries or additional information, please visit our Discord server.
            </p>

            <h3 className="text-lg font-semibold mt-4">Final Note:</h3>
            <p className="mt-2">
              We look forward to your innovative ideas and enthusiastic participation. This competition is a great opportunity to showcase your creativity, teamwork, and problem-solving skills. Best of luck to all participants!
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
};

export default About;
