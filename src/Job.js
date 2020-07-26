import React from 'react'
import { Card } from 'react-bootstrap'

export default function Job({ job }) {
    return (
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
                  <Card.Title>
                  {job.title} - <span className="text-muted 
                  font-weight-light">{job.company}</span>
                </Card.Title>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}
