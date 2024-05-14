import ProjectItem from "@/components/root/project/ProjectItem";
import { ROUTER } from "@/constants/router.constant";
import { Box } from "@mui/material";
import Link from "next/link";

const basePath = `/images/project/`;

type TProps = {
   dataProjects: TResonAction<TProject[] | null>;
};

export default function MyProject({ dataProjects }: TProps) {
   return (
      <Box
         sx={{
            display: `grid`,
            justifyItems: `center`,
            gridTemplateColumns: {
               xs: `1fr`,
               lg: `1fr 1fr`,
            },
            gap: `50px`,
         }}
      >
         {dataProjects.status &&
            dataProjects.data?.map((project, index) => (
               // <Box onClick={() => {
               //    console.log(123);
               //  }}>
               //    <ProjectItem project={project} index={index} key={project._id} />
               // </Box>
               <Link
                  href={`${ROUTER.ADMIN.MY_PROJECT}/${project._id}`}
                  style={{
                     textDecoration: `none`,
                     color: `unset`,
                  }}
               >
                  <ProjectItem project={project} index={index} key={project._id} />
               </Link>
            ))}
      </Box>
   );
}
