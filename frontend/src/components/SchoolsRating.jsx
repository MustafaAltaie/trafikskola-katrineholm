// @mui/material": "^7.0.2"

import Rating from '@mui/material/Rating';

const SchoolsRating = ({ rating, size, colorFill, colorEmpty }) => (
  <Rating
    value={rating}
    precision={0.1} // allows part-star
    readOnly
    size={size}
    sx={{
        '.MuiRating-iconFilled': {
          color: colorFill,
        },
        '.MuiRating-iconEmpty': {
          color: colorEmpty,
        }
    }}
  />
);

export default SchoolsRating;