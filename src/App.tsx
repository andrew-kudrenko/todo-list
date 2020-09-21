import React, { useState } from 'react'
import { Layout } from './components/Layout'
import { useLocalStorageRecordState } from './hooks/useLocalStorageRecordState'
import { useRecordState } from './hooks/useRecordState'
import { MainPage } from './pages/MainPage'

export const App: React.FC = () => {
  const [useLS, setUseLS] = useState<boolean>(true)

  const { records, addRecord, removeRecord, loading } = useRecordState()
  const { records: recordsLS, addRecord: addRecordLS, removeRecord: removeRecordLS } = useLocalStorageRecordState()

  let mainElement: React.ReactElement =
    <MainPage
      records={recordsLS}
      add={addRecordLS}
      remove={removeRecordLS}
    />

  if (!useLS) {
    mainElement =
      <MainPage
        records={records}
        add={addRecord}
        remove={removeRecord}
        loading={loading}
      />
  }

  return (
    <Layout>
      <h2
        onClick={setUseLS.bind(null, !useLS)} 
        className="header text-center"
      >
        Список дел из&nbsp; 
        <span className="primary-text">
          {useLS ? 'Local Storage' : 'MongoDB'}
        </span>
      </h2>
      {mainElement}
    </Layout>
  )
}