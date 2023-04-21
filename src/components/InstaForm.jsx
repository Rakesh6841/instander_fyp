// import { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Instagram } from '@mui/icons-material';
// import CardMedia from '@mui/material';


const validationSchema = Yup.object({
  category: Yup.string().required('Required'),
  timeOfPost: Yup.number()
    .integer('Must be an integer')
    .min(0, 'Must be greater than or equal to 0')
    .max(23, 'Must be less than or equal to 23'),
  numOfFollowers: Yup.number()
    .integer('Must be an integer')
    .min(0, 'Must be greater than or equal to 0'),
  numOfPosts: Yup.number()
    .integer('Must be an integer')
    .min(0, 'Must be greater than or equal to 0')
});

const categories = [
  '',
  'Food',
  'Sports',
  'Music',
  'Dance',
  'Photography'
];

const hours = Array.from({ length: 24 }, (_, i) => i);

const initialValues = {
  category: '',
  timeOfPost: '',
  numOfFollowers: '',
  numOfPosts: ''
};

const InstaForm = () => {
  // const [subcatOptions, setSubcatOptions] = useState([]);

  // const handleCategoryChange = (event) => {
  //   const subcat = subcategories[event.target.value];
  //   setSubcatOptions(subcat ? subcat : []);
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Box mb={10} >
        {/* <Instagram fontSize='large' /> */}
        <img height="60" src='https://pngimg.com/uploads/instagram/instagram_PNG10.png' alt="gandu" />
        <Typography variant='h4' style={{fontFamily: 'Dancing Script, cursive'}}>Instander</Typography>
      </Box>
      {/* <CardMedia
        component="img"
        height="140"
        image="../images/instagram.png"
        alt="Alternative text for your image"
      /> */}
      <Box>
        
      </Box>
      {/* <a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons"></a> */}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <TextField
              name="category"
              label="Category"
              select
              variant="outlined"
              fullWidth
              value={formik.values.category}
              onChange={(e) => {
                formik.handleChange(e);
                // handleCategoryChange(e);
              }}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              name="timeOfPost"
              label="Time of Post (hrs)"
              select
              variant="outlined"
              fullWidth
              value={formik.values.timeOfPost}
              onChange={formik.handleChange}
              error={formik.touched.timeOfPost && Boolean(formik.errors.timeOfPost)}
              helperText={formik.touched.timeOfPost && formik.errors.timeOfPost}
            >
              {hours.map((hour) => (
                <MenuItem key={hour} value={hour}>{hour}</MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              name="numOfFollowers"
              label="Number of Followers"
              type="number"
              variant="outlined"
              fullWidth
              value={formik.values.numOfFollowers}
              onChange={formik.handleChange}
              error={formik.touched.numOfFollowers && Boolean(formik.errors.numOfFollowers)}
              helperText={formik.touched.numOfFollowers && formik.errors.numOfFollowers}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              name="numOfPosts"
              label="Number of Posts"
              type="number"
              variant="outlined"
              fullWidth
              value={formik.values.numOfPosts}
              onChange={formik.handleChange}
              error={formik.touched.numOfPosts && Boolean(formik.errors.numOfPosts)}
              helperText={formik.touched.numOfPosts && formik.errors.numOfPosts}
            />
          </Grid>

          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default InstaForm;

