import React from "react";
import Container from "./Container.jsx";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="py-16">
      <Container>
        <div className=" flex flex-col gap-11">
          <div>
            <h4 className="text-2xl font-medium mb-4">Introduction</h4>
            <p className=" text-zinc-800">
              Paradise Aesthetic Clinic is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our clinic, website, or
              use our services. By using our services, you agree to the
              collection and use of information in accordance with this policy.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">
              Information We Collect
            </h4>
            <ol
              className=" ms-6 flex flex-col gap-2 text-zinc-800 leading-6"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Personal Information: We may collect personal information such
                as your name, address, email, phone number, date of birth, and
                payment information when you register for services, book
                appointments, or make payments.
              </li>
              <li>
                Health Information: We may collect health-related information
                that you voluntarily provide during consultations or treatments
                to ensure personalized and safe care.
              </li>
              <li>
                Technical Data: We may collect data about your interaction with
                our website, including IP addresses, browser type, pages
                visited, and other related data.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">
              How We Use Your Information
            </h4>
            <p className="text-zinc-800 mb-2">
              We use the information collected for various purposes, including:
            </p>
            <ol
              className=" ms-6 flex flex-col gap-2 text-zinc-800 leading-6"
              style={{ listStyleType: "disc" }}
            >
              <li>To provide and improve our services</li>
              <li>To schedule and manage appointments</li>
              <li>
                To communicate with you regarding your treatments or
                appointments
              </li>
              <li>To maintain accurate health records</li>
              <li>To comply with legal and regulatory requirements</li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">
              Sharing Your Information
            </h4>
            <p className="text-zinc-800 mb-2">
              We may share your information with third parties only under the
              following circumstances:
            </p>
            <ol
              className=" ms-6 flex flex-col gap-2 text-zinc-800 leading-6"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Service Providers: We may share data with third-party service
                providers who help us operate our clinic, such as payment
                processors, scheduling platforms, and IT services.
              </li>
              <li>
                Legal Requirements: We may disclose your information if required
                by law, regulation, or legal process to protect our rights or
                the safety of our patients, staff, and the public.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Data Security</h4>
            <p className="text-zinc-800">
              We implement appropriate security measures to protect your
              information from unauthorized access, disclosure, or misuse. While
              we strive to use commercially acceptable means to protect your
              data, no method of transmission over the internet is entirely
              secure.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Your Rights</h4>
            <p className="text-zinc-800">
              Depending on your jurisdiction, you may have rights regarding your
              personal information, such as the right to access, correct, or
              delete your data. If you would like to exercise these rights,
              please contact us at the contact details provided below.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">
              Changes to This Privacy Policy
            </h4>
            <p className="text-zinc-800">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with an updated “Last Updated” date. We
              encourage you to review this policy regularly.
            </p>
          </div>

          <div>
            <p className=" mb-4">
              If you have any questions or concerns about this Privacy Policy or
              your data, please contact us at:
            </p>
            <div className="text-zinc-800 font-medium flex flex-col gap-1">
              <p>Paradise Aesthetic Clinic:</p>
              <Link>No-305, Pyay Road, Diamond Condo, Yangon</Link>
              <Link to="mailto:paradise2020@gmail.com">
                paradise2020@gmail.com
              </Link>
              <Link to="tel:+95966448752">+95966448752</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Content;
