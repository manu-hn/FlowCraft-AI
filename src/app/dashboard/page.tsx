import React from 'react'
import SearchBar from './_components/SearchBar';
import TemplateList from './_components/TemplateList';

type Props = {}

const DashBoard = (props: Props) => {
  return (
    <section>
      <SearchBar />

      <TemplateList />
    </section>
  )
}

export default DashBoard;