import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import articles from '../data/articles.json';

import Article from './Article';


interface FullBorderedGridProps {
  page: number;
}

export default function FullBorderedGrid(props: FullBorderedGridProps) {

  
  const currentPage = props.page;
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);



  return (
    <Box sx={{ flexGrow: 1, p: 2}} height={"100%"} width={"100%"}>
      <Grid
        container
        spacing={2}
      >
        {currentItems.map((article, index) => (
          <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160} >
            <Article 
              id={article.id}
              title={article.title} 
              price={article.price} 
              image={article.image} 
              hoverImage={article.hoverImage}
            />
          </Grid>
          
        ))}
      </Grid>
    </Box>
  );
}