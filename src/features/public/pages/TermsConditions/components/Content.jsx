import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="py-16">
      <Container>
        <div className=" flex flex-col gap-11">
          <div>
            <p className="text-zinc-800">
              Please read these Terms & Conditions carefully before using our
              website and services. By accessing or using our site, you agree to
              be bound by these terms.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-medium mb-4">General Information</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Paradise Aesthetic Clinic is a provider of aesthetic and
                wellness services. All information provided on this website is
                for informational purposes only and is not intended as a
                substitute for professional medical advice, diagnosis, or
                treatment.
              </li>
              <li>
                Any reliance you place on the information provided on this site
                is strictly at your own risk.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Medical Disclaimer</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Our services and treatments are provided by qualified
                professionals; however, results may vary for each individual.
              </li>
              <li>
                We recommend consulting with your physician or a qualified
                health provider before beginning any new treatment.
              </li>
              <li>
                We recommend consulting with your physician or a qualified
                health provider before beginning any new treatment.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Medical Disclaimer</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Appointments can be scheduled online, over the phone, or in
                person. We kindly request at least 24-hour notice for
                cancellations or rescheduling.
              </li>
              <li>
                Late cancellations may be subject to a fee or loss of deposit.
                Failure to attend an appointment without prior notification may
                result in a cancellation fee or forfeiture of any pre-paid
                amount.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Privacy Policy</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                We are committed to protecting your privacy and personal
                information. Please review our Privacy Policy to understand how
                we collect, use, and safeguard your data.
              </li>
              <li>
                By using our website and services, you consent to the terms of
                our Privacy Policy.
              </li>
            </ol>
          </div>

          <div>
            <h4 className="text-2xl font-medium mb-4">Privacy Policy</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                All content on this website, including text, graphics, images,
                and software, is the property of Paradise Aesthetic Clinic or
                our content suppliers.
              </li>
              <li>
                You may not reproduce, duplicate, copy, sell, resell, or exploit
                any portion of the site or its content without express written
                permission from Paradise Aesthetic Clinic.
              </li>
            </ol>
          </div>

          <div>
            <h4 className=" text-2xl font-medium mb-4">
              Changes to Terms & Conditions
            </h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Paradise Aesthetic Clinic reserves the right to modify these
                Terms & Conditions at any time. Any changes will be posted on
                this page, and your continued use of our services indicates your
                acceptance of the new terms.
              </li>
            </ol>
          </div>

          <div>
            <h4 className=" text-2xl font-medium mb-4">Governing Law</h4>
            <ol
              className="ms-6 flex flex-col gap-2 leading-6 text-zinc-800"
              style={{ listStyleType: "disc" }}
            >
              <li>
                These Terms & Conditions are governed by the English law and any
                disputes will be subject to the jurisdiction of the courts in
                that region.
              </li>
            </ol>
          </div>

          <div>
            <p className="text-zinc-800">
              For any questions about these Terms & Conditions, please contact
              us at{" "}
              <Link className="font-medium" to="tel:+95966448752">
                +95966448752
              </Link>{" "}
              . Thank you for choosing Paradise Aesthetic Clinic.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Content;
