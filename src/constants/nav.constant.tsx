import AssignmentIcon from "@mui/icons-material/Assignment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { ROUTER } from "./router.constant";

export const LIST_NAV = [
   {
      title: `About`,
      path: ROUTER.ADMIN.ABOUT,
      icon: <PersonRoundedIcon />,
      childrens: [],
   },
   {
      title: `My Project`,
      path: ROUTER.ADMIN.MY_PROJECT,
      icon: <AssignmentIcon />,
      childrens: [],
   },
   {
      title: `Contract`,
      path: ROUTER.ADMIN.CONTRACT,
      icon: <EmailRoundedIcon />,
      childrens: [],
   },
];
