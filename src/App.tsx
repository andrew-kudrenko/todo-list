import React from 'react'
import { Layout } from './components/Layout'
// import { useLocalStorageRecordState } from './hooks/useLocalStorageRecordState'
import { useRecordState } from './hooks/useRecordState'
import { MainPage } from './pages/MainPage'

export const App: React.FC = () => {
  const { records, addRecord, removeRecord, loading } = useRecordState()
  // const { records, addRecord, removeRecord } = useLocalStorageRecordState()

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

/*
  Для активации хука, записывающего данные в localstorage: 
    - раскомментировать строку с вызовом useLocalStorageState().
    - раскомментировать импорт
    - закомментировать пропс <MainPage /> loading, либо присвоить false
*/