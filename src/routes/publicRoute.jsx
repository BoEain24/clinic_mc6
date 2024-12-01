import { lazy } from "react";
import React from "react";

const IssuesDetailPage = lazy(() =>
  import("../features/public/pages/IssuesDetailPage")
);
const TreatmentsPage = lazy(() =>
  import("../features/public/pages/TreatmentsPage")
);
const TreatmentDetailPage = lazy(() =>
  import("../features/public/pages/TreatmentDetailPage")
);
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const BlogDetail = lazy(() => import("../features/public/pages/BlogDetail"));

const BookAppointmentPage = lazy(() =>
  import("../features/public/pages/BookAppointmentPage")
);
const DotorDetailPage = lazy(() =>
  import("../features/public/pages/DotorDetailPage")
);
const IssuesPage = lazy(() => import("../features/public/pages/IssuesPage"));
const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/PrivacyPolicyPage")
);
const TermsAndConditionsPage = lazy(() =>
  import("../features/public/pages/TermsAndConditionsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "doctors/:slug",
    element: <DotorDetailPage />,
  },
  {
    path: "/issues",
    element: <IssuesPage />,
  },
  {
    path: "/issues/:slug",
    element: <IssuesDetailPage />,
  },
  {
    path: "/treatments",
    element: <TreatmentsPage />,
  },
  {
    path: "/treatments/:slug",
    element: <TreatmentDetailPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogDetail />,
  },
  {
    path: "/contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointmentPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditionsPage />,
  },
];
export default publicRoute;
