import React, {useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs'
import Job from './Job'
import { Container } from 'react-bootstrap';


function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. please Refresh Page.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
