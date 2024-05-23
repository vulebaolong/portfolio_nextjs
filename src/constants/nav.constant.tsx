import AssignmentIcon from "@mui/icons-material/Assignment";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import VerticalSplitRoundedIcon from '@mui/icons-material/VerticalSplitRounded';
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
   {
      title: `Text in page`,
      path: ROUTER.ADMIN.TEXT_IN_PAGE,
      icon: <VerticalSplitRoundedIcon />,
      childrens: [],
   },
];
