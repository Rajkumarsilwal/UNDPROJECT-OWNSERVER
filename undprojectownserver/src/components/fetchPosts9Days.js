
// import moment from 'moment-timezone';

// export const fetchPosts9Days = async () => {
//   const allPosts = []; 
//   const today = moment().tz('UTC'); // Get the current date in UTC


//   for (let i = 0; i < 5; i++) {
//     // Calculate 3-day date ranges in UTC
//     const fromDate = today.clone().
//                       subtract(3 * i + 2, 'days').format('YYYY-MM-DD');
//     const toDate = today.clone().subtract(3 * i, 'days').format('YYYY-MM-DD');

//     try {
//       const response = await fetch(
//         `https://apps.und.edu/demo/public/index.php/post?from=${encodeURIComponent(fromDate)}&to=${encodeURIComponent(toDate)}`
//       );
//       console.log("Fetch data:: ", response);
//       const data = await response.json();
//       allPosts.push(...data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   }
//   // Sort posts based on the latest date and time so it will post the latest date
//   allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

//   return allPosts; 
// };

export const fetchPosts9Days = async () => {
  const allPosts = [];

  try {
    // Fetch all posts from the mock API
    const response = await fetch('http://localhost:3001/posts');
       
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    allPosts.push(...data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  // Sort posts based on the latest date and time
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return allPosts;
};