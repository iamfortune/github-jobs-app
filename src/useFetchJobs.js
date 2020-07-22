import { useReducer } from 'react'

export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });
    
    return {
        jobs: [],
        loading: false,
        error: false
    }
}