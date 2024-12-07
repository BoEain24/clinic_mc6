
import { create } from 'zustand'

const useIssuesCard = create((set) => ({
    issuesCards :[{
        id: 1,
        image:"/src/assets/images/issues/aging.jpg",
        title: "Aging & Saggy Skin",
    },
    {
        id: 2,
        image: "/src/assets/images/issues/v.jpg",
        title: "V Shape Face",
    },
    {
        id: 3,
        image: "/src/assets/images/issues/7.jpg",
        title: "Active Acnes & Acne Scar",
    },
    {
        id: 4,
        image: "/src/assets/images/issues/Skin-Pigmentation-Treatment.jpg",
        title: "Pigmentation",
    },
    {
        id: 5,
        image: "/src/assets/images/issues/dehydrated.jpg",
        title: "Dehydrated Skin",
    },
    {
        id: 6,
        image: "/src/assets/images/issues/dark eye.jpg",
        title: "Eye Bags & Dark Eye Circles",
    },
    {
        id: 7,
        image: "/src/assets/images/issues/hiko.jpg",
        title: "Hiko Nose threads",
    },
    {
        id: 8,
        image: "/src/assets/images/issues/body.jpg",
        title: "Body Brightening",
    },
    {
        id: 9,
        image: "/src/assets/images/issues/skin.jpg",
        title: "Skin Sculpting",
    },
    {
        id: 10,
        image: "/src/assets/images/issues/dull.jpg",
        title: "Dull-Looking Skin",
    },
    {
        id: 11,
        image: "/src/assets/images/issues/double.jpg",
        title: "Double Chin",
    },

    ]
}))


export default useIssuesCard