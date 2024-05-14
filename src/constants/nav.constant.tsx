import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import NatureRoundedIcon from "@mui/icons-material/NatureRounded";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export const LIST_NAV = [
   {
      title: `Balance`,
      path: ``,
      icon: <PeopleAltRoundedIcon />,
      childrens: [],
   },
   {
      title: `Commission`,
      path: ``,
      icon: <NatureRoundedIcon />,
      childrens: [],
   },
   {
      title: `Nft`,
      path: ``,
      icon: <ConfirmationNumberIcon />,
      childrens: [],
   },
   {
      title: `user`,
      path: `user`,
      icon: <PeopleAltRoundedIcon />,
      childrens: [
         {
            title: `Fund`,
            path: `admin/user/fund`,
            icon: <PeopleAltRoundedIcon />,
            childrens: [
               {
                  title: `List`,
                  path: `admin/user/fund/list`,
                  icon: <PeopleAltRoundedIcon />,
                  childrens: [],
               },
               {
                  title: `Deposit`,
                  path: `admin/user/fund/deposit`,
                  icon: <PeopleAltRoundedIcon />,
                  childrens: [],
               },
               {
                  title: `Withdraws`,
                  path: `admin/user/fund/withdraws`,
                  icon: <PeopleAltRoundedIcon />,
                  childrens: [],
               },
               {
                  title: `Logs`,
                  path: `admin/user/fund/logs`,
                  icon: <PeopleAltRoundedIcon />,
                  childrens: [],
               },
            ],
         },
         {
            title: `Stacking`,
            path: `admin/user/stacking`,
            icon: <PeopleAltRoundedIcon />,
            childrens: [],
         },
         {
            title: `Vesting`,
            path: `admin/user/vesting`,
            icon: <PeopleAltRoundedIcon />,
            childrens: [],
         },
      ],
   },
];
