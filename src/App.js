import React from "react";
import { Row, Col, TabContent } from "reactstrap";
import { Nav, NavItem, NavLink, TabPane} from "reactstrap"
import { useState } from "react";
import { Link } from "react-router-dom"

function App() {
  const tabs = {
    "draft" : {
      title: "Draft",
      content: (
        <Row className="p-2">
          <Col sm='12'  className="p-2">
            <h4 className='text-info'>Draft Task</h4>
          </Col>
        </Row>
      )
    },
    "in_progress" : { 
      title: "In Progress",
      content: (
        <Row className="p-2">
          <Col sm='12'  className="p-2">
            <h4 className='text-primary'>In Progress Task</h4>
          </Col>
        </Row>
      )
    },
    "completed" : {
      title: "Completed",
      content: (
        <Row className="p-2">
          <Col sm='12'  className="p-2">
            <h4 className='text-success'>Completed Task</h4>
          </Col>
        </Row>
      )
    }
  }
  const [activeTab, setActiveTab] = useState('in_progress');

  const toggle = tab => {
    if (activeTab !==  tab) setActiveTab(tab);
  }
  return (
    <div className="row p-4">
      <div className="col-lg-12">
        <h2 className="mb-4">Tasks</h2>
        <Link to={`/`+{activeTab}} className='links'></Link>
        <Nav tabs>
          {

            Object.entries(tabs).map((tab)=>(
              <NavItem key={tab[0]}>
                <NavLink className={activeTab === tab[0] ? "active":""} onClick={()=>{toggle(tab[0]);}}
                role="button"
                >
                  {tab[1].title}
                </NavLink>
              </NavItem>
            ))
          }
        </Nav>
        <TabContent activeTab={activeTab}>
          {
            Object.entries(tabs).map((tab) => (<TabPane key={tab[0]} tabId={tab[0]}>{tab[1].content}</TabPane>))
          }
        </TabContent>
      </div>
    </div>
  );
}



export default App;
