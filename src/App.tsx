import React from 'react'
import { Layout } from './components/Layout'
import { useRecordState } from './hooks/useRecordState'
import { MainPage } from './pages/MainPage'

export const App: React.FC = () => {
  const { records, addRecord, removeRecord, loading } = useRecordState()

  return (
    <Layout>
      <MainPage
        records={records}
        add={addRecord}
        remove={removeRecord}
        loading={loading}
      />
    </Layout>
  )
}