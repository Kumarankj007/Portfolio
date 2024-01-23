import React from "react";
import image from "./IMG-20191117-WA0002.jpg";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends React.Component {
  render() {

    return (
      <div>
        <div className="heading">
          <div className="jumbotron text-center">
            <h1 className="display-4 jumbotron">Kumaran</h1>
            <h5 className="myoccupation">Website Developer</h5>


            <ul className="nav nav-pills nav-justified m-5 " id="navigation">
              <li className="nav-item">
                <a className="nav-link text-decoration-none border border-primary" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none border border-primary" href="#Project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-none border border-primary" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div><br/>

          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="rounded-circle">
                  <img
                    src={image}
                    className="rounded-circle"
                    alt="myk"
                    width="180px"
                    height="200px"
                  />
                </div>
                <br />
              </div>
              <div className="col-sm-8">
                <h2 className="myskills">Career objective</h2>
                <br />
                <p className="skills" style={{width: '700px'}} >
                  To work in a professional environment where I can find myself
                  in decisive opportunities for creating value added career for
                  myself and extend quality service to my organzations.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="myskills">Techncal Skills</h2>
              <br />
              <ul className="skills">
                <li>Front end languages - HTML, CSS, Javascript, React JS</li>
                <li>Backend languages - Nodejs, Express</li>
                <li>Database - Mongo DB</li>
              </ul>
            </div>

            <div className="col-sm-6" >
              <h2 className="myskills">Certification</h2>
              <br />
              <ul className="skills">
                <li>C,C++ certified for CSC</li>
                <li>React JS certified for Elysium academy</li>
              </ul>
            </div>
            
            <div className="col-sm-12"><br /><br />
              <h2 className="myskills" id='Project'>Myproject</h2>
              <br /><br />
              <div>
                <table className="table table-light table-striped">
                  <thead>
                    <tr>
                      <th>Project Title</th>
                      <th>Project Tools</th>
                      <th>Project link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Fetch API</td>
                      <td>HTML, CSS, Javascript, React JS, @blueprintjs/core</td>
                      <td>
                        <nav>
                           <Link to="../FetchAPI">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Redux Form</td>
                      <td>HTML, CSS, Javascript, Bootstrap, React JS</td>
                      <td>
                        <nav>
                           <Link to="../Reduxform">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Count Redux</td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                        <nav>
                           <Link to="../Count">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Guess Number</td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                         <nav>
                           <Link to="../Guess">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                    <tr>
                      <td>Calculator </td>
                      <td>HTML, CSS, Javascript, React JS</td>
                      <td>
                         <nav>
                           <Link to="../Calculator">Run Project</Link>
                         </nav>
                      </td>
                    </tr>
                  </tbody>
                </table><br /><br /><br />
              </div>
            </div>

            <div className="col-sm-12">
              <h2 className="myskills">Education qualification</h2>
              <br /><br />
              <div>
                <table className="table table-light table-striped">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>School/College</th>
                      <th>Y.O.P</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.E (ECE)</td>
                      <td>Solamalai college of Engneering</td>
                      <td>2023</td>
                      <td>76%</td>
                    </tr>
                    <tr>
                      <td>HSC</td>
                      <td>Sourastra Boys Higher Secondary</td>
                      <td>2019</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>SSLC</td>
                      <td>Sourastra Boys Higher Secondary</td>
                      <td>2017</td>
                      <td>84%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="jumbotron text-center" id="footer">
            <ul className="nav justified-content-center">
              <li className="nav-item">
                <a
                  href="https://www.linkedn.com/"
                  className="fa fa-linkedin nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li className="nav-item">
                <a
                  href="https://www.youtube.com/"
                  className="fa fa-youtube nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li className="nav-item">
                <a
                  href="https://www.github.com/"
                  className="fa fa-gthub nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/"
                  className="fa fa-instagram nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/"
                  className="fa fa-facebook nav-link"
                  style={{ color: "blue" }}
                />
              </li>
              <li className="nav-item">
                <a
                  href="https://www.twitter.com/"
                  className="fa fa-twitter nav-link"
                  style={{ color: "blue" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
