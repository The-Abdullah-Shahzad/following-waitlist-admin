// import React from 'react'
// import { AntPagination } from './styles'

// const itemRender = (_, type, originalElement) => {
//   if (type === 'prev') {
//     return <a>Prev</a>
//   }
//   if (type === 'next') {
//     return <a>Next</a>
//   }
//   return originalElement
// }
// const pages = (number, pageSize) => {
//   const totalPages = Math.ceil(number / pageSize)
//   return Math.max(1, totalPages) // Ensure at least 1 page
// }

// export default function Pagination ({ data }) {
//   console.log(data?.length)
//   return (
//     <AntPagination
//       defaultCurrent={1}
//       total={() => console.log(pages(data?.length, 10))}
//       itemRender={itemRender}
//     />
//   )
// }

// import React from 'react'
// import { AntPagination } from './styles'

// const itemRender = (_, type, originalElement) => {
//   if (type === 'prev') {
//     return <a>Prev</a>
//   }
//   if (type === 'next') {
//     return <a>Next</a>
//   }
//   return originalElement
// }

// export default function Pagination({ data }) {
//   const pageSize = 10; // Set your page size here
//   const totalItems = data?.length || 0;
//   const totalPages = Math.ceil(totalItems / pageSize);
//   console.log(data.length)

//   return (
//     <AntPagination
//       current={1}
//       total={totalPages}
//       itemRender={itemRender}
//     />
//   )
// }

// import React from 'react'
// import { AntPagination } from './styles'

// const itemRender = (_, type, originalElement) => {
//   if (type === 'prev') {
//     return <a>Prev</a>
//   }
//   if (type === 'next') {
//     return <a>Next</a>
//   }
//   return originalElement
// }

// export default function Pagination({ data }) {
//   const pageSize = 10; // Set your page size here
//   const totalItems = data?.length || 0;
// const totalPages = Math.ceil(totalItems / pageSize);

//   return (
//     <AntPagination
//       current={1}
//       total={totalItems}
//       itemRender={itemRender}
//     />
//   )
// }

// import React from 'react';
// import { AntPagination } from './styles';

// const itemRender = (_, type, originalElement) => {
//   if (type === 'prev') {
//     return <a>Prev</a>;
//   }
//   if (type === 'next') {
//     return <a>Next</a>;
//   }
//   return originalElement;
// };

// export default function Pagination({ totalItems, currentPage, onPageChange }) {
//   const pageSize = 10; // Set your page size here
//   const totalPages = Math.ceil(totalItems / pageSize);

//   return (
//     <AntPagination
//       current={currentPage}
//       total={totalPages}
//       pageSize={pageSize}
//       itemRender={itemRender}
//       onChange={onPageChange}
//     />
//   );
// }

// import React from 'react';
// import { AntPagination } from './styles';

// const itemRender = (_, type, originalElement) => {
//   if (type === 'prev') {
//     return <a>Prev</a>;
//   }
//   if (type === 'next') {
//     return <a>Next</a>;
//   }
//   return originalElement;
// };

// export default function Pagination({ totalItems, currentPage, onPageChange }) {
//   const pageSize = 10; // Set your page size here
//   const totalPages = Math.ceil(totalItems / pageSize);

//   return (
//     <AntPagination
//       current={currentPage}
//       total={totalItems} // Pass the total number of items
//       pageSize={pageSize}
//       itemRender={itemRender}
//       onChange={onPageChange}
//     />
//   );
// }
import React from 'react'
import { AntPagination } from './styles'

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Prev</a>
  }
  if (type === 'next') {
    return <a>Next</a>
  }
  return originalElement
}

export default function Pagination ({ totalPages, currentPage, onPageChange }) {
  const pageSize = 10 // Set your page size here

  return (
    <AntPagination
      current={currentPage}
      total={totalPages}
      pageSize={pageSize}
      itemRender={itemRender}
      onChange={onPageChange}
    />
  )
}
