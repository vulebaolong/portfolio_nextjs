import { ExpandMore } from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useState } from "react";

type TProps = {
   item: any;
   pl: number;
};

export default function ListItemNav({ item, pl }: TProps) {
   const router = useRouter();
   const pathname = usePathname();

   const [open, setOpen] = useState(pathname.includes(item.path));

   const isButtonHaveToggle = item.childrens.length > 0;

   const handleClick = () => {
      if (isButtonHaveToggle) {
         setOpen(!open);
      }
      if (!isButtonHaveToggle) {
         if (pathname.slice(1) === item.path) return;
         router.push(item.path, { scroll: false });
      }
   };

   return (
      <>
         <ListItemButton selected={pathname === item.path} onClick={handleClick} sx={{ pl: pl }}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
            {item.childrens.length > 0 && <>{!open ? <NavigateNextIcon /> : <ExpandMore />}</>}
         </ListItemButton>
         {item.childrens.length > 0 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List>
                  {item.childrens.map((children: any, index: number) => {
                     const plNext = pl + 2;
                     return (
                        <Fragment key={index}>
                           <ListItemNav item={children} pl={plNext} />
                        </Fragment>
                     );
                  })}
               </List>
            </Collapse>
         )}
      </>
   );
}
