import ProjectItem from "@/components/root/project/ProjectItem";
import { Box } from "@mui/material";

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
            mt: `50px`,
         }}
      >
         {dataProjects.status &&
            dataProjects.data?.map((project, index) => (
               <ProjectItem project={project} index={index} key={project._id} />
            ))}
      </Box>
   );
}
