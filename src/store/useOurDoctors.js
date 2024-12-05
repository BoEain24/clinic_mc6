import { create } from "zustand";

const useOurDoctor = create((set) => ( {
  doctors: [

    {
      id: 1,
      images: {
        mainImg: 'src/assets/images/about-us/aesthetic clinic Asian doctor(female) photo example.jpg',
        firstImg:
          "src/assets/images/about-us/Transform Your Skin with Hydra-facial_ The Ultimate Guide to Glowing Skin 2.jpg",
        secondImg: "src/assets/images/about-us/skin-revitalization-2.webp",
      },
  
      names: { fullName: "Dr. Sophia Lin", shortName: "Dr. Lin" },
      degree: "MBBS (King’s College London)",
      description:
        "Dr. Sophia Lin is a board-certified aesthetic physician with over 15 years of experience in cosmetic medicine. Dr. Sophia Lin is known for her precision and dedication to natural-looking results.",
      specialties:
        "Specialties: Facial Rejuvenation, Non-Surgical Lifting, Skin Resurfacing, and Body Contouring",
      background: {
        firstPara:
          "Dr. Sophia Lin (Dr. Lin) is the founder and Medical Director of Paradise Aesthetic Clinic, which was set up in October 2020.",
  
        secondPara:
          "Dr. Sophia Lin earned her Aesthetic Medicine Program from the King’s College London, and further she went on to complete specialized training in cosmetic dermatology at Seoul National University in South Korea.",
      },
      about: {
        firstPara:
          "Dr. Sophia Lin is a highly skilled aesthetic medicine specialist and founder of Paradise Aesthetic Clinic. Dr. Lin’s passion lies in empowering her clients to feel confident and radiant.",
  
        secondPara:
          "Dr Lin commitment to excellence has earned her accolades, including “Top Aesthetic Doctor of the Year”, and invitations to speak at international aesthetic medicine conferences.",
      },
  
      areaOfSpecialty:
        "Dr. Sophia Lin has specialized in non-surgical facial rejuvenation, skin revitalization, and body contouring. Dr. Lin combines her expertise with a personalized approach to help clients achieve natural, confidence-boosting results. Her commitment to safe, advanced techniques has made her a trusted expert in the field.",
      isFounder: true,
      slug: "dr-sophia-lin",
    },
    {
      id: 2,
      images: {
        mainImg: "src/assets/images/about-us/aesthetic clinic doctor photo example.jpg",
        firstImg: "src/assets/images/about-us/dr-emily2.jpg",
        secondImg: "src/assets/images/about-us/dr-emily.jpg",
      },
  
      names: { fullName: "Dr Emily Tan", shortName: " Dr. Emily " },
      degree: "MBBS (National University of Singapore)",
      description:
        "Dr. Emily Tan is a renowned aesthetic doctor with a background in dermatology and over 10 years of experience in cosmetic medicine. Her approach combines a deep understanding of Asian skin types with the latest non-surgical techniques to provide subtle, natural-looking results.",
      specialties:
        "Specialties: anti-aging procedures and skin rejuvenation, focusing on treatments such as dermal fillers, microneedling, and thread lifts. ",
      background: {
        firstPara:
          "Dr. Emily Tan holds a Medical Degree (MBBS) from the National University of Singapore (NUS), where she received comprehensive training in medicine. Following her undergraduate education, she pursued postgraduate studies in Aesthetic Medicine, further specializing in Dermatology, Anti-Aging, and Cosmetic Surgery techniques.",
      },
  
      about: {
        firstPara:
          "Dr. Emily Tan has over 10 years of experience in the aesthetic field, having worked in renowned clinics both in Asia and internationally. Her expertise includes non-surgical facelifts, skin rejuvenation, body contouring, and personalized treatment plans tailored to each client’s unique needs.",
      },
  
      areaOfSpecialty:
        "Dr. Emily Tan holds specialized certifications in advanced non-invasive cosmetic procedures such as: Botox and Dermal Fillers for wrinkle reduction and volume restoration, Laser Skin Treatments for skin resurfacing, pigmentation correction, and hair removal, HIFU (High-Intensity Focused Ultrasound) for skin tightening and lifting.",
      isFounder: false,
      slug: "dr-emily-tan",
    },
    {
      id: 3,
      images: {
        mainImg: "src/assets/images/about-us/aesthetic clinic doctor photo example (1).jpg",
        firstImg: "src/assets/images/about-us/dr-oliver.jpeg",
        secondImg: "src/assets/images/about-us/dr-oliver2.jpg",
      },
  
      names: { fullName: "Dr Oliver Grant ", shortName: "Dr. Oliver" },
      degree: "MBBS (National University of Seoul)",
      description:
        "With a foundation in plastic surgery, Dr. Oliver Grant has more than 15 years of experience in both reconstructive and aesthetic procedures. He completed a fellowship focused on minimally invasive facial procedures.",
      specialties:
        "Specialties: facial contouring and sculpting, thread lifts non-surgical rhinoplasty and jawline contouring.",
      background: {
        firstPara:
          "Dr. Oliver Grant earned his Medical Degree ( (MBBS) from the National University of Seoul followed by specialized postgraduate training in Dermatology at University College London (UCL). He further completed an Advanced Fellowship in Aesthetic Medicine at the American Academy of Dermatology (AAD). ",
      },
  
      about: {
        firstPara:
          "Dr. Grant is particularly known for his expertise in facial aesthetics, including the non-surgical facelift, wrinkle treatments, and rejuvenating procedures. His precision and artistic approach to treatments ensure that every patient receives a personalized treatment plan.",
      },
  
      areaOfSpecialty:
        "Dr. Oliver Grant specializes in facial aesthetics (Botox, dermal fillers, non-surgical facelifts), skin rejuvenation (laser treatments, chemical peels), body contouring (CoolSculpting, radiofrequency), and scar/acne treatments (microneedling, laser resurfacing). He offers personalized skincare solutions to address aging, acne, and pigmentation concerns, ensuring natural and balanced results.",
      isFounder: false,
      slug: "dr-oliver-grant",
    },
  ]
}))



export default useOurDoctor;
