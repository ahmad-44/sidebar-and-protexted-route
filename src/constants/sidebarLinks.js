import HomeImg from "../../public/icons/home.svg";
import CommunityImg from "../../public/icons/user.svg";
import CollectionsImg from "../../public/icons/star.svg";
import FindJobsImg from "../../public/icons/suitcase.svg";
import TagsImg from "../../public/icons/tag.svg";
import AccountImg from "../../public/icons/account.svg";
export const sidebarLinks = [
  {
    imgURL: HomeImg,
    route: "/",
    label: "Home",
  },
  {
    imgURL: CommunityImg,
    route: "/community",
    label: "Community",
  },
  {
    imgURL: CollectionsImg,
    route: "/collections",
    label: "Collections",
  },
  {
    imgURL: FindJobsImg,
    route: "/findjobs",
    label: "FindJobs",
  },
  {
    imgURL: TagsImg,
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: AccountImg,
    route: "/login",
    label: "Account",
  },
];
