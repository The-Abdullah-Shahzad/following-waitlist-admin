
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
