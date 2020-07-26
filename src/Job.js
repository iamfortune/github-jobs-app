import React from 'react'
import { Badge, Card } from 'react-bootstrap'

export default function Job({ job }) {
    return (
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {job.title} -{" "}
                <span
                  className="text-muted 
                  font-weight-light"
                >
                  {job.company}
                </span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(job.created_at.toLocaleDateString())}
              </Card.Subtitle>
              <Badge>{job.type}</Badge>
              <Badge>{job.location}</Badge>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
}
